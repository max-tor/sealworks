import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

export const UniqueRecipeSection: React.FC = () => {
  return (
    <section className="flex gap-5 max-md:flex-col">
      <div className="flex w-[30%] flex-col max-md:w-full">
        <div className="flex">
          <div className="flex-1 flex-col justify-center px-6 py-10 max-md:pl-5">
            <StaticImage
              alt="Illustration showing a step-by-step process for creating a unique project recipe."
              src="images/recipe1.svg"
            />
          </div>
          <div className="flex-1 flex-col justify-center px-7 py-10 max-md:pl-5">
            <StaticImage
              alt="Graphic highlighting key ingredients in the methodology for custom project solutions"
              src="images/recipe2.svg"
            />
          </div>
        </div>
      </div>
      <div className="ml-5 flex w-[70%] flex-col max-md:ml-0 max-md:w-full">
        <article className="my-auto flex flex-col self-stretch max-md:mx-5 max-md:mt-10 max-md:max-w-full">
          <h2 className="text-blue-900 self-start text-7xl leading-[74px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
            every project has a unique recipe.
          </h2>
          <p className="mt-6 text-lg leading-7 text-black max-md:max-w-full">
            Your idea may still be just a simmering notion, or perhaps it`s
            already fully baked. No matter where you are in your process,
            Sealworks can help you strategize, design, develop, launch, and
            scale for your audience. You can count on us to push boundaries,
            break out of the box and help your organization set a roadmap in
            motion for whatever needs to be built.
          </p>
        </article>
      </div>
    </section>
  );
};
