import './App.css';
import Topbar from './components/Topbar';
import Sketch from './components/Sketch';
import { useState } from 'react';

function App() {
  const [choice, setChoice] = useState('');
  const [action, setAction] = useState('');
  const [imgChoice, setImgChoice] = useState('Cal');
  const [partitionSize, setPartitionSize] = useState(8);
  return (
    <div className="App">
      <Topbar
        setChoice={setChoice}
        setAction={setAction}
        setImgChoice={setImgChoice}
        setPartitionSize={setPartitionSize}
      />
      <Sketch
        choice={choice}
        action={action}
        imgChoice={imgChoice}
        partitionSize={partitionSize}
      />
    </div>
  );
}

export default App;
