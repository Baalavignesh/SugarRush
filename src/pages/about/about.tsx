import React from "react";
import { Fade } from "@mui/material";
import NavBar from "../../shared/navbar";
import { blueberry, butter, chocolate, vanilla } from "../../assets";
import { aboutUsContent } from "../../constants/aboutus";

const About: React.FC = () => {
  return (
    <div>
      <NavBar />

      <h2 className="m-16 text-center text-4xl ">SugarRush</h2>

      <Fade in={true} timeout={1000}>
        <section className="p-0">
          <div className="mb-16 flex flex-wrap bg-custom-white p-12">
            <div className="w-1/2 flex justify-center items-center">
              <div className="cursor-pointer overflow-hidden object-none rounded-lg bg-cover h-[350px] flex justify-center items-center">
                <img src={butter} className="w-full" />
              </div>
            </div>

            <div className="w-6/12 p-12 flex flex-col">
              <h3 className="mb-4 text-2xl font-bold">{aboutUsContent[0].title}</h3>
              <div className="flex items-center text-sm font-medium">
                {aboutUsContent[0].subheading}
              </div>
              <p className="mb-6 text-neutral-500"></p>
              <p className="text-neutral-500 text-xl">
                {aboutUsContent[0].description}
              </p>
            </div>
          </div>

          <div className="mb-16 flex flex-wrap bg-custom-white p-12">
            <div className="w-6/12 p-12 flex flex-col">
              <h3 className="mb-4 text-2xl font-bold">{aboutUsContent[1].title}</h3>
              <div className="flex items-center text-sm font-medium">
              {aboutUsContent[1].subheading}
              </div>
              <p className="mb-6 text-neutral-500"></p>
              <p className="text-neutral-500 text-xl">
              {aboutUsContent[1].description}
              </p>
            </div>

            <div className="w-1/2 flex justify-center items-center">
              <div className="cursor-pointer overflow-hidden object-none rounded-lg bg-cover h-[350px] flex justify-center items-center">
                <img src={blueberry} className="w-full" />
              </div>
            </div>
          </div>

          <div className="mb-16 flex flex-wrap bg-custom-white p-12">
          <div className="w-1/2 flex justify-center items-center">
              <div className="cursor-pointer overflow-hidden object-none rounded-lg bg-cover h-[350px] flex justify-center items-center">
                <img src={chocolate} className="w-full" />
              </div>
            </div>
            <div className="w-6/12 p-12 flex flex-col">
              <h3 className="mb-4 text-2xl font-bold">{aboutUsContent[2].title}</h3>
              <div className="flex items-center text-sm font-medium">
              {aboutUsContent[2].subheading}
              </div>
              <p className="mb-6 text-neutral-500"></p>
              <p className="text-neutral-500 text-xl">
              {aboutUsContent[2].description}
              </p>

            </div>
          </div>

          <div className="mb-16 flex flex-wrap bg-custom-white p-12">
            <div className="w-6/12 p-12 flex flex-col">
              <h3 className="mb-4 text-2xl font-bold">{aboutUsContent[3].title}</h3>
              <div className="flex items-center text-sm font-medium">
              {aboutUsContent[3].subheading}
              </div>
              <p className="mb-6 text-neutral-500"></p>
              <p className="text-neutral-500 text-xl">
              {aboutUsContent[3].description}
              </p>

            </div>

            <div className="w-1/2 flex justify-center items-center">
              <div className="cursor-pointer overflow-hidden object-none rounded-lg bg-cover h-[350px] flex justify-center items-center">
                <img src={vanilla} className="w-full bg-cover" />
              </div>
            </div>
          </div>

          <div className="mb-16 flex flex-wrap bg-custom-white p-12">
            <div className="w-6/12 p-12 flex flex-col">
              <h3 className="mb-4 text-2xl font-bold">{aboutUsContent[4].title}</h3>
              <div className="flex items-center text-sm font-medium">
              {aboutUsContent[4].subheading}
              </div>
              <p className="mb-6 text-neutral-500"></p>
              <p className="text-neutral-500 text-xl">
              {aboutUsContent[4].description}
              </p>

            </div>

            <div className="w-1/2 flex justify-center items-center">
              <div className="cursor-pointer overflow-hidden object-none rounded-lg bg-cover h-[350px] flex justify-center items-center">
                <img src={butter} className="w-full bg-cover" />
              </div>
            </div>
          </div>
        </section>
      </Fade>
    </div>
  );
};

export default About;
