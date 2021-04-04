import React, {FC} from 'react';
import "./Styles.css"

interface IProp {
  label: string,
  onClick: () => void
}

const Button: FC<IProp> = ({ label, onClick }) => {
  return (
    <button className="button" onClick={onClick}>{label}</button>
  )
}

export default Button;
