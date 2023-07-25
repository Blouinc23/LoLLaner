import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import VersusSwords from "../assets/VersusSwords.png";
import ArrowRight from "../assets/ArrowRight.png";
import ChampionMatchupSplash from "../components/ChampionMatchupSplash";
import Lottie from "lottie-react";
import LoadingAnimation from "../assets/animationsJson/LoadingAnimation.json";
import axios from "axios";

function Matchup(props) {
  const champData = useLocation();
  const { allyChampion, enemyChampion, lane } = champData.state;

  const [isLoaded, setIsLoaded] = useState(false);
  const [allyChampData, setAllyChampData] = useState({});
  const [enemyChampData, setEnemyChampData] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  async function loadData() {
    const allyChampData = await axios.get(
      `http://localhost:5000/api/championdata/${allyChampion}`
    );
    setAllyChampData(allyChampData.data);
    const enemyChampData = await axios.get(
      `http://localhost:5000/api/championdata/${enemyChampion}`
    );
    setEnemyChampData(enemyChampData.data);
    console.log(`Data loaded`);
    setIsLoaded(true);
  }

  function checkLoaded() {
    if (allyChampLoaded && enemyChampLoaded && dataLoaded) {
      setIsLoaded(true);
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={`flex gap-[150px] justify-center my-[100px] `}>
      <div className="absolute top-0 left-0">
        <div className="bg-gradient-to-r from-transparent to-blacklite w-[40vw] h-[60vh] absolute">
          &nbsp;
        </div>
        <div className="bg-gradient-to-b from-transparent to-blacklite w-[40vw] h-[60vh] absolute">
          &nbsp;
        </div>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${allyChampion}_0.jpg`}
          alt="Ally Champion Splash"
          className="w-[40vw] h-[60vh] object-cover"
        />
      </div>
      <div id="allyCard" className="z-10">
        <div className={`${!isLoaded && "hidden"}`}>
          <ChampionMatchupSplash
            champion={allyChampion}
            champData={allyChampData}
          />
        </div>
        <div className={`${isLoaded && "hidden"}`}>
          <Lottie
            animationData={LoadingAnimation}
            id="Loading Animation"
            style={{ width: "25vw" }}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center self-start">
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

      <div id="enemyCard" className="z-10">
        <div className={`${!isLoaded && "hidden"}`}>
          <ChampionMatchupSplash
            champion={enemyChampion}
            champData={enemyChampData}
            isRight
          />
        </div>
        <div className={`${isLoaded && "hidden"}`}>
          <Lottie
            animationData={LoadingAnimation}
            id="Loading Animation"
            style={{ width: "25vw" }}
          />
        </div>
      </div>

      <div className="absolute top-0 right-0">
        <div className="bg-gradient-to-l from-transparent to-blacklite w-[40vw] h-[60vh] absolute">
          &nbsp;
        </div>
        <div className="bg-gradient-to-b from-transparent to-blacklite w-[40vw] h-[60vh] absolute">
          &nbsp;
        </div>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${enemyChampion}_0.jpg`}
          alt="Ally Champion Splash"
          className="w-[40vw] h-[60vh] object-cover"
        />
      </div>
    </div>
  );
}

export default Matchup;
