import React from "react";
import { Button } from "@/lib/MtConfig";
import { cn } from "@/lib/utils";
import { type previousButtonProps } from "@/Types/componentsTypes";

const GroupAnimationButton = ({
  text,
  handlePrevorNext,
  Steps,
  buttonClass,
  buttonVariant,
  buttonColor,
  childrenClass,
  textClass,
  icons,
  animatedIcons,
  isPending,
}: previousButtonProps) => {

  const displayText = isPending && animatedIcons ? "Loading..." : text;
  const isAnimatedIcons = isPending && animatedIcons ? animatedIcons : icons;

  return (
    <Button
      type={Steps ? "submit" : "button"}
      className={cn(
        buttonClass || "text-center w-20 rounded-2xl h-12 relative group overflow-hidden md:w-36"
      )}
      onClick={handlePrevorNext}
      disabled={isPending}
      color={buttonColor || "black"}
      variant={buttonVariant || "filled"}
      fullWidth
    >
      <div
        className={cn(
          childrenClass || "bg-white rounded-2xl h-[2.5rem] w-[90%] flex items-center justify-center absolute left-1 top-[4px] md:group-hover:w-[135px] z-10 delay-75 duration-500 md:left-1 md:w-1/3"
        )}
      >
        {isAnimatedIcons}
      </div>
      <p className={cn(textClass || "hidden translate-x-4 !text-[12px] text-white md:text-14 md:block ")}>
        {displayText}
      </p>
    </Button>
  );
};

export default GroupAnimationButton;
