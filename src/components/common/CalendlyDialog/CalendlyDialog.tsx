import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import React, { useState } from 'react';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';
import { PageHeightResizeEvent } from 'react-calendly/typings/components/hooks/useCalendlyEventListener';

import { CalendlyDialogProps } from '@/components/common/CalendlyDialog/CalendlyDialogProps';
import { CalendlyForms, calendlySettings } from '@/configs';

export const CalendlyDialog = ({
  url = CalendlyForms.NEW_PROJECT_COLLABORATION,
  open,
  onClose,
}: CalendlyDialogProps) => {
  const [height, setHeight] = useState('500px');
  const onPageHeightResize = (e: PageHeightResizeEvent) => {
    setHeight(e.data.payload.height);
  };

  useCalendlyEventListener({
    onPageHeightResize,
  });

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 z-40 bg-black/75" />

      <div className="fixed inset-0 z-50 w-screen overflow-y-auto p-4">
        <div className="fixed inset-0 flex w-screen items-center justify-center">
          <DialogPanel className="w-auto max-w-lg flex-[1_1_860px]">
            <InlineWidget
              url={url}
              pageSettings={calendlySettings}
              styles={{ height }}
            />
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
