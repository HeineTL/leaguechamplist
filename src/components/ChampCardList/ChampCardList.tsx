import { useState, useEffect } from "react";
import ChampCard from "../ChampCard/ChampCard";
import css from "./ChampCardList.module.css";
import ChampModal from "../ChampModal/ChampModal";

function ChampCardList({champNameSearch}: {champNameSearch: string}) {
  const [champions, setChampions] = useState<string[]>([]);
  const [selectedChampionData, setSelectedChampionData] = useState<any>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const getChampions = async () => {
      try {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/13.15.1/data/en_US/champion.json');
        const data = await response.json();
        const championData = data.data;

        const namesArray = Object.keys(championData);
        setChampions(namesArray);
      } catch (error) {
        console.error('Error getting champions: ', error);
      }
    };

    getChampions();
  }, []);

  const openModal = (championData: any) => {
    setSelectedChampionData(championData);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedChampionData(null);
    setModalIsOpen(false);
  };

  return (
    <div className={css.champList}>
      {champions
      .filter(championName => championName.toLowerCase().includes(champNameSearch.toLowerCase()) )
      .map(championName => (
        <ChampCard
          key={championName}
          champ={championName}
          openModal={openModal}
        />
      ))}
      <ChampModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        championData={selectedChampionData}
      />
    </div>
  );
}

export default ChampCardList;
