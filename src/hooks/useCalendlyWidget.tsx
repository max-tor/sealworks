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
        className="fixed bottom-[10px] right-[10px] z-50 hidden lg:block"
        style={{ bottom: '10px', right: '10px' }}
      >
        <Button gradientDuoTone="purpleToBlue" onClick={handleOpen}>
          {label}
        </Button>
      </div>
      <CalendlyDialog
        open={open}
        onClose={handleClose}
      />
    </>
  );
};
