import React from "react";

// Styles
import './styles.scss'

// Constants
import { ICON_LINKS } from "../../utils/constants";

const InputCard = ({
  label,
  placeholder,
  type = "text",
  icon,
  footerText,
  cta,
}) => {
  return (
    <div className="input-card">
      <div className="header-cta">
        <img src={icon} alt="bell icon" />
        {cta?<span>Save</span>:<input type="checkbox"  />}
      </div>
      <p className={`input-label ${type !=="email"?"small-text":""}`}>{label}</p>
      {type !=="email" ? <span className="input-wrap">{placeholder} <img src={ICON_LINKS.bellFilledIcon} alt="triangle down" /></span> : <input type={type} placeholder={placeholder} className="input-field" />}
      
      {footerText && <p className="input-card-footer-text">{footerText}</p>}
    </div>
  );
};

export default InputCard;
