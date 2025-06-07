import React, {
  ChangeEvent,
  FC,
  FocusEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Input } from "@/shared/ui";
import { InputProps, type InputRef } from "antd";

interface NumberInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
  > {
  value?: string | number;
  prefix?: string;
  suffix?: string;
  defaultSuffix?: boolean;
  suffixElement?: InputProps["suffix"];
  floatValue?: boolean;
  onChange?: (value: number | undefined) => void;
}

// Format number with spaces as thousand separators, keep decimals if present
function formatWithSpaces(value: string) {
  if (!value) return "0";
  const [intPart, decPart] = value.split(".");
  const intFormatted = intPart?.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return decPart !== undefined ? `${intFormatted}.${decPart}` : intFormatted;
}

const sanitizeInput = (input: string, floatValue: boolean) => {
  const value = input.replace(/\s/g, "");
  let result = "";
  let hasDot = false;
  for (let i = 0; i < value.length; i++) {
    const char = value[i];
    if (char && char >= "0" && char <= "9") {
      result += char;
    } else if (floatValue && char === "." && !hasDot) {
      result += char;
      hasDot = true;
    }
  }
  // Allow "0." and "0.x" for decimals, but prevent "00", "01", etc.
  if (result.startsWith("0") && result.length > 1) {
    if (result[1] === ".") {
      // allow "0." and "0.xxx"
      // do nothing
    } else {
      // Remove all leading zeros except for "0." case
      result = result.replace(/^0+/, "");
      if (result === "" || result[0] === ".") result = "0" + result;
    }
  }
  // If input is just ".", treat as "0."
  if (result === "." && floatValue) result = "0.";
  // If input is empty, treat as "0"
  if (result === "") result = "0";
  // Limit decimals to 6 digits
  if (floatValue && result.includes(".")) {
    const [intPart, decPart] = result.split(".");
    if (decPart) {
      result = intPart + "." + decPart.slice(0, 3);
    }
  }
  return result;
};

export const InputNumber: FC<NumberInputProps> = ({
  value,
  prefix,
  suffix,
  defaultSuffix,
  suffixElement,
  floatValue = true,
  onChange,
  disabled,
  readOnly,
  placeholder,
  id,
  min = 0,
  max = 999_999_999,
  onFocus,
  className,
  ...rest
}) => {
  const inputRef = useRef<InputRef>(null); // <-- use InputRef, not HTMLInputElement

  const hasFocused = useRef(false);
  const [displayValue, setDisplayValue] = useState(
    formatWithSpaces(String(value ?? "0")),
  );
  const caretPos = useRef<number | null>(null);

  useEffect(() => {
    setDisplayValue(formatWithSpaces(String(value ?? "0")));
  }, [value]);

  useEffect(() => {
    if (caretPos.current !== null && inputRef.current) {
      inputRef.current.setSelectionRange(caretPos.current, caretPos.current);
      caretPos.current = null;
    }
  }, [displayValue]);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let inputVal = e.target.value;

    // Remove prefix/suffix for parsing
    if (prefix && inputVal.startsWith(prefix + " ")) {
      inputVal = inputVal.slice((prefix + " ").length);
    }
    if (suffix && inputVal.endsWith(" " + suffix)) {
      inputVal = inputVal.slice(0, -(" " + suffix).length);
    }

    const sanitized = sanitizeInput(inputVal, floatValue);

    if (sanitized === "") {
      setDisplayValue("0");
      caretPos.current =
        (prefix ? prefix.length + 1 : 0) + 1 + (suffix ? 1 + suffix.length : 0);
      return;
    }

    let numeric: number | undefined = undefined;
    if (sanitized === "0.") {
      numeric = 0; // still treat "0." as zero until they finish typing decimals
    } else if (!isNaN(Number(sanitized))) {
      numeric = Number(sanitized);
    }

    if (numeric !== 0) {
      onChange?.(numeric);
    } else {
      onChange?.(undefined);
    }
    const formatted = formatWithSpaces(sanitized);
    setDisplayValue(formatted);

    caretPos.current =
      (prefix ? prefix.length + 1 : 0) +
      (formatted ?? []).length +
      (suffix ? 1 + suffix.length : 0);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    if (!hasFocused.current) {
      hasFocused.current = true;
      if (!value || Number(value) === 0) {
        onChange?.(undefined);
      }
    }
    onFocus?.(e);
  };

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        position: "relative",
        width: "100%",
      }}
    >
      <Input
        ref={inputRef}
        value={
          prefix || suffix
            ? `${prefix ? prefix + " " : ""}${displayValue}${suffix ? " " + suffix : ""}`
            : displayValue
        }
        placeholder={placeholder}
        id={id}
        disabled={disabled}
        readOnly={readOnly}
        onChange={handleInput}
        onFocus={handleFocus}
        inputMode="decimal"
        min={min}
        max={max}
        suffix={suffixElement}
        defaultSuffix={defaultSuffix}
        style={{
          paddingLeft: prefix ? `${prefix.length + 1}ch` : undefined,
          paddingRight: suffix ? `${suffix.length + 1}ch` : undefined,
        }}
        {...rest}
      />
    </span>
  );
};
