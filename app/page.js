import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStethoscope,
  faRibbon,
  faWeight,
} from '@fortawesome/free-solid-svg-icons';
import TestimonialCarousel from './components/testimonialCarousal';

export default function Home() {
  return (
    <>
      <div className='bg-[#0F9A97] h-[600px]'>
        <div className="relative bg-[#DF4836] text-white text-lg leading-snug font-light center w-[700px] h-[270px] left-[30%] top-[30%] px-8 flex flex-col justify-center">
          {/* Top Left Corner Line */}
          <div className="absolute top-[-10px] left-[-10px] w-[150px] h-[2px] bg-white"></div>
          <div className="absolute top-[-10px] left-[-10px] w-[2px] h-[150px] bg-white"></div>

          {/* Bottom Right Corner Line */}
          <div className="absolute bottom-[-10px] right-[-10px] w-[150px] h-[2px] bg-white"></div>
          <div className="absolute bottom-[-10px] right-[-10px] w-[2px] h-[150px] bg-white"></div>

          {/* Main Text */}
          <p className="text-[42px] font-medium">
            More than 10 year of teaching<br />
            and surgical experience in<br />
            several government medical<br />
            institutions of repute
          </p>
        </div>
      </div>

      <div className="flex justify-center items-start gap-12 px-16 py-24 bg-[#f5f5f5] h-[600px]">
        {/* Left Side: Image & Name */}
        <div className="flex flex-col items-center">
          <img fetchPriority="high"  src="https://static.wixstatic.com/media/f26426_dec208f7e8a94394a1c30fde3d17a991~mv2.jpg/v1/crop/x_0,y_247,w_1657,h_2260/fill/w_379,h_524,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20(9)_edited_edited.jpg" alt="Untitled design (9)_edited_edited.jpg" width="300" ></img>
          <div className="bg-[#EAC784] w-full text-center py-2">
            <p className="text-[#006C7E] font-semibold text-lg">Dr. Sandeep Kumar Verma</p>
            <p className="text-[#DF4836] text-sm font-medium mt-1">
              Director <span className="text-[#006C7E]">(GI Surgery, <span className="italic">anorectoscience</span>)</span>
            </p>
          </div>
        </div>

        {/* Right Side: Text and Areas of Expertise */}
        <div className="max-w-[600px] text-[#333]">
          <p className="text-md leading-relaxed mb-4">
            Dr. Verma is a highly respected authority in the fields of gastrointestinal surgery, oncology, and bariatric surgery.
            Currently serving as the Director of GI Surgery at Medanta Hospital in Lucknow, he brings a wealth of expertise to his role.
          </p>
          <p className="text-md leading-relaxed mb-6">
            Dr. Verma is committed to providing the highest standard of care, leveraging his extensive experience and knowledge
            to improve patient outcomes in gastrointestinal health.
          </p>

          <h3 className="text-xl font-semibold mb-3">Areas of Expertise</h3>
          <ul className="list-disc pl-5 space-y-2 text-[#006C7E]">
            <li>
              <span className="text-[#333] font-semibold">More than 10 year of teaching and surgical experience</span> in several government medical institutions of repute.
            </li>
            <li>
              <span className="text-[#333] font-semibold">Experienced in</span> Robotics, laparoscopic and open management of GI cancers.
            </li>
            <li>
              <span className="text-[#333] font-semibold">Specialized in</span> advanced laparoscopic UGI, pancreatic, and anorectal surgeries.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-start gap-12 px-16 py-12 bg-[#EBE9EA]">
        {/* Left Side: Image */}
        <div className="w-[400px]">
          
        </div>

        {/* Right Side: Experience Text */}
        <div className="max-w-[600px] text-[#333]">
          <h3 className="text-xl font-semibold mb-4">Professional Experience & Academic Contribution</h3>
          <ul className="list-disc pl-5 space-y-3 text-[#006C7E]">
            <li>
              <span className="text-[#333] font-medium">Dr. Sandeep Kumar Verma is Director, GI Surgery, GI Oncology & Bariatric Surgery at Medanta Hospital, Lucknow.</span>
            </li>
            <li>
              <span className="text-[#333]">Former Ex- Senior Resident (Gen. Surgery) at CSM Medical University KGMU, Lucknow</span>
            </li>
            <li>
              <span className="text-[#333]">Senior Surg.Gastroenterology at SGPGIMS Lucknow</span>
            </li>
            <li>
              <span className="text-[#333]">Consultant Surgical Gastroenterologist at Vivekanand Polyclinic and Institute of Medical Sciences for a year</span>
            </li>
            <li>
              <span className="text-[#333]">Studied General Surgery at CSM Medical University KGMU, Lucknow</span>
            </li>
            <li>
              <span className="text-[#333]">MBBS student at MLB Medical College Jhansi in 2001.</span>
            </li>
            <li>
              <span className="text-[#333]">Medicine at MLB Medical College Jhansi.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Section 1: Specialization and Expertise */}
      <div className="bg-gradient-to-r from-[#e8e8e8] via-white to-white py-12 px-8 text-center">
        <h2 className="text-2xl font-semibold mb-10">Specialization and Expertise</h2>
        <div className="flex justify-center items-start gap-20 flex-wrap">
          {/* Card 1 */}
          <div className="max-w-[250px] flex flex-col items-center">
            <div className="text-[#DF4836] mb-4">
              <FontAwesomeIcon icon={faStethoscope} width={50} />
            </div>
            <h3 className="text-[#006C7E] font-semibold text-lg mb-2">Gastrointestinal Surgery</h3>
            <p className="text-sm text-[#444] leading-snug">
              Specializing in a wide range of surgical procedures for conditions affecting the digestive tract, including laparoscopic, Robotics and open techniques.
            </p>
          </div>

          {/* Card 2 */}
          <div className="max-w-[250px] flex flex-col items-center">
            <div className="text-[#DF4836] mb-4">
              <FontAwesomeIcon icon={faRibbon} width={50} />
            </div>
            <h3 className="text-[#006C7E] font-semibold text-lg mb-2">GI Oncology</h3>
            <p className="text-sm text-[#444] leading-snug">
              Expertise in the surgical management of gastrointestinal cancers, focusing on individualized treatment plans that enhance patient outcomes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="max-w-[250px] flex flex-col items-center">
            <div className="text-[#DF4836] mb-4">
              <FontAwesomeIcon icon={faWeight} width={50} />
            </div>
            <h3 className="text-[#006C7E] font-semibold text-lg mb-2">Bariatric Surgery</h3>
            <p className="text-sm text-[#444] leading-snug">
              Providing comprehensive solutions for obesity management, including minimally invasive weight loss surgeries and ongoing patient support.
            </p>
          </div>
        </div>
      </div>

      <TestimonialCarousel />

      <div className="bg-[#f5f5f5] py-12 px-6 text-center">
        {/* Heading */}
        <h2 className="text-xl md:text-2xl font-medium mb-10">
          What Patients Say <span className="text-[#009DB6]">About Dr. Sandeep Kumar Verma</span>
        </h2>

        {/* Video Thumbnails */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Video 1 */}
          <div className="w-[300px] aspect-video">
            <iframe
              className="w-full h-full rounded shadow"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Patient Testimonial 1"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 2 */}
          <div className="w-[300px] aspect-video">
            <iframe
              className="w-full h-full rounded shadow"
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="Patient Testimonial 2"
              allowFullScreen
            ></iframe>
          </div>

          {/* Video 3 */}
          <div className="w-[300px] aspect-video">
            <iframe
              className="w-full h-full rounded shadow"
              src="https://www.youtube.com/embed/ysz5S6PUM-U"
              title="Patient Testimonial 3"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="bg-[#006C7E] text-white py-10 px-6">
        <div className="max-w-[60vw] mx-auto flex flex-col md:flex-row justify-between items-start gap-8">

          {/* Contact Info - Left Section */}
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold">Contact Me</h2>
            <div className="w-14 h-[2px] bg-[#DF4836] my-2"></div>
            <p className="text-sm font-light leading-relaxed">
              I would love to hear from you! If you have any questions or would like to schedule a consultation,
              please feel free to reach out using the contact form below or through the provided contact details.
            </p>
          </div>

          {/* Address - Middle Section */}
          <div className="md:w-1/3 flex gap-3">
            {/* Icon */}
            <div className="mt-1">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
            </div>
            {/* Text */}
            <div className="text-sm font-light leading-relaxed">
              Medanta Hospital Lucknow<br />
              Sector - A, Pocket - 1, Amar Shaheed Path, Golf City, Lucknow, Uttar Pradesh 226030
            </div>
          </div>

          {/* Phone - Right Section */}
          <div className="md:w-1/3 flex gap-3">
            {/* Icon */}
            <div className="mt-1">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5.75A2.75 2.75 0 015.75 3h.24a2.75 2.75 0 012.73 2.52c.04.36.16.72.37 1.03l1.1 1.7a2.75 2.75 0 01-.27 3.3l-.91.91a11.05 11.05 0 005.34 5.34l.91-.91a2.75 2.75 0 013.3-.27l1.7 1.1c.31.2.67.33 1.03.37A2.75 2.75 0 0121 18.01v.24A2.75 2.75 0 0118.25 21h-.5C9.27 21 3 14.73 3 6.25v-.5z" />
              </svg>
            </div>
            {/* Text */}
            <div className="text-sm font-light leading-relaxed">
              Phone: +91-7007417006<br />
              Office: +91-7001108995
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
