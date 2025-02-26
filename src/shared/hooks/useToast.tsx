import { useGlobalToast } from "@/app/providers/MessageProvider";
import { Icon } from "@/shared/ui";
import { cn } from "@/shared/helpers";

export const useToast = () => {
  const messageApi = useGlobalToast();

  const toast = (title: string, type: "success" | "error" | "warning") => {
    const key = Date.now();
    messageApi.open({
      key,
      type,
      // duration: 300000,
      icon: null,
      className: cn(
        "[&_.ant-message-notice-content]:!p-0 [&_.ant-message-notice-content]:!min-h-12 [&_.ant-message-notice-content]:!py-2 [&_.ant-message-notice-content]:!px-4 [&_.ant-message-custom-content]:flex" +
          "[&_.ant-message-custom-content]:h-full [&_.ant-message-custom-content]:items-center [&_.ant-message-custom-content]:!h-full [&_.anticon]:!hidden",
        type === "success" &&
          "[&_.ant-message-notice-content]:!bg-green [&_.ant-message-notice-content]:shadow-lg [&_.ant-message-notice-content]:!text-white",
        type === "error" &&
          "[&_.ant-message-notice-content]:!bg-red [&_.ant-message-notice-content]:shadow-lg [&_.ant-message-notice-content]:!text-white",
        type === "warning" &&
          "[&_.ant-message-notice-content]:!bg-orange [&_.ant-message-notice-content]:shadow-lg [&_.ant-message-notice-content]:!text-black",
      ),
      content: (
        <div className="flex h-full w-[360px] items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Icon icon={`toast-${type}`} />
            <p className="max-w-[280px] text-sm font-medium">{title}</p>
          </div>
          <div onClick={() => messageApi.destroy(key)}>
            <Icon
              icon="close"
              color={type === "warning" ? "!text-black" : "!text-white"}
              className="cursor-pointer text-lg transition-opacity hover:opacity-70"
            />
          </div>
        </div>
      ),
    });
  };
  return { toast };
};
