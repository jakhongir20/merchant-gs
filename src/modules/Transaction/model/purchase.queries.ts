import { useQuery, UseQueryResult } from "@tanstack/react-query";
import {
  PurchaseDetails,
  PurchaseLogistic,
  PurchaseService,
} from "@/features/purchase/purchases/model";
import { GenerateCodeResponse } from "@/features/crm/organizations/model/organization.types";
import { Product } from "@/features/purchase/no-ship/model/no-shipment.types";
import { ResponseData } from "@/shared/types";

export function usePurchaseDetail(
  guid: string,
): UseQueryResult<PurchaseDetails> {
  return useQuery({
    queryKey: ["purchaseDetail", guid],
    queryFn: () => PurchaseService.getPurchaseDetail(guid),
    enabled: !!guid,
  });
}

export function useGetTaxes(): UseQueryResult {
  return useQuery({
    queryKey: ["taxes"],
    queryFn: () => PurchaseService.getTaxes(),
  });
}

export function useGetDiscounts(): UseQueryResult {
  return useQuery({
    queryKey: ["discounts"],
    queryFn: () => PurchaseService.getDiscounts(),
  });
}

export function usePurchaseProduct(
  purchase: number,
): UseQueryResult<ResponseData<Product>> {
  return useQuery({
    queryKey: ["purchaseProduct", purchase],
    queryFn: () => PurchaseService.getPurchaseProduct(purchase),
    enabled: !!purchase,
  });
}

export function usePurchaseLogistics(
  id: number,
): UseQueryResult<ResponseData<PurchaseLogistic>> {
  return useQuery({
    queryKey: ["purchaseLogistics", id],
    queryFn: () => PurchaseService.getPurchaseLogistics(id),
    enabled: !!id,
  });
}

export function useGenerateCode(
  m: string,
): UseQueryResult<GenerateCodeResponse> {
  return useQuery({
    queryKey: ["generateCode"],
    queryFn: () => PurchaseService.getGenerateCode(m),
  });
}
