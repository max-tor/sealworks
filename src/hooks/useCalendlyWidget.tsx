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
      <div className="fixed bottom-3 right-4 z-50 md:right-3">
        <button
          onClick={handleOpen}
          className="group relative flex items-stretch justify-center rounded-full border border-transparent bg-cyan-700 bg-gradient-to-br from-purple-600 to-cyan-500 p-0.5 text-center font-medium text-white transition-[color,background-color,border-color,text-decoration-color,fill,stroke,box-shadow] focus:z-10 focus:outline-none focus:ring-4 focus:ring-cyan-300 enabled:hover:bg-cyan-800 enabled:hover:bg-gradient-to-bl dark:bg-cyan-600 dark:focus:ring-cyan-800 dark:enabled:hover:bg-cyan-700"
        >
          <span className="flex items-stretch rounded-md px-4 py-2 text-sm transition-all duration-200">
            {label}
          </span>
        </button>
      </div>
      <CalendlyDialog open={open} onClose={handleClose} />
    </>
  );
};
