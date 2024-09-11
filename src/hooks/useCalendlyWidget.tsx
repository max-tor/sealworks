import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { PageHeightResizeEvent } from 'react-calendly/typings/components/hooks/useCalendlyEventListener';

import { calendlySettings, calendlyUser } from '@/configs';

type CalendlyWidgetProps = {
  label?: string;
};

export const useCalendlyWidget = ({
  label = 'Schedule time with us',
}: CalendlyWidgetProps) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState('500px');
  const onPageHeightResize = (e: PageHeightResizeEvent) => {
    setHeight(e.data.payload.height);
  };

  useCalendlyEventListener({
    onPageHeightResize,
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="fixed bottom-[10px] right-[10px] z-50 hidden lg:block"
        style={{ bottom: '10px', right: '10px' }}
      >
        <Button gradientDuoTone="purpleToBlue" onClick={handleOpen}>
          {label}
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 z-40 bg-black/75" />

        <div className="fixed inset-0 z-50 w-screen overflow-y-auto p-4">
          <div className="fixed inset-0 flex w-screen items-center justify-center">
            <DialogPanel className="w-auto max-w-lg flex-[1_1_860px]">
              <InlineWidget
                url={`https://calendly.com/${calendlyUser}`}
                pageSettings={calendlySettings}
                styles={{ height }}
              />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
