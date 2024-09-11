import { RenderBodyArgs } from 'gatsby';
import React from 'react';

export const onRenderBody = ({
  setPostBodyComponents,
  setHeadComponents,
}: RenderBodyArgs) => {
  setPostBodyComponents([
    <div key="headlessui-portal-root" className="headlessui-portal-root" />,
  ]);
  setHeadComponents([
    <style
      key="sentry-feedback"
      type="text/css"
      dangerouslySetInnerHTML={{
        __html: `
            #sentry-feedback {
              --inset: auto 0 50px auto
            }
        `,
      }}
    />,
  ]);
};
