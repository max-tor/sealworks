import { Button } from 'flowbite-react';
import React, { useState } from 'react';

import { CalendlyDialog } from '@/components/common/CalendlyDialog';

type CalendlyWidgetProps = {
  label?: string;
};

export const useCalendlyWidget = ({
  label = 'Schedule time with us',
}: CalendlyWidgetProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div
        className="fixed bottom-[10px] right-[10px] z-50"
        style={{ bottom: '10px', right: '10px' }}
      >
        <Button
          onClick={handleOpen}
          className="group relative flex items-stretch justify-center rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 p-0.5 text-center font-medium text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-gradient-to-bl dark:focus:ring-cyan-800"
        >
          {label}
        </Button>
      </div>
      <CalendlyDialog open={open} onClose={handleClose} />
    </>
  );
};
