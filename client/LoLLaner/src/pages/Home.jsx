import React from "react";
import VersusSwords from "../assets/VersusSwords.png";
import SearchGlass from "../assets/SearchGlass.png";

function Home(props) {
  const splashImageTestData = Array(150).fill(
    "https://via.placeholder.com/100x100"
  );

  return (
    <div className="flex flex-row justify-center items-center h-[85vh] overflow-y-hidden mt-[40px]">
      <div className="self-start h-[1000px] overflow-y-scroll scrollbar-hide">
        <div className="sticky top-0 bg-blacklite flex flex-col items-center">
          <h1 className="text-[50px] text-center">
            Choose Your <br /> Champion
          </h1>
          <div className="w-[600px] h-[3rem] bg-primaryWhite rounded-3xl mt-[15px] flex items-center">
            <img
              src={SearchGlass}
              alt="Search Glass"
              className="h-[2.5rem] ml-[10px]"
            />
            <input
              type="text"
              className="w-[500px] h-[3rem] bg-transparent ml-[10px] text-blacklite outline-none text-[24px]"
            />
            {""}
          </div>
        </div>
        <div className="grid grid-cols-5 gap-[37px] mt-[20px]">
          {splashImageTestData.map((splashImage, index) => (
            <img
              src={splashImage}
              alt="Champion Splash"
              className="w-[90px] h-[90px] border-[4px] hover:border-[0px] border-blacklite transition-all duration-100 cursor-pointer"
              key={index}
            />
          ))}
        </div>
      </div>

      <div className="mx-[50px]">
        <div className="flex gap-[50px]">
          <img
            src="https://via.placeholder.com/100x100"
            alt="Ally Champion Splash"
            className="w-[100px] h-[100px] shadow-inner"
          />
          <img
            src={VersusSwords}
            alt="Versus Swords"
            className="w-[100px] h-[100px]"
          />
          <img
            src="https://via.placeholder.com/100x100"
            alt="Ally Champion Splash"
            className="w-[100px] h-[100px] shadow-inner"
          />
        </div>
        <div className="flex justify-center mt-[20px]">
          <button className="w-[200px] h-[50px] bg-blue rounded-xl mt-[15px] flex items-center justify-center hover:opacity-75 transition-all duration-200">
            <h1 className="text-[24px] text-center text-blacklite">Submit Matchup</h1>
          </button>

        </div>
      </div>

      <div className="self-start h-[1000px] overflow-y-scroll scrollbar-hide">
        <div className="sticky top-0 bg-blacklite flex flex-col items-center">
          <h1 className="text-[50px] text-center">
            Choose Your <br /> Opponent's Champion
          </h1>
          <div className="w-[600px] h-[3rem] bg-primaryWhite rounded-3xl mt-[15px] flex items-center">
            <img
              src={SearchGlass}
              alt="Search Glass"
              className="h-[2.5rem] ml-[10px]"
            />
            <input
              type="text"
              className="w-[500px] h-[3rem] bg-transparent ml-[10px] text-blacklite outline-none text-[24px]"
            />
            {""}
          </div>
        </div>
        <div className="grid grid-cols-5 gap-[37px] mt-[20px]">
          {splashImageTestData.map((splashImage, index) => (
            <img
              src={splashImage}
              alt="Champion Splash"
              className="w-[90px] h-[90px] border-[4px] hover:border-[0px] border-blacklite transition-all duration-100 cursor-pointer"
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
