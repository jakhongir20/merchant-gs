import { IconProps } from "@/shared/ui/Icon/index";
import Home from "@/shared/assets/icons/home.svg?react";
import Finance from "@/shared/assets/icons/finance.svg?react";
import Arrows from "@/shared/assets/icons/arrows.svg?react";
import Filter from "@/shared/assets/icons/filter.svg?react";
import Datepicker from "@/shared/assets/icons/datepicker.svg?react";
import Sun from "@/shared/assets/icons/sun.svg?react";
import Info from "@/shared/assets/icons/info.svg?react";
import Notification from "@/shared/assets/icons/notification.svg?react";
import DownloadFile from "@/shared/assets/icons/download-file.svg?react";
import ArrowUpSquare from "@/shared/assets/icons/arrow-up-s.svg?react";
import Search from "@/shared/assets/icons/search.svg?react";
import ArrowIndicator from "@/shared/assets/icons/arrow-indicator.svg?react";
import ArrowLine from "@/shared/assets/icons/arrow-line.svg?react";
import Cross from "@/shared/assets/icons/cross.svg?react";
import CrossRounded from "@/shared/assets/icons/cross-rounded.svg?react";
import Reverse from "@/shared/assets/icons/reverse.svg?react";
import Check from "@/shared/assets/icons/check.svg?react";
import Refresh from "@/shared/assets/icons/refresh.svg?react";
import Copy from "@/shared/assets/icons/copy.svg?react";
import Copied from "@/shared/assets/icons/copied.svg?react";

export const ICON_ELEMENTS = (
  height: IconProps["height"],
  width: IconProps["width"],
) => ({
  home: <Home style={{ height, width }} />,
  finance: <Finance style={{ height, width }} />,
  arrows: <Arrows style={{ height, width }} />,
  filter: <Filter style={{ height, width }} />,
  datepicker: <Datepicker style={{ height, width }} />,
  sun: <Sun style={{ height, width }} />,
  info: <Info style={{ height, width }} />,
  notification: <Notification style={{ height, width }} />,
  "download-file": <DownloadFile style={{ height, width }} />,
  "arrow-up-s": <ArrowUpSquare style={{ height, width }} />,
  "arrow-indicator": <ArrowIndicator style={{ height, width }} />,
  "arrow-line": <ArrowLine style={{ height, width }} />,
  search: <Search style={{ height, width }} />,
  cross: <Cross style={{ height, width }} />,
  "cross-rounded": <CrossRounded style={{ height, width }} />,
  reverse: <Reverse style={{ height, width }} />,
  check: <Check style={{ height, width }} />,
  refresh: <Refresh style={{ height, width }} />,
  copy: <Copy style={{ height, width }} />,
  copied: <Copied style={{ height, width }} />,
});
