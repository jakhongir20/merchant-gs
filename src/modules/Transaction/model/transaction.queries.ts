import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  TransactionDetails,
  TransactionService,
} from "@/modules/Transaction/model";

export function useTransactionDetails(
  guid: string,
): UseQueryResult<TransactionDetails> {
  return useQuery({
    queryKey: ["transactionDetails", guid],
    queryFn: () => TransactionService.getTransactionDetails(guid),
    enabled: !!guid,
  });
}
