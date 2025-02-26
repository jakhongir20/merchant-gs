import dayjs from "dayjs";
// src/utils/statusOptions.ts
import { useTranslation } from "react-i18next";
import { PhoneNumberUtil } from "google-libphonenumber";
import { DATE_FETCH_FORMAT } from "@/shared/constants";

export function formatDate(
  date?: string | Date,
  style?: string,
  locale?: "uz" | "ru" | "en",
) {
  return dayjs(date || new Date())
    .locale(locale ? (locale === "uz" ? "uz-latn" : locale) : "ru")
    .format(style ?? "DD.MM.YYYY");
}

export function formatPhoneNumber(phone?: string) {
  const format = phone
    ?.replace(/\D/g, "")
    .match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
  return `+${format && format[1] ? format[1] : ""}
          ${format && format[2] ? format[2] : ""}
          ${format && format[3] ? format[3] : ""}
          ${format && format[4] ? format[4] : ""} ${
            format && format[5] ? format[5] : ""
          }`;
}

export const useStatusOptions = () => {
  const { t } = useTranslation();
  return [
    { id: "1", name: t("common.status.draft") },
    { id: "2", name: t("common.status.open") },
    { id: "3", name: t("common.status.pending") },
    { id: "4", name: t("common.status.inProgress") },
    { id: "5", name: t("common.status.mixed") },
    { id: "6", name: t("common.status.received") },
    { id: "7", name: t("common.status.confirming") },
    { id: "8", name: t("common.status.closed") },
    { id: "9", name: t("common.status.canceled") },
    { id: "10", name: t("common.status.deleted") },
    { id: "11", name: t("common.status.paid") },
    { id: "12", name: t("common.status.archived") },
    { id: "13", name: t("common.status.incoming") },
    { id: "14", name: t("common.status.qualification") },
    { id: "15", name: t("common.status.moved") },
  ];
};

interface OptionActive {
  value: boolean;
  label: string;
}

export const useIsActiveOptions = (): OptionActive[] => {
  const { t } = useTranslation();
  return [
    { value: true, label: t("common.status.active") },
    { value: false, label: t("common.status.inactive") },
  ] as OptionActive[];
};

export const formCheckboxValidator = (_: unknown, value: boolean) =>
  value ? Promise.resolve() : Promise.reject();

export const formPhoneValidator = (_: unknown, value: string) => {
  const phoneUtil = PhoneNumberUtil.getInstance();
  const isPhoneValid = (phone: string) => {
    try {
      return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
    } catch (error) {
      return false;
    }
  };
  return isPhoneValid(value) ? Promise.resolve() : Promise.reject();
};

export const cleanPhoneNumber = (
  phone: string | undefined,
): string | undefined => {
  return phone?.trim().replace(/\s/g, "") || undefined;
};

export const getId = (value: any): any => {
  return typeof value === "object" ? value?.id : value;
};

export const formatDateToSubmit = (birthday: any): string | undefined => {
  return birthday ? dayjs(birthday).format(DATE_FETCH_FORMAT) : undefined;
};

/**
 * Recursively compare two objects (or arrays) and return a "diff object"
 * containing only the fields from `updatedFields` that differ from `oldFields`.
 *
 * - For nested objects, we do a deep comparison.
 * - For arrays, we check if they differ in length or any element; if so, we take the entire updated array.
 * - If an object property is unchanged, we omit it from the result.
 */
export function getOnlyUpdatedFields<T extends Record<string, any>>(
  oldFields: T,
  updatedFields: T,
): Partial<T> {
  const result: Partial<T> = {};

  for (const key in updatedFields) {
    if (!Object.prototype.hasOwnProperty.call(updatedFields, key)) {
      continue; // skip inherited props
    }

    const oldVal = oldFields[key];
    const newVal = updatedFields[key];

    // 1) Both values are objects (and not arrays) -> Recurse deeply
    if (
      oldVal &&
      newVal &&
      typeof oldVal === "object" &&
      typeof newVal === "object" &&
      !Array.isArray(oldVal) &&
      !Array.isArray(newVal)
    ) {
      const nestedDiff = getOnlyUpdatedFields(oldVal, newVal);
      // If nestedDiff is non-empty, we store it
      if (Object.keys(nestedDiff).length > 0) {
        result[key] = nestedDiff;
      }
    }
    // 2) Both values are arrays -> store entire newVal if they differ
    else if (Array.isArray(oldVal) && Array.isArray(newVal)) {
      // naive approach: if any element differs or lengths differ, we store the new array
      if (
        oldVal.length !== newVal.length ||
        !oldVal.every((v, i) => Object.is(v, newVal[i]))
      ) {
        result[key] = newVal;
      }
    }
    // 3) Primitive or mismatched types -> compare directly
    else {
      if (!Object.is(oldVal, newVal)) {
        result[key] = newVal;
      }
    }
  }

  return result;
}
