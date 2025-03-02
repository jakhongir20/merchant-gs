import { ReactNode } from "react";
import MessageProvider from "./MessageProvider";

import ru_RU from "antd/lib/locale/ru_RU";
import uz_UZ from "antd/lib/locale/uz_UZ";
import en_US from "antd/lib/locale/en_US";

import { antdThemeConfig } from "@/app/style/antdThemeConfig";
import { ConfigProvider } from "antd";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryAppClient } from "@/shared/lib/react-query";
import { GlobalToastConfig } from "@/app/providers/GlobalToastConfig";
import i18n from "@/app/i18n";
import { Locale } from "antd/es/locale";

interface Props {
  children: ReactNode;
}

// NOTE: ALL providers must be implemented in this appEntry instance
export function Providers({ children }: Props) {
  const currentLocale = i18n.language;
  const locales: Record<string, Locale> = {
    ru: ru_RU,
    en: en_US,
    uz: uz_UZ,
  };

  return (
    <QueryClientProvider client={queryAppClient}>
      <ConfigProvider
        locale={locales[currentLocale]}
        theme={antdThemeConfig}
        form={{
          validateMessages: {
            required: "",
          },
          requiredMark: false,
        }}
      >
        <MessageProvider>
          <GlobalToastConfig>{children}</GlobalToastConfig>
        </MessageProvider>
      </ConfigProvider>
    </QueryClientProvider>
  );
}
