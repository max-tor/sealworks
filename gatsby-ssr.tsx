import { RenderBodyArgs } from 'gatsby';
import React from 'react';

export const onRenderBody = ({ setPostBodyComponents }: RenderBodyArgs) => {
  setPostBodyComponents([
    <div key="headlessui-portal-root" className="headlessui-portal-root" />,
  ]);
};
