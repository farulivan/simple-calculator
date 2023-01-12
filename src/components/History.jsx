import { useSelector } from 'react-redux';
import './History.scss';

const History = () => {
  const history = useSelector(state => state.history);

  return (
    <div className={history.length > 0 ? "history" : "history center"}>
      {history.length > 0 ? (
        history.map((item, index) => (
          <p key={index} className="history__item">
            {item[0]} =<span> {item[1]}</span>
          </p>
        ))
      ) : (
        <p className="history__notfound">You have no calculation history</p>
      )}
    </div>
  );
};

export default History;
