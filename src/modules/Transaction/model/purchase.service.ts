import { ApiService } from "@/shared/lib/services";
import { Purchase, PurchaseDetails, PurchaseLogistic } from ".";
import { Product, ResponseData } from "@/shared/types";

export class PurchaseService {
  static async createPurchase(formData: Purchase): Promise<Purchase> {
    return await ApiService.$post<Purchase>(`/purchase/`, formData);
  }

  static async updatePurchase(
    formData: Purchase,
    guid: string,
  ): Promise<Purchase> {
    return await ApiService.$patch<Purchase>(`/purchase/${guid}/`, formData);
  }

  static async deletePurchase(guid: string): Promise<void> {
    return await ApiService.$delete<void>(`/purchase/${guid}/`);
  }

  static async getPurchaseDetail(guid: string): Promise<PurchaseDetails> {
    return await ApiService.$get<PurchaseDetails>(`/purchase/${guid}/`);
  }

  static async getTaxes(): Promise<void> {
    return await ApiService.$get<void>(`/tax/`);
  }

  static async getDiscounts(): Promise<void> {
    return await ApiService.$get<void>(`/discount/`);
  }

  static async getPurchaseProduct(
    purchase: number,
  ): Promise<ResponseData<Product>> {
    return await ApiService.$get<ResponseData<Product>>(`/purchase-product/`, {
      params: { purchase },
    });
  }

  static async getPurchaseLogistics(
    purchase: number,
  ): Promise<ResponseData<PurchaseLogistic>> {
    return await ApiService.$get<ResponseData<PurchaseLogistic>>(
      `/purchase-logistic/`,
      {
        params: {
          purchase,
        },
      },
    );
  }

  static async getGenerateCode(m: string) {
    return await ApiService.$get(`/code-generator/`, {
      params: { m },
    });
  }
}
