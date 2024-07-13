import React from "react";
import GitHubCalendar from "react-github-calendar";

const HowDaysICode = () => {
  const colorScheme = {
    dark: ["#E39FF6", "#BE93D4", "#B65FCF", "#A32CC4", "#710193"],
  };

  return (
    <>
    <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>
      <div>
        <div className="flex justify-center my-5 lg:py-8">
          <div className="flex  items-center">
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
            <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
              How Days I Code
            </span>
            <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          </div>
        </div>
        <GitHubCalendar
          username="SyedMughisHussain"
          blockMargin={5}
          blockSize={15}
          fontSize={16}
          theme={colorScheme}
        />
      </div>
    </>
  );
};

export default HowDaysICode;
