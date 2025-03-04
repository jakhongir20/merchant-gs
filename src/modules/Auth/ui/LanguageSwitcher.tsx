import React, { FC, useState } from "react";
import { MenuProps } from "antd";
import { Dropdown } from "@/shared/ui";
import i18n from "@/app/i18n";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
}

const LOCALE_ITEMS = [
  {
    value: "uz",
    src: "/svg/lang-uz.svg",
  },
  {
    value: "ru",
    src: "/svg/lang-ru.svg",
  },
  {
    value: "en",
    src: "/svg/lang-en.svg",
  },
];

export const LanguageSwitcher: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  const [locale, setLocale] = useState(localStorage.getItem("LOCALE") || "ru");

  const handleChangeLocale = (value: "uz" | "ru" | "en") => {
    setLocale(value);
    localStorage.setItem("LOCALE", value);
    i18n.changeLanguage(value);
  };

  const localeItems: MenuProps["items"] = LOCALE_ITEMS.map((item) => ({
    key: item.value,
    label: (
      <div
        className={cn(
          "flex h-6 items-center gap-2",
          locale === item.value ? "[&_*]:text-violet" : "text-black-100",
          className,
        )}
        onClick={() => handleChangeLocale(item.value as "uz" | "ru" | "en")}
      >
        <p className="h-5 w-5 overflow-hidden rounded-full">
          <img
            className="h-full w-full"
            src={item.src}
            alt={`lang-${item.value}`}
          />
        </p>
        <span>{t(`Common.Locale.${item.value}`)}</span>
      </div>
    ),
  }));

  return (
    <Dropdown
      rootClassName={`[&_.ant-dropdown-menu]:!mt-2`}
      menu={{
        items: localeItems,
        selectable: true,
        selectedKeys: [locale],
      }}
      placement="bottom"
    >
      <div className="flex cursor-pointer items-center">
        <p className="h-5 w-5 overflow-hidden rounded-full">
          <img
            className="h-full w-full"
            src={`/svg/lang-${locale}.svg`}
            alt={`lang-${locale}`}
            loading="lazy"
          />
        </p>
        <span className="ml-1.5 text-xs font-semibold">
          {t(`Common.Locale.${locale}`)}
        </span>
      </div>
    </Dropdown>
  );
};
