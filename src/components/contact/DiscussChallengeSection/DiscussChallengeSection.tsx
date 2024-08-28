import React from 'react';

export const DiscussChallengeSection: React.FC = () => {
  return (
    <div className="w-[1230px] h-[358px] relative">
      <div className="w-[1230px] h-[358px] left-0 top-0 absolute bg-[#f7d900]" />
      <div className="w-[343px] h-[54px] left-[500px] top-[229px] absolute">
        <div className="w-[341.05px] h-[54px] left-0 top-0 absolute bg-[#002d9a] rounded-[32.59px]" />
        <div className="w-[339.47px] h-[26px] left-[3.53px] top-[14px] absolute text-center text-white text-[23px] font-bold font-roboto">
          book a project jam session
        </div>
      </div>
      <div className="w-[678px] left-[500px] top-[41px] absolute text-black text-[40px] font-normal font-roboto leading-[48px]">
        let’s discuss your challenge and create a solution today.
      </div>
      <div className="w-[236px] left-[520px] top-[151px] absolute text-[#002d9a] text-lg font-normal font-roboto leading-loose">
        30-min <br />
        define your needs
      </div>
      <div className="w-[236px] left-[763px] top-[151px] absolute text-[#002d9a] text-lg font-normal font-roboto leading-loose">
        discuss ideas
        <br />
        define next steps
      </div>
      <img
        className="w-[469px] h-[333px] left-[3px] top-[16px] absolute"
        src="https://via.placeholder.com/469x333"
      />
    </div>
  );
};
