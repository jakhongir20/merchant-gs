import { FC, ReactNode } from "react";
import { Drawer as AntDrawer, DrawerProps } from "antd";
import { cn } from "@/shared/helpers";
import { CCrossIcon } from "@/shared/ui";

interface Props extends DrawerProps {
  className?: string;
  open: DrawerProps["open"];
  size?: DrawerProps["size"];
  header: ReactNode;
  placement?: DrawerProps["placement"];
  onClose?: () => void;
}

export const Drawer: FC<Props> = ({
  className,
  open,
  placement = "right",
  size = "default",
  header,
  onClose,
  ...rest
}) => {
  return (
    <div className={cn(className)}>
      <AntDrawer
        title={
          <div className="flex items-center justify-between gap-4">
            {header}
            <CCrossIcon onClick={() => onClose?.()} />
          </div>
        }
        placement={placement}
        size={size}
        width={size === "default" ? 454 : 600}
        onClose={onClose}
        open={open}
        destroyOnClose
        closeIcon={null}
        maskClosable={false}
        className={cn("!bg-[#F3F6F9]", className)}
        styles={{
          header: {
            padding: 20,
            border: "none",
            // borderColor: "#D8D8E5",
          },
          body: {
            padding: 0,
          },
        }}
        {...rest}
      ></AntDrawer>
    </div>
  );
};
