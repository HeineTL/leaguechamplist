import { useState, useEffect } from "react";
import ChampCard from "../ChampCard/ChampCard";
import css from "./ChampCardList.module.css";

function ChampCardList() {
  const [champions, setChampions] = useState<string[]>([]);

  useEffect(() => {
    const getChampions = async () => {
      try {
        const response = await fetch('http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json');
        const data = await response.json();
        const championData = data.data;

        const namesArray = Object.keys(championData);
        setChampions(namesArray);
      } catch (error) {
        console.error('Error fetching champions:', error);
      }
    };

    getChampions();
  }, []);

  return (
    <div className={css.champList}>
        {champions.map(championName => (
          <ChampCard champ={championName}/>
        ))}
    </div>
  );
}

export default ChampCardList;
