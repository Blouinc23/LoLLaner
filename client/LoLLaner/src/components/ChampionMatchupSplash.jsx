import React, { useEffect,useRef,useState } from 'react';
import ArrowRight from "../assets/ArrowRight.png";
import axios from 'axios';



function ChampionMatchupSplash({champion, champData, isRight}) {
  const [spellNames, setSpellNames] = useState([]);
  useEffect(() => {
    const spells=getChampAbilityNames(champion).then((res) => { 
      setSpellNames(res.spells);
    }
    )
  }, [])

  async function getChampAbilityNames(champion) {
    const spellNames = await axios.get(`http://localhost:5000/api/championSpells/${champion}`);
    return spellNames.data;
  }


    return (
        <div className="translate-x-[0vw] flex items-center">
          {!isRight && <div className="flex gap-[10px] flex-col justify-center self-start">
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${spellNames[3]}.png`} alt="Ally Champion Q" id='champAbility1' className="w-[35px] h-[35px]"/>
            <img src={ArrowRight} alt="Arrow Right" className="w-[35px] h-[35px] rotate-90"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${spellNames[2]}.png`} alt="Ally Champion Q" id='champAbility2' className="w-[35px] h-[35px]"/>
            <img src={ArrowRight} alt="Arrow Right" className="w-[35px] h-[35px] rotate-90"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${spellNames[1]}.png`} alt="Ally Champion Q" id='champAbility3' className="w-[35px] h-[35px]"/>
            <img src={ArrowRight} alt="Arrow Right" className="w-[35px] h-[35px] rotate-90"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${spellNames[0]}.png`} alt="Ally Champion Q" id='champAbility4' className="w-[35px] h-[35px]"/>
        </div> }
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`}
          alt="Ally Champion Splash"
          className="mx-[25px] max-w-[250px]" 
        />
        {isRight && <div className="flex gap-[10px] flex-col justify-center self-start">
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${spellNames[3]}.png`} alt="Ally Champion Q" className="w-[35px] h-[35px]"/>
            <img src={ArrowRight} alt="Arrow Right" className="w-[35px] h-[35px] rotate-90"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${spellNames[2]}.png`} alt="Ally Champion Q" className="w-[35px] h-[35px]"/>
            <img src={ArrowRight} alt="Arrow Right" className="w-[35px] h-[35px] rotate-90"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${spellNames[1]}.png`} alt="Ally Champion Q" className="w-[35px] h-[35px]"/>
            <img src={ArrowRight} alt="Arrow Right" className="w-[35px] h-[35px] rotate-90"/>
            <img src={`http://ddragon.leagueoflegends.com/cdn/13.14.1/img/spell/${spellNames[0]}.png`} alt="Ally Champion Q" className="w-[35px] h-[35px]"/>
        </div> }
        
      </div>
    );
}

export default ChampionMatchupSplash;