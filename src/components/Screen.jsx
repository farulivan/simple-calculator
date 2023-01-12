import PropTypes from 'prop-types';
import './Screen.scss';

const Screen = ({ value, detail }) => {
  return (
    <div className="screen">
      <p className="screen__detail">{detail}</p>
      <p className="screen__equal">=</p>
      <div className="screen__main">
        <p
          className={
            value.toString().length < 10
              ? 'screen__answer '
              : 'screen__answer smaller'
          }
        >
          {value}
        </p>
      </div>
    </div>
  );
};

Screen.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  detail: PropTypes.string.isRequired,
};

export default Screen;
