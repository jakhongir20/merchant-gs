import { Currency, Organization, Partner, Recorder } from "@/shared/types";
import { ShippingType, Stage } from "@/features/purchase/order";

export interface Purchase {
  id: number;
  guid: string;
  code: string;
  partner: Partner;
  organization: Organization;
  discountPercent: string;
  discountAmount: string;
  taxPercent: string;
  taxAmount: string;
  closedAmount: string;
  openAmount: string;
  totalAmount: string;
  documentClosedAmount: string;
  documentOpenAmount: string;
  date: string;
  requiredPeriod: string;
  status: number;
  registrationDate: string;
  currency: string;
}

export interface Product {
  id: number;
  purchase: number;
  product: number;
  discount: number;
  discountPercent: string;
  discountAmount: string;
  taxPercent: string;
  taxAmount: string;
  quantity: string;
  unitPrice: string;
  totalAmount: string;
  warehouse: number;
  location: number;
  costPrice: string;
  declaration: string;
  currency: number;
  uom: number;
  registrationDate: string;
  recorder: number;
  taxes: number[];
  _uid: string;
}

export interface Logistics {
  code: string;
  partner: number;
  shippingType: number;
  shippingAddress: string;
  deliveryAddress: string;
  amount: string;
  documentAmount: string;
  currency: number;
  stage: number;
  sender: string;
  recipient: string;
  note: string;
  isOverallSumActivate: boolean;
  isAddCostPrice: boolean;
  isInvoiceCreate: boolean;
  extra_data: string;
  registrationDate: string;
  recorder: number;
  purchase: number;
}

export interface Invoice {
  code: string;
  partner: number;
  organization: number;
  partnerAmount: string;
  transportationAmount: string;
  totalAmount: string;
  currency: number;
  documentCurrency: string;
  documentTotalAmount: string;
  discountPercent: string;
  discountAmount: string;
  taxPercent: string;
  taxAmount: string;
  closedAmount: string;
  openAmount: string;
  documentClosedAmount: string;
  documentOpenAmount: string;
  date: string;
  requiredPeriod: string;
  status: number;
  note: string;
  registrationDate: string;
  recorder: number;
  products: Array<Product>;
  logistics: Array<Logistics>;
}

export interface PurchaseAdd {
  code: string;
  partner: number;
  organization: number;
  partnerAmount: string;
  transportationAmount: string;
  totalAmount: string;
  currency: number;
  documentCurrency: string;
  documentTotalAmount: string;
  discountPercent: string;
  discountAmount: string;
  taxPercent: string;
  taxAmount: string;
  closedAmount: string;
  openAmount: string;
  documentClosedAmount: string;
  documentOpenAmount: string;
  date: string;
  requiredPeriod: string;
  status: number;
  note: string;
  registrationDate: string;
  recorder: number;
  products: Array<Product>;
  logistics: Array<Logistics>;
}

export interface PurchaseDetails {
  id: number;
  guid?: string;
  code?: string;
  partner?: Partner;
  organization?: Organization;
  partnerAmount?: string;
  transportationAmount?: string;
  totalAmount?: string;
  currency?: Currency;
  documentCurrency?: string;
  documentTotalAmount?: string;
  discountPercent?: string;
  discountAmount?: string;
  taxPercent?: string;
  taxAmount?: number;
  closedAmount: string;
  openAmount: string;
  documentClosedAmount: string;
  documentOpenAmount: string;
  date: string;
  requiredPeriod: string;
  status: number;
  note: string;
  registrationDate: string;
  recorder?: Recorder;
}

export interface PurchaseLogistic {
  id: number;
  guid: string;
  code: string;
  partner: Partner;
  shippingType: ShippingType;
  shippingAddress: string;
  deliveryAddress: string;
  amount: string;
  documentAmount: string;
  currency: Currency;
  stage: Stage;
  sender: string;
  recipient: string;
  note: string;
  isOverallSumActivate: boolean;
  isAddCostPrice: boolean;
  isInvoiceCreate: boolean;
  extra_data: string;
  registrationDate: string; // Consider using Date type if necessary
  recorder: Recorder;
}
