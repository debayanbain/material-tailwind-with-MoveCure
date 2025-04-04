"use client";

import Image from 'next/image';
import React from 'react'

const AboutUs = () => {
    return (
        <div className="bg-white min-h-screen">
            <section className="container mx-auto px-4 py-8 max-w-3xl">
                <h2 className="mt-14 text-4xl font-bold text-center text-gray-900">
                    About Us
                </h2>

                <Image
                    src={'/images/about.jpg'}
                    alt="About Us"
                    width={1000}
                    height={1000}
                    className="w-[60%] mx-auto mt-8 rounded-lg shadow-xl hover:-translate-y-2 duration-300"
                />

                <div className="mt-8 space-y-4 text-gray-700 leading-relaxed">
                    <div className='text-2xl font-bold'>Company&apos;s Journey</div>
                    <p>
                        At MoveCure, our journey began with a simple yet powerful vision: to empower individuals to reclaim their physical health and enhance their quality of life. Founded by a team of passionate healthcare professionals, we recognized the growing need for accessible and effective rehabilitation services. Over the years, we have evolved from a small clinic into a trusted partner for countless individuals seeking relief from physical ailments. Our commitment to innovation and excellence has driven us to continuously improve our services and expand our reach, ensuring that everyone has the opportunity to move freely and live pain-free.
                    </p>

                    <div className='text-2xl font-bold'>
                        Purpose and Goals
                    </div>

                    <p>
                        Our purpose at MoveCure is clear: to provide comprehensive solutions for physical problems that hinder your daily life.
                        We aim to bridge the gap between discomfort and recovery, offering personalized care tailored to each individual&apos;s needs.
                    </p>
                    <p>Our goals are to:</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-600">
                        <li>Deliver high-quality rehabilitation services that promote healing and wellness.</li>
                        <li>Foster a supportive environment where patients feel valued and understood.</li>
                        <li>Educate our community about the importance of physical health and proactive care.</li>
                    </ul>

                    <div className='text-2xl font-bold'>
                        Achievements
                    </div>

                    <p>
                        Over the years, MoveCure has achieved numerous milestones that reflect our dedication to quality care and patient satisfaction.
                    </p>

                    <div className='text-2xl font-bold'>
                        Call to Action
                    </div>
                    <p>
                        Are you ready to take the first step towards a pain-free life? At MoveCure, we are here to help you every step of the way. Schedule your appointment today and discover how our expert team can assist you in overcoming your physical challenges. Your journey to recovery starts now!
                    </p>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;
