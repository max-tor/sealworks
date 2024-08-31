import React from 'react';

export const DiscussChallengeSection: React.FC = () => {
  return (
    <div className="relative h-[358px] w-[1230px]">
      <div className="absolute left-0 top-0 h-[358px] w-[1230px] bg-[#f7d900]" />
      <div className="absolute left-[500px] top-[229px] h-[54px] w-[343px]">
        <div className="absolute left-0 top-0 h-[54px] w-[341.05px] rounded-[32.59px] bg-[#002d9a]" />
        <div className="absolute left-[3.53px] top-[14px] h-[26px] w-[339.47px] text-center font-roboto text-[23px] font-bold text-white">
          book a project jam session
        </div>
      </div>
      <div className="absolute left-[500px] top-[41px] w-[678px] font-roboto text-[40px] font-normal leading-[48px] text-black">
        let’s discuss your challenge and create a solution today.
      </div>
      <div className="absolute left-[520px] top-[151px] w-[236px] font-roboto text-lg font-normal leading-loose text-[#002d9a]">
        30-min <br />
        define your needs
      </div>
      <div className="absolute left-[763px] top-[151px] w-[236px] font-roboto text-lg font-normal leading-loose text-[#002d9a]">
        discuss ideas
        <br />
        define next steps
      </div>
      <img
        className="absolute left-[3px] top-[16px] h-[333px] w-[469px]"
        src="https://via.placeholder.com/469x333"
      />
    </div>
  );
};
