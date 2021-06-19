import { useState } from 'react';
export default function Topbar({
  setChoice,
  setAction,
  setImgChoice,
  setPartitionSize,
}) {
  const [currChoiceId, setCurrentChoiceId] = useState('');

  const onButtonClick = (newChoice, newId) => {
    if (currChoiceId && currChoiceId !== newId) {
      document.getElementById(currChoiceId).textContent = currChoiceId;
    }
    setChoice(newChoice);
    setCurrentChoiceId(newId);
    document.getElementById(newId).textContent = newChoice;
    setAction('');
  };

  const onClickAction = (action) => {
    setAction(action);
  };

  const onChangeImgHandler = (e) => {
    setImgChoice(e.target.value);
  };

  const onChangePartition = (e) => {
    setPartitionSize(parseInt(e.target.value));
  };

  return (
    <div>
      <div className="topBarContainer">
        <div className="imageChoice">
          <label htmlFor="img">Choose a Image</label>
          <select name="img" id="img" onChange={onChangeImgHandler}>
            <option value="Cal">Cal Pennant</option>
            <option value="Diagonal">Diagonal</option>
            <option value="Bear">Cal Bear</option>
            <option value="RM">Rick and Morty</option>
            <option value="NN">Neural Network</option>
          </select>
        </div>

        <div className="partitionChoice">
          <label htmlFor="partition">Partition Size</label>
          <select name="partition" id="partition" onChange={onChangePartition}>
            <option value="8">Small Size</option>
            <option value="4">Medium Size</option>
            <option value="2">Large Size</option>
          </select>
        </div>

        <div className="algo">
          <div
            className="algoBtn"
            id="BUB"
            onClick={() => onButtonClick('BUBBLE SORT', 'BUB')}
          >
            BUB
          </div>
          <div
            className="algoBtn"
            id="SEL"
            onClick={() => onButtonClick('SELECTION SORT', 'SEL')}
          >
            SEL
          </div>
          <div
            className="algoBtn"
            id="INS"
            onClick={() => onButtonClick('INSERTION SORT', 'INS')}
          >
            INS
          </div>
          <div
            className="algoBtn"
            id="MER"
            onClick={() => onButtonClick('MERGE SORT', 'MER')}
          >
            MER
          </div>
          <div
            className="algoBtn"
            id="QUI"
            onClick={() => onButtonClick('QUICK SORT', 'QUI')}
          >
            QUI
          </div>
          <div
            className="algoBtn"
            id="HEP"
            onClick={() => onButtonClick('HEAP SORT', 'HEP')}
          >
            HEP
          </div>
          <div
            className="algoBtn"
            id="COU"
            onClick={() => onButtonClick('COUNTING SORT', 'COU')}
          >
            COU
          </div>
          <div
            className="algoBtn"
            id="RAD"
            onClick={() => onButtonClick('RADIX SORT', 'RAD')}
          >
            RAD
          </div>
        </div>
        <div className="actionBtn">
          <button
            className="btn"
            id="sort"
            onClick={() => onClickAction('SORT')}
          >
            Shuffle and Sort!
          </button>
        </div>
      </div>
      <div className="source">
        <p>Image Source:</p>
        <a
          href="https://www.pngkit.com/view/u2q8y3o0t4t4a9e6_uc-berkeley-pennant-uc-berkeley-pennant-2017/"
          target="_blank"
        >
          Cal Pennant
        </a>
        <br />
        <a
          href="http://clipart-library.com/clipart/berkeley-cliparts_10.htm"
          target="_blank"
        >
          Cal Bear
        </a>
        <br />
        <a href="https://pngio.com/images/png-a2165098.html" target="_blank">
          Rick And Morty
        </a>
        <br />
        <a href="http://alexlenail.me/NN-SVG/index.html" target="_blank">
          Neural Network
        </a>
        <br />
        <p>Diagonal Line: I drew it.</p>
      </div>
    </div>
  );
}
