import React from 'react';
import ArrowRight from "../assets/ArrowRight.png";

function ChampionMatchupSplash({champion}) {
    return (
        <div className="translate-x-[0vw] flex flex-col items-center">
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`}
          alt="Ally Champion Splash"
          className=""
        />
        <div className="flex gap-[10px] justify-center mt-[50px]">
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${champion}R.png`} alt="Ally Champion Q" className="w-[50px] h-[50px]"/>
            <img src={ArrowRight} alt="Arrow Right" className="w-[50px] h-[50px]"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${champion}Q.png`} alt="Ally Champion Q" className="w-[50px] h-[50px]"/>
            <img src={ArrowRight} alt="Arrow Right" className="w-[50px] h-[50px]"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${champion}w.png`} alt="Ally Champion Q" className="w-[50px] h-[50px]"/>
            <img src={ArrowRight} alt="Arrow Right" className="w-[50px] h-[50px]"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${champion}E.png`} alt="Ally Champion Q" className="w-[50px] h-[50px]"/>
        </div>
      </div>
    );
}

export default ChampionMatchupSplash;