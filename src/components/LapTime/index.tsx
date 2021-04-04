import React, {FC} from 'react';
import './Styles.css';

interface IProp {
  lap: string,
}

const LapTime: FC<IProp>  = ({lap= ''}) => <div className="lab">{ lap }</div>;

export default LapTime;
