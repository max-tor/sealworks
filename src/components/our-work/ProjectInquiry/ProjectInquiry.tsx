import React, { useState } from 'react';

import { CalendlyDialog } from '@/components/common/CalendlyDialog';
import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';
import { CalendlyForms } from '@/configs';

import { ReactComponent as BrainstormImg } from './images/brainstorm.inline.svg';
import { ReactComponent as MessageImg } from './images/message.inline.svg';

export const ProjectInquiry = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section className="flex w-full max-w-full gap-5 rounded-none bg-[#f1f1f1] p-5 max-lg:flex-col lg:items-center">
        <BrainstormImg
          className="z-10 aspect-square w-[178px] object-contain lg:flex-[0_0_178px]"
          role="img"
          aria-label="Illustration of brainstorming process"
        />
        <div className="flex-1">
          <HeaderContainer>
            <UnderlinedText color="accent">what’s your project?</UnderlinedText>
          </HeaderContainer>
          <p className="mt-4 self-start text-2xl leading-none text-black">
            reach out to brainstorm, get inspired, and craft your vision.
          </p>
        </div>
        <div className="flex w-full flex-wrap items-start gap-10 lg:flex-[0_0_272px]">
          <div className="mt-2 flex items-start text-center text-lg font-bold text-white">
            <button
              aria-label="Contact SealWorks team to start a project brainstorming session"
              className="z-10 mt-7 self-end rounded-[55.602px] bg-blue px-6 py-3 hover:bg-blueDark"
              onClick={handleOpen}
            >
              get in touch
            </button>
            <MessageImg className="aspect-[1.61] w-[114px] max-w-full shrink-0 self-start object-contain" />
          </div>
        </div>
      </section>
      <CalendlyDialog
        url={CalendlyForms.NEW_PROJECT_COLLABORATION}
        open={open}
        onClose={handleClose}
      />
    </>
  );
};
