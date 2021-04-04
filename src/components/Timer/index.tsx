import React, {FC} from 'react';
import './Styles.css';

interface IProp {
  time: string,
}

const Timer: FC<IProp> = ({time  = '00:00:00'}) => {
    return (
      <div className="timer">
        { time }
      </div>
    );
}

export default Timer;
