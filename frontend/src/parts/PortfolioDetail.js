/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-awesome-reveal';

import NotFound from 'assets/images/NotFound.png';

import Button from 'elements/Button';

export default function PortfolioDetail({ data }) {
  if (data === null) {
    return (
      <section className="container mx-auto">
        <Fade bottom triggerOnce>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12 mt-5" />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Project Not Found
            </h1>
            <div className="flex justify-center">
              <Button href="/project" type="link" className="flex w-30 h-10 px-5 mt-5 bg-theme-blue text-white items-center rounded transform transition duration-500 hover:bg-gray-900">
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <Fade bottom>
        <Button type="link" href="/project" className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline">
          <svg className="w-5 h-5 text-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          See All Cases
        </Button>
      </Fade>

      {
        data.map((item) => (
          <div className="flex flex-col mt-8 justify-center">
            <Fade bottom triggerOnce>
              <h1 className="text-5xl text-theme-blue text-center font-bold">{item.title}</h1>
            </Fade>

            <Fade bottom delay={300 * 1} triggerOnce>
              <div className="flex justify-center xl:mb-6">
                <img src={item.imageUrl} alt="Project" className="flex w-4/5 sm:w-4/6" />
              </div>
            </Fade>

            <Fade bottom delay={300 * 1} triggerOnce>
              <div className="flex flex-col mt-16 mb-12 mx-8 sm:mx-16 xl:mx-28">
                <h1 className="text-3xl text-theme-blue font-bold mb-3">
                  Case Details
                </h1>

                <p className="font-light text-lg text-gray-400 text-justify">
                This section offers a detailed overview of legal cases, including case background, involved parties, legal issues, and outcomes. Each case is summarized with key facts, legal arguments, and the final judgment. Whether reviewing past precedents or current cases, our platform provides accurate and comprehensive case analysis. Our legal team ensures clarity and transparency, helping clients and professionals stay informed about important legal matters and understand the complexities of the system.                </p>
              </div>

              <div className="flex flex-col mx-8 sm:mx-16 xl:mx-28">
                <h1 className="text-3xl text-theme-blue font-bold mb-5">
                  Case Responsibilities
                </h1>

                <div className="flex flex-row ml-1">
                  Advocate for client rights during negotiations.<br />
                  Ensure fair division of marital assets.<br />
                  Provide guidance on child custody and alimony matters.
                </div>
              </div>
            </Fade>
          </div>
        ))
      }
    </section>
  );
}