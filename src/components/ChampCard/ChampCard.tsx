import { useEffect, useState } from "react";
import css from "./ChampCard.module.css";

//http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json
//http://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion/Aatrox.json

function ChampCard({champ, openModal}: {champ: string; openModal: (championData: any) => void;}) {
  let champName = champ;

  const [championData, setChampionData] = useState<any>(null);

  useEffect(() => {
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion/${champName}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setChampionData(data.data[`${champName}`] as any);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
      });
  }, []);

  return (
    <div className={css.card} onClick={() => openModal(championData)}>
      {championData ? (
        <>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champName}_0.jpg`}
            alt={`${champName} splashart`}
          />
          <h1>{championData.name}</h1>
          <p>{championData.title.toUpperCase()}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default ChampCard;
