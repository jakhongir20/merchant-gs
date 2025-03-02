import { PaymentType, Status } from "@/shared/types";

export interface TransactionRow {
  key: string;
  direction: "in" | "out";
  createdAt: Date;
  cardBrand: PaymentType;
  cardNumber: string;
  amount: number;
  status: Status;
  store: string;
  id: string;
}

export interface TransactionDetails {
  status: Status;
  store: string;
  date: string;
}
