import {
  MutationFunction,
  useMutation,
  UseMutationOptions,
} from "@tanstack/react-query";
import {
  TransactionDetails,
  TransactionService,
} from "@/modules/Transaction/model";

export function useUpdateTransaction(
  options?: UseMutationOptions<
    TransactionDetails,
    unknown,
    { guid: string; formData: TransactionDetails }
  >,
) {
  const mutationFn: MutationFunction<
    TransactionDetails,
    { guid: string; formData: TransactionDetails }
  > = async ({ guid, formData }) =>
    await TransactionService.updateTransaction(formData, guid);

  return useMutation<
    TransactionDetails,
    unknown,
    { guid: string; formData: TransactionDetails }
  >({
    mutationKey: ["updateTransaction"],
    mutationFn,
    ...options,
  });
}
