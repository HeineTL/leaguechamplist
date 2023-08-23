import React from "react";
import Modal from "react-modal";
import css from "./ChampModal.module.css";

function ChampModal({
  isOpen,
  onRequestClose,
  championData,
}: {
  isOpen: boolean;
  onRequestClose: () => void;
  championData: any;
}) {
  const abilitiesArray = ["Q", "W", "E", "R"];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css["modal-custom"]}
      style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.8)" } }}
    >
      {championData && (
        <div className={css.modal}>
          <div
            className={css.modalbg}
            style={{
              backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_0.jpg')`, // Replace with your image URL
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <h1>{championData.name}</h1>
          <h4>{championData.title.toUpperCase()}</h4>

          <table className={css.table}>
            <tr>
              <th>Icon</th>
              <th>Ability</th>
              <th>Name</th>
              <th>Description</th>
            </tr>

            <tr>
              <td>
                <img
                  src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/passive/${championData.passive.image.full}`}
                />
              </td>
              <td>Passive</td>
              <td>{championData.passive.name}</td>
              <td>{championData.passive.description.replace(/<br>/g, " ")}</td>
            </tr>

            {Array.from({ length: 4 }).map((_, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={`http://ddragon.leagueoflegends.com/cdn/13.16.1/img/spell/${championData.spells[index].image.full}`}
                  />
                </td>
                <td>{abilitiesArray[index]}</td>
                <td>{championData.spells[index].name}</td>
                <td>
                  {championData.spells[index].description.replace(/<br>/g, " ")}
                </td>
              </tr>
            ))}
          </table>

          <h3>{championData.name} lore</h3>
          <ul>
            <li>
              <p>{championData.lore}</p>
            </li>
          </ul>

          <h3>How to play {championData.name}</h3>
          <ul>
            {championData.allytips.length != 0 ? (
              championData.allytips.map((tips: any) => (
                <li>
                  <p>{tips}</p>
                </li>
              ))
            ) : (
              <li>
                <p>This character is missing this information!</p>
              </li>
            )}
          </ul>

          <h3>How to play against {championData.name}</h3>
          <ul>
            {championData.enemytips.length != 0 ? (
              championData.enemytips.map((tips: any) => (
                <li>
                  <p>{tips}</p>
                </li>
              ))
            ) : (
              <li>
                <p>This character is missing this information!</p>
              </li>
            )}
          </ul>

          <h3>{championData.name} skins</h3>

          {championData.skins.slice(1).map((skin: any) => (
            <div className={css.skins}>
              <div
                className={css.skinsdiv}
                style={{
                  backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_${skin.num}.jpg')`, // Replace with your image URL
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h3>{skin.name}</h3>
            </div>
          ))}

          {/* <div className={css.skins}>
            <div
              className={css.skinsdiv}
              style={{
                backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_0.jpg')`, // Replace with your image URL
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h3>Brown Goat</h3>
          </div>
          <div className={css.skins}>
            <div
              className={css.skinsdiv}
              style={{
                backgroundImage: `url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_0.jpg')`, // Replace with your image URL
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <h3>Brown Goat</h3>
          </div> */}

          <button className={css.button} onClick={onRequestClose}>
            Close
          </button>
        </div>
      )}
    </Modal>
  );
}

export default ChampModal;
