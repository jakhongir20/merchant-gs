import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import { Purchase, PurchaseService } from "@/features/purchase/purchases/model";

export function useDeletePurchase(
  options?: UseMutationOptions<unknown, unknown, string>,
) {
  const mutationFn: MutationFunction<unknown, string> = async (guid: string) =>
    await PurchaseService.deletePurchase(guid);

  return useMutation({
    mutationKey: ["deletePurchase"],
    mutationFn,
    ...options,
  });
}

export function useCreatePurchase(
  options?: UseMutationOptions<Purchase, unknown, Purchase>,
) {
  const mutationFn: MutationFunction<Purchase, Purchase> = async (
    formData: Purchase,
  ) => await PurchaseService.createPurchase(formData);

  return useMutation<Purchase, unknown, Purchase>({
    mutationKey: ["createPurchase"],
    mutationFn,
    ...options,
  });
}

export function useUpdatePurchase(
  options?: UseMutationOptions<
    Purchase,
    unknown,
    { guid: string; formData: Purchase }
  >,
) {
  const mutationFn: MutationFunction<
    Purchase,
    { guid: string; formData: Purchase }
  > = async ({ guid, formData }) =>
    await PurchaseService.updatePurchase(formData, guid);

  return useMutation<Purchase, unknown, { guid: string; formData: Purchase }>({
    mutationKey: ["updatePurchase"],
    mutationFn,
    ...options,
  });
}
