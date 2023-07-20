import React, {useState} from "react";
import VersusSwords from "../assets/VersusSwords.png";
import SearchGlass from "../assets/SearchGlass.png";
import ChampionSelect from "../components/ChampionSelect";

function Home(props) {
  const splashImageTestData = Array(150).fill(
    "https://via.placeholder.com/100x100"
  );

  const [allyChampion , setAllyChampion] = useState('Aatrox');
  const [enemyChampion, setEnemyChampion] = useState('Aatrox');

  return (
    <div className="flex flex-row justify-center items-center h-[85vh] overflow-y-hidden mt-[40px]">
     <ChampionSelect title="Choose Your Champion" changeChamp={setAllyChampion} />

      <div className="mx-[50px]">
        <div className="flex gap-[50px]">
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${allyChampion}.png`}
            alt="Ally Champion Splash"
            className="w-[100px] h-[100px] shadow-inner hover:scale-110 transition-transform duration-200"
          />
          <img
            src={VersusSwords}
            alt="Versus Swords"
            className="w-[75px] h-[75px]"
          />
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/champion/${enemyChampion}.png`}
            alt="Ally Champion Splash"
            className="w-[100px] h-[100px] shadow-inner hover:scale-110 transition-transform duration-200"
          />
        </div>
        <div className="flex justify-center mt-[20px]">
          <button className="w-[200px] h-[50px] bg-blue rounded-xl mt-[15px] flex items-center justify-center hover:opacity-75 transition-all duration-200">
            <h1 className="text-[24px] text-center text-blacklite">Submit Matchup</h1>
          </button>

        </div>
      </div>

      <ChampionSelect title="Choose Your Opponents Champion" changeChamp={setEnemyChampion}/>
    </div>
  );
}

export default Home;
