import React from "react";
import NavBar from "@/components/NavBar";
// import LoginPatient from "@/components/Forms/LoginPatient";
import RegistrationPatient from "@/components/Forms/RegistrationPatient";
import TextEffect from "@/components/Text-effect";
import DynamicImage from "@/components/ui/dynamicImageLoading";
import { Typography } from "@/lib/MtConfig";
// import ScrollingButtom from "@/components/ScrollingButtom";

export default function Home() {
  return (

    <div className="relative h-screen">
      <div className="h-full overflow-y-auto md:mr-[40%] remove-scrollbar">
        <NavBar />

        <section className="remove-scrollbar mx-auto px-[7%] xl:px-[20%] mb-auto w-full">
          <div className="flex-col w-full mt-24 gap-2 hidden sm:flex">
            <Typography
              variant="h1"
              className="text-3xl xl:text-4xl dark:text-yellow-700 font-[Nunito] font-[700] text-deep-purple-400"
              textGradient
            >
              Book Appointment
            </Typography>
            {/* Additional header content can go here */}
          </div>


          <div className="w-full relative z-[-1] mt-20 sm:hidden">
            <DynamicImage
              url="/images/Main photo.png"
              containerClass="inset-0 w-full h-full object-cover"
              alt="Hero-Image"
            />

            <div className="absolute inset-0 flex flex-col justify-end overflow-hidden p-2">
              <TextEffect
                isVisible={true}
                text="Book an Appointment"
                effecContainerClass="flex justify-center items-center h-full"
                effectClass="inline-block font-[Oswald] text-3xl italic font-[600] text-purple-100"
              />
            </div>
          </div>

          {/* Registration form and any other left-side content */}
          {/* <LoginPatient /> */}

          <RegistrationPatient />
          
          {/* <ScrollingButtom /> */}

          <div className="dark:text-gray-400/50 mt-12 flex justify-between p-6 text-black/30">
            <p>@2025 MoveCure</p>
          </div>
        </section>
      </div>

      <section className="hidden md:block fixed top-0 right-0 w-[40%] h-screen z-[-1]">
        <DynamicImage
          url="/images/onbording-image.jpg"
          containerClass="absolute inset-0 w-full h-full object-cover"
          alt="Hero"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <TextEffect
            isVisible={true}
            text="Empowering You to Move with Confidence"
          />
        </div>
      </section>
    </div>
  );
}
