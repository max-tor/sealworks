import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { StaticImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { PageHeightResizeEvent } from 'react-calendly/typings/components/hooks/useCalendlyEventListener';

import { calendlySettings, calendlyUrl } from '@/configs';

export const DiscussChallengeSection: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState('500px');
  const onPageHeightResize = (e: PageHeightResizeEvent) => {
    console.log('onPageHeightResize', e);
    setHeight(e.data.payload.height);
  };

  useCalendlyEventListener({
    onPageHeightResize,
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section className="relative z-20 bg-yellow p-5 max-md:max-w-full">
      <div className="flex gap-5 max-lg:flex-col">
        <div className="flex flex-col max-md:w-full lg:w-[46%]">
          <StaticImage
            className="lg:h-[334px] lg:w-[470px] lg:object-cover"
            imgClassName="h-auto max-w-full object-top"
            alt="Mockup of a feedback page with handwritten elements on the left and digital interface on the right."
            src="images/feedback-page-mockup.png"
            breakpoints={[470, 640, 768, 1024, 1280]}
            sizes="(min-width: 1280px) 470px, 100vw"
          />
        </div>
        <div className="flex flex-col max-md:w-full lg:flex-[1_1_54]">
          <div className="flex w-full flex-col items-start max-md:mt-10 max-md:max-w-full">
            <h2 className="self-stretch text-4xl leading-10 text-black max-md:max-w-full lg:mt-6">
              let’s discuss your challenge and create a solution today.
            </h2>
            <div className="text-blue-900 flex max-w-full justify-between gap-5 text-lg leading-8 lg:m-2.5 lg:mx-5">
              <div className="w-60 font-roboto text-lg font-normal leading-loose text-[#002d9a]">
                30-min <br />
                define define your needs
              </div>
              <div className="w-60 font-['Roboto'] text-lg font-normal leading-loose text-[#002d9a]">
                discuss ideas
                <br />
                define define next steps
              </div>
            </div>
            <button
              className="mt-3.5 w-full rounded-4xl bg-blue px-9 py-4 text-center text-2xl font-bold text-white max-md:px-5 lg:w-auto"
              onClick={handleOpen}
            >
              book a project jam session
            </button>
          </div>
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 z-40 bg-black/75" />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto p-4">
          <div className="fixed inset-0 flex w-screen items-center justify-center">
            <DialogPanel className="w-auto max-w-lg flex-[1_1_860px]">
              <InlineWidget
                url={calendlyUrl}
                pageSettings={calendlySettings}
                styles={{ height }}
              />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </section>
  );
};
