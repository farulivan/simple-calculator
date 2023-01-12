import { useSelector } from 'react-redux';
import './History.scss';

const History = () => {
  const history = useSelector(state => state.history);

  return (
    <div className="history">
      {history.map((item, index) => (
        <p key={index} className="history__item">
          {item[0]} = 
          <span> {item[1]}</span>
        </p>
      ))}
    </div>
  );
};

export default History;
