import './App.css';
import CanvasModule from './components/CanvasModule';
import PredictionModule from './components/PredictionModule';
import { useState } from 'react';

function App() {

  const [prediction, setPrediction] = useState({ digit: null, confidence: null });
  const handlePrediction = (data) => {
    setPrediction(data);
  };

  return (
    <div className="App">
      <h1 className='App-header' style={{ margin: 0 }}>Digit Identification using ML</h1>
      <p>Draw a digit of your choice from 0 - 9. Let our machine learning model predict what number you drew.</p>
      <div className='functional-area'>
        <CanvasModule onPrediction={handlePrediction}></CanvasModule>
        <PredictionModule digit={prediction.digit} confidence={prediction.confidence}></PredictionModule>
      </div>
    </div>
  );
}

export default App;
