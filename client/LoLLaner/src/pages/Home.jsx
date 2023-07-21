import React, { useState } from "react";
import VersusSwords from "../assets/VersusSwords.png";
import SearchGlass from "../assets/SearchGlass.png";
import ChampionSelect from "../components/ChampionSelect";
import { Link } from "react-router-dom";

function Home(props) {
  const splashImageTestData = Array(150).fill(
    "https://via.placeholder.com/100x100"
  );
  const [dropdownText, setDropdownText] = useState("Select Lane");
  const [open, setOpen] = useState(false);

  const [allyChampion, setAllyChampion] = useState("Aatrox");
  const [enemyChampion, setEnemyChampion] = useState("Aatrox");

  const handleOpen = () => {
    setOpen(!open);
  };

  function topLaneHandler() {
    setDropdownText("Top Lane");
    setOpen(false);
  }

  function midLaneHandler() {
    setDropdownText("Mid Lane");
    setOpen(false);
  }

  function botLaneHandler() {
    setDropdownText("Bot Lane");
    setOpen(false);
  }

  function jungleHandler() {
    setDropdownText("Jungle");
    setOpen(false);
  }


  return (
    <div className="flex flex-row justify-center h-[85vh] overflow-y-hidden mt-[40px]">
      <ChampionSelect
        title="Choose Your Champion"
        changeChamp={setAllyChampion}
      />

      <div className="mx-[50px] mt-[200px]">
        <div className="flex justify-center mb-[50px]">
          <Link
            to={`/matchup/${allyChampion}/${enemyChampion}`}
            state={{ allyChampion: allyChampion, enemyChampion: enemyChampion, lane: dropdownText }}
          >
            <button className="w-[200px] h-[50px] bg-blue rounded-xl mt-[15px] flex items-center justify-center hover:opacity-75 transition-all duration-200">
              <h1 className="text-[24px] text-center text-blacklite">
                Submit Matchup
              </h1>
            </button>
          </Link>
        </div>
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
        <div className="flex flex-col items-center justify-center mt-[20px] text-[24px] text-blacklite">
          <button onClick={handleOpen} className="w-[200px] h-[50px] bg-blue rounded-xl rounded-b-none mt-[15px] flex items-center justify-center hover:opacity-75 transition-all duration-200">{dropdownText}</button>
          {open ? (
            <ul className="bg-gray-300 text-blacklite p-2 w-[200px] text-center rounded-b-xl">
              <li className="">
                <button onClick={topLaneHandler}>Top Lane</button>
              </li>
              <li className="">
                <button onClick={midLaneHandler}>Mid Lane</button>
              </li>
              <li className="">
                <button onClick={botLaneHandler}>Bot Lane</button>
              </li>
              <li className="">
                <button onClick={jungleHandler}>Jungle</button>
              </li>
            </ul>
          ) : null}
        </div>
      </div>

      <ChampionSelect
        title="Choose Your Opponents Champion"
        changeChamp={setEnemyChampion}
      />
    </div>
  );
}

export default Home;
