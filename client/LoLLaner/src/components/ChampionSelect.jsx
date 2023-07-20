import React, { useEffect,useState } from "react";
import SearchGlass from "../assets/SearchGlass.png";
import {getChampionNames} from "../assets/data/championData.jsx";
import Aatrox from "../assets/championSprites/Aatrox.png";


function ChampionSelect({title,changeChamp}) {
    const [search, setSearch] = useState('');
    const [selectedChamp, setSelectedChamp] = useState('Aatrox');
    const splashImageTestData = Array(150).fill(
        "https://via.placeholder.com/100x100"
      );

    const championNames=Object.keys(getChampionNames().data);

    const championObj=championNames
        .map((championName) => {
            return {
                name: championName,
                image: `http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${championName}.png`
            }
        });

    useEffect(() => {
        console.log(championObj);
    }, [selectedChamp])

  return (
    <div className="self-start h-[1000px] overflow-y-scroll scrollbar-hide">
      <div className="sticky top-0 bg-blacklite flex flex-col items-center">
        <h1 className="text-[50px] text-center max-h-[200px] max-w-[500px]">
          {title}
        </h1>
        <div className="w-[600px] h-[3rem] bg-primaryWhite rounded-3xl mt-[15px] flex items-center">
          <img
            src={SearchGlass}
            alt="Search Glass"
            className="h-[2.5rem] ml-[10px]"
          />
          <input
            type="text"
            className="w-[500px] h-[3rem] bg-transparent ml-[10px] text-blacklite outline-none text-[18px]"
            onChange={(e) => setSearch(e.target.value)}
          />
          {""}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-[37px] mt-[20px]">
        {championObj.filter(item => {
            return search.toLowerCase() !== "" ? item.name.toLowerCase().includes(search.toLowerCase()) : item;
        }).map((champ, index) => (
          <img
            src={champ.image}
            alt="Champion Splash"
            id={champ.name}
            className="w-[90px] h-[90px] border-[4px] hover:border-[0px] border-blacklite transition-all duration-100 cursor-pointer"
            key={index}
            onClick={(e) => changeChamp(e.target.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ChampionSelect;
