"use client";

import React, { useEffect, useState } from "react";
import { Stepper, Step } from "@/lib/MtConfig";
import PersonalInfo from "../Forms/StepperFrom/personalInfo";
import { type Variants, motion, useAnimationControls } from "framer-motion";
import { type stepsProps } from "@/Types/componentsTypes";
import Animation from "../Animation/animation";
import { cn } from "@/lib/utils";
import { HiCheck } from "react-icons/hi";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormValue, zodSchema } from "@/lib/zodValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import MedicalInfo from "../Forms/StepperFrom/MedicalInfo";
import GroupAnimationButton from "./GroupAnimationButton";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export function DefaultStepper() {
  const methods = useForm<FormValue>({
    resolver: zodResolver(zodSchema),
    mode: "onBlur",
    defaultValues: {
      patientName: "",
      email: "",
      phone_number: "",
      blood_group: "",
      allergies: "",
      problems: "",
      plan: "",
      paymentMethod: "",
    },
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
      components: <PersonalInfo control={methods.control} />,
      description: "Personal Information",
      fields: ["patientName", "email", "phone_number", "date_of_birth", 'gender'],
    },
    {
      label: "2",
      components: <MedicalInfo control={methods.control} />,
      description: "Medical Information",
      fields: ["blood_group", "allergies", "problems"],
    },
    {
      label: "3",
      components: <PersonalInfo control={methods.control} />,
      description: "Plan & Payment",
      fields: ["blood_group", "allergies"],
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
            className="z-[-1] py-5 mb-4"
          >
            {steps &&
              steps.map((steps, index) => (
                <Step
                  key={index}
                  onChange={() => setActiveStep(index)}
                  className={cn(
                    "relative text-white bg-dark-300 border-2 transition duration-500 ease-in-out ring-4 ring-deep-purple-500 ring-opacity-20 dark:ring-yellow-500 dark:ring-opacity-20",
                    activeStep === index && "pulse"
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
            {/* Form Components Gose here */}
            {steps[activeStep].components}
          </Animation>

          <div className="mt-16 flex justify-between items-center gap-1 max-h-14">
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
                <GroupAnimationButton 
                  text={"Previous"}
                  handlePrevorNext={handlePrev}
                  Steps={isFirstStep}
                  icons={<FaArrowLeftLong  size={20} color="black" />}
                  buttonColor={"deep-orange"}
                />
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
               <GroupAnimationButton 
                  text={"Continue"}
                  handlePrevorNext={handleNext}
                  Steps={isLastStep}
                  icons={<FaArrowRightLong  size={20} color="black" />}
                  buttonColor={"deep-purple"}
                  buttonVariant={"gradient"}
                  buttonClass="text-center w-full rounded-2xl h-12 relative group overflow-hidden py-3 px-3"
                  childrenClass={"bg-white group-focus:w-[90px] rounded-2xl h-[2.5rem] w-[14%] flex items-center justify-center absolute right-1 top-[4px] md:group-hover:w-[135px] z-10 duration-500 delay-150 md:right-1 md:w-[10%]"}
                  textClass={"max-md:group-focus:translate-x-[-10px] !text-[12px] text-white md:text-14 md:block md:group-hover:translate-x-[-10px] duration-500 delay-200"}
                />
            </motion.div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
