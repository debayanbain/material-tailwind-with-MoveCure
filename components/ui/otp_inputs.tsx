"use client";

import { cn } from "@/lib/utils";
import { OTPInput, SlotProps } from "input-otp";
import React, { useEffect, useRef } from "react";

function FakeCaret() {
  return (
    <div className="absolute pointer-events-none inset-0 flex text-red-500 items-center justify-center animate-caret-blink">
      <div className="w-0.5 h-8 bg-gray-500" />
    </div>
  );
}

function Slot(props: SlotProps & { isError: boolean }) {
  return (
    <div
      className={cn(
        "relative w-10 h-14 text-[2rem]",
        "flex items-center justify-center",
        "transition-all duration-300",
        "border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md",
        "group-hover:border-purple-500/20 group-focus-within:border-purple-500/20",
        "outline outline-0 outline-purple-500/20",
         props.isError
          ? "border-red-500 bg-red-50 text-red-600" // 🔴 applies to ALL slots
          : "border-border group-hover:border-purple-500/20 group-focus-within:border-purple-500/20",
        props.isActive && !props.isError ? "outline-4 outline-purple-500" : ""
      )}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

function FakeDash() {
  return (
    <div className="flex w-10 justify-center items-center">
      <div className="w-3 h-1 rounded-full bg-dark-500" />
    </div>
  );
}

interface OtpInputsProps {
  onChange: (value: string) => void;
  maxLength?: number;
  isErrors: boolean;
}

const OtpInputs: React.FC<OtpInputsProps> = ({ onChange, maxLength = 6, isErrors }) => {
  const prevRef = useRef<string>("");
  function SlotRenderer({
    slotes,
    maxLength = 6,
  }: {
    slotes: SlotProps[];
    maxLength?: number;
  }) {
    useEffect(() => {
      const value = slotes.map((slot) => slot.char).join("");
      
      if (prevRef.current.length === maxLength && value.length >= maxLength) {
        return;
      }
      prevRef.current = value;
      onChange(value);
    }, [slotes, maxLength]);

    return (
      <>
        <div className="flex">
          {slotes.slice(0, 3).map((slot, idx) => (
            <Slot key={idx} {...slot} isError={isErrors} />
          ))}
        </div>

        <FakeDash />

        <div className="flex">
          {slotes.slice(3).map((slot, idx) => (
            <Slot key={idx} {...slot} isError={isErrors} />
          ))}
        </div>
      </>
    );
  }

  return (
    <div className="flex items-center justify-center">
      <OTPInput
        maxLength={maxLength}
        containerClassName={cn("group flex items-center has-[:disabled]:opacity-30", isErrors && "animate-shake")}
        render={({ slots }) => (
          <SlotRenderer slotes={slots} maxLength={maxLength} />
        )}
        autoCorrect="off"
        autoComplete="off"
        spellCheck="false"
      />
    </div>
  );
};

export default OtpInputs;
