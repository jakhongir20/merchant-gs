import { FC, useState } from "react";
import { Button, Drawer as AntDrawer, DrawerProps, Space } from "antd";
import { cn } from "@/shared/helpers";

interface Props {
  className?: string;
}

export const Drawer: FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<DrawerProps["size"]>();

  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className={cn(className)}>
      <Space>
        <Button type="primary" onClick={showDefaultDrawer}>
          Open Default Size (378px)
        </Button>
        <Button type="primary" onClick={showLargeDrawer}>
          Open Large Size (736px)
        </Button>
      </Space>
      <AntDrawer
        title={`${size} Drawer`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </AntDrawer>
    </div>
  );
};
