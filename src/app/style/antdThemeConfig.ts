import { ThemeConfig } from "antd";

export const antdThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#3E97FF",
    // colorPrimaryHover: "rgba(233, 83, 47, 0.08)",
    fontFamily: "'Inter', sans-serif",
    controlInteractiveSize: 20,
    controlHeightLG: 40,
    controlHeightSM: 24,
  },
  components: {
    Button: {
      borderRadius: 8,
      fontWeight: 500,
      fontSize: 13,
      controlHeight: 40,
      boxShadow: "none",
      paddingInline: "10px",
      colorPrimaryBg: "#DFEEFF",
      colorPrimaryBgHover: "#CCE5FF",
      colorPrimaryBorder: "#DFEEFF",
      colorPrimaryText: "#3E97FF",
      colorPrimaryTextHover: "#2884EF",
      colorPrimaryActive: "#2884EF",
      colorErrorBg: "#FFE4EC",
      colorErrorBgActive: "##D9214E",
      colorErrorText: "#D9214E",
      colorErrorTextHover: "#D9214E",
      colorErrorBorder: "#FFEDED",
      colorText: "#181C32",
    },
    Input: {
      colorText: "#3F4254",
      borderRadius: 8,
      fontSize: 12,
      controlHeight: 40,
      boxShadow: "none",
      colorPrimary: "#F1F1F2",
      colorPrimaryHover: "rgba(233, 83, 47, 0.08)",
    },
    Checkbox: {
      // colorText: "#111214",
      // borderRadius: 8,
      // boxShadow: "none",
    },
    DatePicker: {
      fontSize: 13,
      colorText: "#3E97FF",
      borderRadius: 8,
    },
    Select: {
      // controlItemBgHover: "red", // Background color for hovered options
      // controlItemBgActive: "red", // Background color for active options
      // controlBg: "red", // Background color for the select control
      colorTextPlaceholder: "#111214",
      selectorBg: "#EAECEF",
      fontSize: 14,
      activeOutlineColor: "transparent",
    },
    Table: {
      headerBg: "#F8F9FA",
      headerColor: "#A4AAB0",
      borderRadius: 0,
      fontSize: 12,
      paddingContentHorizontal: 12,
      paddingContentVertical: 8,
    },
    Tabs: {},
    Tooltip: {
      fontSize: 12,
    },
    Badge: {
      fontSize: 12,
      colorText: "#FFFFFF",
    },
  },
};
