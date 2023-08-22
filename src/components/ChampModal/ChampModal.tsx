import React from 'react';
import Modal from 'react-modal';

function ChampModal({ isOpen, onRequestClose, championData }: {isOpen: boolean; onRequestClose: () => void; championData: any;}) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      {championData && (
        <div>
          <img
            src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championData.id}_0.jpg`}
            alt={`${championData.id} splashart`}
          />
          <h1>{championData.name}</h1>
          <p>{championData.title.toUpperCase()}</p>
        </div>
      )}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default ChampModal;
