import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import VersusSwords from "../assets/VersusSwords.png";
import ArrowRight from "../assets/ArrowRight.png";
import ChampionMatchupSplash from "../components/ChampionMatchupSplash";

function Matchup(props) {
  useEffect(() => {
    console.log(props.allyChampion);
    console.log(props.enemyChampion);
  }, []);

  const champData = useLocation();
  const { allyChampion, enemyChampion, lane} = champData.state;

  return (
    <div className="flex gap-[150px] justify-center items-center my-[100px]">
      <ChampionMatchupSplash champion={allyChampion}/>

      <div className="flex flex-col items-center justify-center text-center">
        <img
          src={VersusSwords}
          alt="Versus Swords"
          className="w-[75px] h-[75px] mb-[25px]"
        />
        <div>
          <h1>{`${allyChampion} Vs. ${enemyChampion}`}</h1>
          <h1>{lane}</h1>
        </div>
      </div>

      <ChampionMatchupSplash champion={enemyChampion}/>
    </div>
  );
}

export default Matchup;
