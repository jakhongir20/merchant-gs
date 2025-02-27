import { ThemeConfig } from "antd";

export const antdThemeConfig: ThemeConfig = {
  token: {
    colorPrimary: "#3E97FF",
    // colorPrimaryHover: "rgba(233, 83, 47, 0.08)",
    fontFamily: "'Inter', sans-serif",
    controlInteractiveSize: 20,
    controlHeightLG: 40, // This may affect other controls too
    controlHeightSM: 24,
  },
  components: {
    Input: {
      colorText: "#111214",
      borderRadius: 8,
      fontSize: 14,
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
      fontSize: 14,
      colorText: "#111214",
    },
    Button: {
      borderRadius: 8,
      fontWeight: 500,
      fontSize: 14,
      controlHeight: 40,
      boxShadow: "none",
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
      // padding: "7px 10px",
    },
  },
};
