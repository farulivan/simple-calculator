import PropTypes from 'prop-types';
import './Screen.scss';

const Screen = ({ value, history }) => {
  return (
    <div className="screen">
      <p className="screen__history">{history}</p>
      <div className="screen__main">
        <p className="screen__equal">=</p>
        <p className="screen__answer">{value}</p>
      </div>
    </div>
  );
};

Screen.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  history: PropTypes.string.isRequired,
};

export default Screen;
