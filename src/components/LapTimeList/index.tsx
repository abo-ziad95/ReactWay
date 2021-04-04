import React, {FC} from 'react';
import LapTime from "../LapTime";
import './Styles.css';

interface IProp {
  timeList: string[],
}

const LapTimeList: FC<IProp> = ({timeList = []}) => {
    return (
      <div className="listWrap">
          <div className="listTitle">
            Lap Time
          </div>
            {
              timeList.map( (time, index) => <LapTime key={ index } lap={ time }  />)
            }
      </div>
    );
}

export default LapTimeList;
