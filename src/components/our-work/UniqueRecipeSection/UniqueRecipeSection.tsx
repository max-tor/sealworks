import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const UniqueRecipeSection: React.FC = () => {
  return (
    <section className="flex gap-5 max-lg:flex-col">
      <div className="flex w-[30%] flex-col max-lg:w-full">
        <div className="flex">
          <div className="flex flex-1 flex-col items-center justify-center px-6 py-5 max-lg:pl-5 lg:py-10">
            <StaticImage
              alt="Lofi wireframe sketch to explore design possibilities and spark imagination."
              src="images/recipe1.svg"
            />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center px-7 py-5 max-lg:pl-5 lg:py-10">
            <StaticImage
              alt="Sketch illustrating a concept to gather initial feedback."
              src="images/recipe2.svg"
            />
          </div>
        </div>
      </div>
      <div className="ml-5 flex w-[70%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="my-auto flex flex-col self-stretch max-lg:mx-5 max-lg:mt-5 max-lg:max-w-full">
          <h2 className="text-blue-900 self-start text-7xl leading-[74px] max-lg:max-w-full max-lg:text-4xl max-lg:leading-[50px]">
            every project has a unique recipe.
          </h2>
          <p className="mt-6 text-[16px] text-black max-lg:max-w-full">
            Your idea may still be just a simmering notion, or perhaps it’s
            already fully baked. No matter where you are in your process,
            Sealworks can help you strategize, design, develop, launch, and
            scale for your audience. You can count on us to push boundaries,
            break out of the box and help your organization set a roadmap in
            motion for whatever needs to be built.
          </p>
        </div>
      </div>
    </section>
  );
};
