import React from "react";
import PropTypes from "prop-types";

// Styles
import './styles.scss'

// Constants
import { INPUT_TYPE, ICON_LINKS } from "../../../utils/constants";
import { DEFAULT_INPUT_CARD_DATA } from "./constants";

const InputCard = ({
  label = DEFAULT_INPUT_CARD_DATA.label,
  placeholder = DEFAULT_INPUT_CARD_DATA.placeholder,
  type = DEFAULT_INPUT_CARD_DATA.type,
  icon = DEFAULT_INPUT_CARD_DATA.icon,
  footerText = DEFAULT_INPUT_CARD_DATA.footerText,
  cta = DEFAULT_INPUT_CARD_DATA.cta
}) => {
  return (
    <div className="input-card">
      <div className="header-cta">
        <img src={icon} alt="input icon" />
        {cta ? <span>Save</span> : <input type={INPUT_TYPE.CHECKBOX} />}
      </div>

      <p className={`input-label ${type !== INPUT_TYPE.EMAIL ? "small-text" : ""}`}>
        {label}
      </p>

      {type !== INPUT_TYPE.EMAIL ? (
        <span className="input-wrap">
          {placeholder}{" "}
          <img src={ICON_LINKS.caretDownIcon} alt="dropdown arrow" />
        </span>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="input-field"
        />
      )}

      {footerText && <p className="input-card-footer-text">{footerText}</p>}
    </div>
  );
};

InputCard.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.string,
  footerText: PropTypes.string,
  cta: PropTypes.bool,
};

export default InputCard;