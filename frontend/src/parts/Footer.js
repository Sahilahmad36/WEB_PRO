import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'; 
import Button from '../elements/Button/index.js';
import BrandIcon from './BrandIcon.js';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 pb-6">
      <div className="container flex flex-col mx-auto">
        <div className="flex flex-col sm:flex-row mt-8 justify-center">
          <div className="w-1/3 flex flex-col ml-16 mr-8">
            <BrandIcon />
            <p className="w-full text-lg text-gray-400 font-light mt-4">
              <strong>
                Providing expert legal advice and representation to safeguard your rights
                and ensure justice is served.
              </strong>
            </p>
          </div>

          <div className="w-1/3 mt-0 ml-16 mr-0 sm:ml-0 sm:mr-5">
          <h2 className="text-2xl font-semibold">Contact Details</h2>
            <p className="text-lg text-gray-400 font-light">+919988924260</p>
            <p className="text-lg text-gray-400 font-light">Info@privysolutions.in</p>
            <p className="text-lg text-gray-400 font-light">
              <strong>
            Office No. 210,208,216,215<br />
            Tricity Plaza,Peer Muchalla <br />
            (near sector 20 PKL),Zirakpur,160104
            </strong>
            </p>
          </div>

          <div className="w-1/3 ml-16 sm:ml-0 mt-0">
          <h2 className="text-2xl font-semibold">Social links</h2>
            <div className="flex flex-col">
              <Button
                href="https://instagram.com"
                type="link"
                target="_blank"
                className="flex text-lg text-gray-400 font-light hover:text-gray-600 mb-2"
                isExternal
              >
                <FaInstagram className="mr-2 text-lg" />
                Instagram
              </Button>
              <Button
                href="https://linkedin.com"
                type="link"
                target="_blank"
                className="flex text-lg text-gray-400 font-light hover:text-gray-600 mb-2"
                isExternal
              >
                <FaLinkedin className="mr-2 text-lg" />
                LinkedIn
              </Button>
              <Button
                href="https://wa.me/919988924260"
                type="link"
                target="_blank"
                className="flex text-lg text-gray-400 font-light hover:text-gray-600"
                isExternal
              >
                <FaWhatsapp className="mr-2 text-lg" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center mt-7">
          <p className="text-lg text-gray-400 font-light">
            Copyright 2024 - All rights reserved
          </p>
          <hr className="border-t border-gray-400 mt-5 w-full mx-auto" />
          <div className="flex-row mt-2">
            <p className="inline-block text-lg text-gray-400 font-light">
              Made with &#x2764; by @sahil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
