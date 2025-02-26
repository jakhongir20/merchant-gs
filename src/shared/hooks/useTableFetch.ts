import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";
import { ApiService } from "@/shared/lib/services";

type TableDataResponse<T> = {
  results: T[];
  total: number;
  count: number;
};

const INITIAL_LIMIT = 10;
const INITIAL_PAGE = 1;

export const useTableFetch = <T>(
  url: string,
  initialParams = {},
  ignoredParams: string[] = ["tab"],
) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [tableData, setTableData] = useState<T[]>([]);
  const [search, setSearch] = useState(searchParams.get("search") || "");
  const [error] = useState<Error | null>(null);

  const [pagination, setPagination] = useState({
    total: 0,
    limit: Number(searchParams.get("limit")) || 10,
    page: Number(searchParams.get("page")) || 1,
    offset: 0,
  });

  const offset = useMemo(
    () => (pagination.page - 1) * pagination.limit,
    [pagination.page, pagination.limit],
  );

  const params = useMemo(() => {
    const allParams: { [key: string]: string | number | boolean } = {
      ...initialParams,
      limit: pagination.limit,
      offset,
      search,
      p: true,
      ordering: "-id",
    };
    searchParams.forEach((value, key) => {
      if (!ignoredParams.includes(key)) {
        allParams[key] = value;
      }
    });
    return allParams;
  }, [
    initialParams,
    pagination.limit,
    offset,
    search,
    searchParams,
    ignoredParams,
  ]);

  const queryKey = useMemo(() => {
    return [
      "tableData",
      url,
      {
        ...params,
        page: pagination.page,
        limit: pagination.limit,
      },
    ];
  }, [url, params, pagination.page, pagination.limit]);

  const fetchTableData = async (url: string, options: AxiosRequestConfig) => {
    return await ApiService.$get<TableDataResponse<T>>(url, options);
  };

  const {
    data,
    isPending,
    error: isError,
    refetch,
  } = useQuery({
    queryKey,
    queryFn: async () => await fetchTableData(url, { params }),
  });

  useEffect(() => {
    if (!isPending && !isError) {
      setTableData(data?.results || []);
      setPagination((prev) => ({
        ...prev,
        total: data?.count || 0,
      }));
    }
  }, [isPending, isError, data]);

  const onPageChange = (page: number) => {
    if (page && page !== pagination.page) {
      pagination.page = page;
      setPagination((prev) => ({ ...prev, page }));
      setSearchParams((prev) => {
        prev.set("page", page.toString());
        return prev;
      });
    }
  };

  useEffect(() => {
    const newLimit = Number(searchParams.get("limit")) || INITIAL_LIMIT;
    const newPage = Number(searchParams.get("page")) || INITIAL_PAGE;
    const newSearch = searchParams.get("search") || "";

    if (newSearch !== search) {
      setPagination((prev) => ({
        ...prev,
        limit: INITIAL_LIMIT,
        page: INITIAL_PAGE,
      }));
      setSearch(newSearch);
    } else {
      setPagination((prev) => ({
        ...prev,
        limit: newLimit,
        page: newPage,
      }));
    }
  }, [searchParams, search]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTop();
  }, [tableData]);

  return {
    tableData,
    pagination,
    isLoading: isPending,
    error,
    onPageChange,
    refetch,
  };
};
