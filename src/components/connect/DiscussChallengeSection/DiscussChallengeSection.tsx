import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';

import { CalendlyDialog } from '@/components/common/CalendlyDialog';
import { CalendlyForms } from '@/configs';

export const DiscussChallengeSection: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="relative z-20 bg-yellow p-5 max-md:max-w-full">
      <div className="flex gap-5 max-lg:flex-col">
        <div className="flex flex-col max-md:w-full lg:w-[46%]">
          <StaticImage
            className="lg:h-[334px] lg:w-[470px] lg:object-cover"
            imgClassName="h-auto max-w-full object-top"
            alt="Going from concept to reality to fulfill user needs."
            src="images/concept-to-reality-sketching-future.png"
            breakpoints={[470, 640, 768, 1024, 1280]}
            sizes="(min-width: 1280px) 470px, 100vw"
          />
        </div>
        <div className="flex flex-col max-md:w-full lg:flex-[1_1_54]">
          <div className="flex w-full flex-col items-start max-md:max-w-full">
            <h2 className="self-stretch text-4xl leading-10 text-black max-md:max-w-full lg:mt-6">
              let’s discuss your challenge and create a solution today.
            </h2>
            <div className="text-blue-900 mb-6 ml-5 flex max-w-full flex-col justify-between text-lg leading-8 lg:m-2.5 lg:mx-5 lg:mb-8 lg:flex-row lg:gap-5">
              <ul className="w-60 list-disc font-roboto text-lg font-normal leading-loose text-blue lg:ml-5">
                <li>30-min</li>
                <li>define define your needs</li>
              </ul>
              <ul className="w-60 list-disc font-roboto text-lg font-normal leading-loose text-blue">
                <li>discuss ideas</li>
                <li>define define next steps</li>
              </ul>
            </div>
            <button
              aria-label="Book a project jam session with Sealworks"
              className="inline-block rounded-[32px] bg-blue px-[24px] pb-[12px] pt-[10px] text-center font-roboto text-2xl font-bold text-white hover:bg-blueDark"
              onClick={handleOpen}
            >
              book a project jam session
            </button>
          </div>
        </div>
      </div>
      <CalendlyDialog
        url={CalendlyForms.NEW_PROJECT_COLLABORATION}
        open={open}
        onClose={handleClose}
      />
    </section>
  );
};
