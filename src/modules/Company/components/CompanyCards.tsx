import { FC } from "react";
import { cn } from "@/shared/helpers";
import { CStatus, Icon } from "@/shared/ui";
import { Avatar, Tooltip } from "antd";
import { IconType } from "@/shared/types";

interface Props {
  className?: string;
}

const paymentMethods = [
  { type: "uzcard", isActive: true },
  { type: "humo", isActive: true },
  { type: "visa" },
  { type: "mastercard" },
  { type: "mir" },
  { type: "union" },
];

const platforms: { type: IconType; isActive?: boolean }[] = [
  { type: "globe", isActive: true },
  { type: "telegram" },
];

export const CompanyCards: FC<Props> = ({ className }) => {
  return (
    <section className={cn("grid grid-cols-3 gap-30px", className)}>
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-5 rounded-xl border border-gray-300 bg-white p-30px shadow-[0px_3px_4px_0px_rgba(0,0,0,0.03)]"
        >
          <div className="flex flex-shrink-0 justify-between">
            <div
              className={
                "flex h-[60px] w-[60px] items-center justify-center rounded-lg bg-gray-300"
              }
            >
              <img
                className={"h-[32px] w-[32px] rounded-md"}
                src="/test-brand.svg"
                alt="Korzinka"
              />
            </div>
            <CStatus value={index / 2 === 0 ? 5 : 6} />
          </div>
          <div>
            <div className={"mb-2.5"}>
              <h3 className="text-lg font-semibold text-gray-500">
                OOO “Anglesey food”
              </h3>
              <p className="text-sm font-semibold text-gray-100">Korzinka</p>
            </div>
            <span className={"text-sm font-semibold text-gray"}>
              301 000 234
            </span>
          </div>
          <div>
            <div className={"mb-4"}>
              <p className={"mb-2 text-sm font-semibold text-gray-100"}>
                Платежные системы
              </p>
              <div className={"flex gap-1"}>
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex h-30px w-30px items-center justify-center rounded-md",
                      method?.isActive ? "bg-green-200" : "bg-gray-300",
                    )}
                  >
                    <img
                      className={"w-5"}
                      src={`/svg/payment/company-payment/${method.type}.svg`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={"grid grid-cols-2"}>
              <div>
                <p className={"mb-2 text-sm font-semibold text-gray-100"}>
                  Платформы
                </p>
                <div className={"flex gap-1"}>
                  {platforms.map((platform, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex h-30px w-30px items-center justify-center rounded-md",
                        platform?.isActive ? "bg-green-200" : "bg-gray-300",
                      )}
                    >
                      <Icon
                        name={platform.type}
                        color={cn(
                          platform?.isActive ? "text-blue-100" : "text-gray",
                        )}
                        width={20}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className={"mb-2 text-sm font-semibold text-gray-100"}>
                  Кассы
                </p>
                <Avatar.Group>
                  <Tooltip title="User 1" placement="top">
                    <Avatar
                      className={"bg-gray-300 p-2 font-semibold"}
                      src="/test-brand.svg"
                    />
                  </Tooltip>
                  <Tooltip title="User 2" placement="top">
                    <Avatar
                      className={"bg-red-400 p-2 font-semibold text-red-100"}
                    >
                      D
                    </Avatar>
                  </Tooltip>
                  <Tooltip title="User 3" placement="top">
                    <Avatar
                      className={"p-2 font-semibold"}
                      style={{ backgroundColor: "#F8F5FF", color: "#7239EA" }}
                    >
                      B
                    </Avatar>
                  </Tooltip>
                  <Avatar
                    className={"bg-blue-200 p-2 font-semibold text-gray-100"}
                  >
                    +2
                  </Avatar>
                </Avatar.Group>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
