import { FC } from "react";
import { cn } from "@/shared/helpers";
import { Button, Icon } from "@/shared/ui";

interface Props {
  className?: string;
}

export const DrawerHeaderActions: FC<Props> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Button
        color="primary"
        icon={<Icon name="copy" width={18} color="text-blue-100" />}
      >
        <span>ID</span>
      </Button>
      <Button
        color="primary"
        icon={<Icon name="print" width={18} color="text-blue-100" />}
      />
      <Button
        color="primary"
        icon={<Icon name="file" width={18} color="text-blue-100" />}
      />
    </div>
  );
};
