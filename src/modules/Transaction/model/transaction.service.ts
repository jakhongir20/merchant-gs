import { ApiService } from "@/shared/lib/services";
import { TransactionDetails } from "@/modules/Transaction/model";

export class TransactionService {
  static async getTransactionDetails(
    guid: string,
  ): Promise<TransactionDetails> {
    return await ApiService.$get<TransactionDetails>(`/transaction/${guid}/`);
  }

  static async updateTransaction(
    formData: TransactionDetails,
    guid: string,
  ): Promise<TransactionDetails> {
    return await ApiService.$patch<TransactionDetails>(
      `/transaction/${guid}/`,
      formData,
    );
  }
}
