"use client";

import React, { useEffect, useState } from "react";
import { Stepper, Step, Button } from "@/lib/MtConfig";
import PersonalInfo from "../Forms/StepperFrom/personalInfo";
import { type Variants, motion, useAnimationControls } from "framer-motion";
import { type stepsProps } from "@/Types/componentsTypes";
import Animation from "../Animation/animation";
import { cn } from "@/lib/utils";
import { HiCheck } from "react-icons/hi";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormValue, zodSchema } from "@/lib/zodValidation";
import { zodResolver } from "@hookform/resolvers/zod";

export function DefaultStepper() {
  const methods = useForm<FormValue>({
    resolver: zodResolver(zodSchema),
    mode: "onBlur",
  });

  const [activeStep, setActiveStep] = useState(0);
  const [prevStep, setPrevStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const direction = activeStep > prevStep ? 1 : -1;

  const prevButtonAnimationControl = useAnimationControls();

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

  const prevVarients: Variants = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
  };

  const steps: stepsProps = [
    {
      label: "1",
      components: <PersonalInfo />,
      description: "Personal Information",
      fields: ["name", "email", "password"],
    },
    {
      label: "2",
      components: <PersonalInfo />,
      description: "Medical Information",
      fields: ["bloodType", "allergies"],
    },
    {
      label: "3",
      components: <PersonalInfo />,
      description: "Plan & Payment",
      fields: ["bloodType", "allergies"],
    },
  ];

  const handleNext = async () => {
    const currentStepFields = steps[activeStep].fields;
    const valid = await methods.trigger(currentStepFields);
    if (valid) {
      setPrevStep(activeStep);
      setActiveStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handlePrev = () => {
    setPrevStep(activeStep);
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  useEffect(() => {
    if (activeStep === 1) {
      prevButtonAnimationControl.start("animate");
    }
  }, [activeStep, prevButtonAnimationControl]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="w-full py-4">
          <Animation componentsKey={activeStep} variants={textVariants}>
            <p className="text-2xl font-bold">
              {steps[activeStep].description}
            </p>
          </Animation>

          <Stepper
            activeStep={activeStep}
            isLastStep={(value) => setIsLastStep(value)}
            isFirstStep={(value) => setIsFirstStep(value)}
            activeLineClassName="dark:bg-yellow-500"
            className="z-[-1] py-5"
          >
            {steps &&
              steps.map((steps, index) => (
                <Step
                  key={index}
                  onChange={() => setActiveStep(index)}
                  className={cn(
                    "text-white bg-dark-300 border-2 transition duration-500 ease-in-out",
                    activeStep === index &&
                    "border-primary ring-4 ring-deep-purple-500 ring-opacity-20 dark:ring-yellow-500 dark:ring-opacity-20"
                  )}
                >
                  {activeStep === index ? <HiCheck size={20} /> : steps.label}
                </Step>
              ))}
          </Stepper>

          <Animation
            componentsKey={activeStep}
            variants={slideLeftandRight}
            custom={direction}
          >
            {steps[activeStep].components}
          </Animation>

          <div className="mt-16 flex justify-between gap-1">
            {activeStep > 0 && (
              <motion.div
                variants={prevVarients}
                initial="initial"
                animate={prevButtonAnimationControl}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 0.3,
                }}
                layout
              >
                <Button
                  onClick={handlePrev}
                  variant="gradient"
                  color="deep-orange"
                  fullWidth
                  disabled={isFirstStep}
                >
                  Previous
                </Button>
              </motion.div>
            )}

            <motion.div
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 0.3,
              }}
              className="w-full"
              layout
            >
              <Button
                onClick={handleNext}
                disabled={isLastStep}
                color="deep-purple"
                variant="gradient"
                fullWidth
              >
                Next
              </Button>
            </motion.div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
