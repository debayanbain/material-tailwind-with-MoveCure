"use client";

import React, { useState } from "react";
import { Stepper, Step, Button } from "@/lib/MtConfig";
import PersonalInfo from "../Forms/StepperFrom/personalInfo";
import { type Variants } from "framer-motion";
import { type stepsProps } from "@/Types/componentsTypes";
import Animation from "../Animation/animation";
import { cn } from "@/lib/utils";
import { HiCheck } from 'react-icons/hi';

export function DefaultStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

//   const previousStep = useRef<number>(activeStep);
  const direction = activeStep > prevStep ? 1 : -1;

  const slideLeftandRight: Variants = {
    initial: (custom: number) => ({ opacity: 0, x: -custom * 100 }),
    animate: { opacity: 1, x: 0 },
    exit: (custom: number) => ({ opacity: 0, x: custom }),
  };

  const textVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const steps: stepsProps = [
    {
      label: "1",
      components: <PersonalInfo />,
      description: "Personal Information",
    },
    {
      label: "2",
      components: <PersonalInfo />,
      description: "Medical Information",
    },
    {
      label: "3",
      components: <PersonalInfo />,
      description: "Plan & Payment",
    },
  ];

  const handleNext = () => {
    setPrevStep(activeStep);
    setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handlePrev = () => {
    setPrevStep(activeStep);
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full py-4">
      <Animation
        componentsKey={activeStep}
        variants={textVariants}
      >
        <p className="text-2xl font-bold">{steps[activeStep].description}</p>
      </Animation>

      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
        activeLineClassName="dark:bg-yellow-500"
        className="z-[-1]"
      >
        {steps &&
          steps.map((steps, index) => (
            <Step
              key={index}
              onChange={() => setActiveStep(index)}
              className={cn("text-white bg-dark-300 border-2 transition duration-500 ease-in-out",
                activeStep === index && "border-primary ring-4 ring-deep-purple-500 ring-opacity-20 dark:ring-yellow-500 dark:ring-opacity-20"
              )}
            >
              {activeStep === index ? <HiCheck size={20} /> : steps.label}
            </Step>
          ))}
      </Stepper>

      <Animation componentsKey={activeStep} variants={slideLeftandRight} custom={direction}>
        {steps[activeStep].components}
      </Animation>

      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>
    </div>
  );
}
