export type ResponseData<T> = {
  results: T[];
  count: number;
  next: string | null;
  previous: string | null;
};

export type PaymentType = "humo" | "uzcard" | "visa" | "mastercard";

export enum Status {
  Success = 1, // Успешно
  InProgress = 2, // В обработке
  Refund = 3, // Возврат
  Rejected = 4, // Отклонено
}
