import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.scss';
import HistoryIcon from '/history.svg';
import Screen from './components/Screen';
import BottomPanel from './components/BottomPanel';

const thousandSeparator = num => {
  const parts = num.toString().split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return parts.join('.');
};

const App = () => {
  const operand = useSelector(state => state.operand);
  const answer = useSelector(state => state.answer);
  const detail = useSelector(state => state.detail);

  const [showHistory, setShowHistory] = useState(false)

  return (
    <div className="App">
      <div className="history-btn">
        <button className="history-btn__item" onClick={() => setShowHistory((prev) => !prev)}>
          <img src={HistoryIcon} alt="history"/>
        </button>
      </div>
      <Screen
        detail={detail}
        value={operand ? thousandSeparator(operand) : thousandSeparator(answer)}
      />
      <BottomPanel showHistory={showHistory}/>
    </div>
  );
};

export default App;
