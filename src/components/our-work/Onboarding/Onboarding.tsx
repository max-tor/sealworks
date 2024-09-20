import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';

import { HeaderContainer } from '@/components/common/HeaderContainer';
import { UnderlinedText } from '@/components/common/UnderlinedText';

const description =
  "We create unique onboarding experiences that are tailored to seamlessly integrate new users into your teams. By understanding your organization's culture and goals, we design onboarding processes that are engaging, informative, and user-friendly. Our team utilizes interactive elements and personalized content to ensure new users feel welcomed and confident in navigating their new environment. We prioritize clear communication and continuous support, making the transition smooth and enjoyable. With Sealworks, onboarding becomes a positive and impactful first step in the user journey, setting the stage for long-term success.";

// const blockWidth = 613;
// const blockHeight = 534;

const img1 = {
  top: -86,
  left: 203,
  width: 431,
  height: 235,
  alt: 'Career simulation interface showing a student character exploring becoming a geneticist, with starting salary information.',
};
const img2 = {
  top: 333,
  left: 379,
  width: 255,
  height: 182,
  alt: 'Moderna onboarding resources page for new employees, full-time employees, and managers.',
};
const img3 = {
  top: 296,
  left: 40,
  width: 304,
  height: 287,
  alt: 'Everboarding dashboard showing collected blossoms and available learning journeys.',
};

const img4 = {
  top: 149,
  left: 351,
  width: 283,
  height: 167,
  alt: 'Deep principles learning page with modules on direct, empathetic, earnest, and productive learning paths.',
};

const img5 = {
  top: 43,
  left: -39,
  width: 335,
  height: 240,
  alt: 'Lifeguarding course modules with progress tracking and completion details.',
};

export const Onboarding = () => {
  return (
    <section className="relative my-5 flex max-w-full gap-5 max-lg:flex-col lg:my-14 lg:mt-[75px] lg:gap-[20px] xl:gap-[110px]">
      <div className="ml-5 w-[36%] flex-[1_1_36%] flex-col max-lg:ml-0 max-lg:w-full">
        <div className="text-black max-lg:mt-10">
          <HeaderContainer>
            <UnderlinedText color="blueSticky">onboarding</UnderlinedText>
          </HeaderContainer>
          <p className="mt-10">{description}</p>
        </div>
      </div>
      <aside className="relative mx-auto mb-[9.176029962546817%] ml-[6.36215334420881%] mr-[3.4257748776508974%] mt-[16.10486891385768%] grid h-[87.11256117455139vw] w-full gap-4 bg-blue lg:h-[534px] lg:w-[613px] lg:flex-[0_0_613px] lg:flex-col">
        <StaticImage
          className="!absolute -top-[16.10486891385768%] left-[33.115823817292004%] h-[44.00749063670412%] w-[70.30995106035888%] shadow-lg"
          imgClassName="object-fill"
          alt={img1.alt}
          src="images/diversity_training_dialogues_modules.png"
          breakpoints={[img1.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 431px, 100vw"
        />
        <StaticImage
          className="!absolute left-[61.82707993474714%] top-[62.35955056179775%] h-[34.08239700374532%] w-[41.598694942903755%] shadow-lg"
          imgClassName="object-fill"
          alt={img2.alt}
          src="images/moderna_onboarding_resources.png"
          breakpoints={[img2.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 317px, 100vw"
        />

        <StaticImage
          className="font-0 !absolute left-[6.525285481239804%] top-[55.430711610486895%] h-[53.745318352059925%] w-[49.59216965742252%] shadow-lg"
          imgClassName="object-fill"
          alt={img3.alt}
          src="images/everboarding_dashboard_blossoms.png"
          breakpoints={[img3.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 304px, 100vw"
        />

        <StaticImage
          className="!absolute left-[57.25938009787929%] top-[27.902621722846444%] h-[31.273408239700373%] w-[46.166394779771615%] shadow-lg"
          imgClassName="object-fill"
          alt={img4.alt}
          src="images/deep_principles_learning.png"
          breakpoints={[img4.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 283px, 100vw"
        />

        <StaticImage
          className="!absolute -left-[6.36215334420881%] top-[8.05243445692884%] h-[44.9438202247191%] w-[54.64926590538336%] shadow-lg"
          imgClassName="object-fill"
          alt={img5.alt}
          src="images/lifeguarding_course_modules.png"
          breakpoints={[img5.width, 640, 768, 1024]}
          sizes="(min-width: 1024px) 335px, 100vw"
        />
      </aside>
    </section>
  );
};
