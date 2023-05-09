import React from "react";
import "./LanguageSelector.scss";
const LanguageSelector = ({handleChangeLanguage, handleArrowClick }) => {
  return (
    <div className="language-change-button">
      <select
        onFocus="this.size = 3;"
        onBlur="this.size=0;"
        onChange={handleChangeLanguage}
        onClick={handleArrowClick}
        className="dropdown-button"
      >
        <option selected="selected" value="en" className="language-option choosen-language">
          English
        </option>
        <option className="language-option" value="pl">
          Polski
        </option>
        <option className="language-option" value="de">
          Deutsch
        </option>
      </select>
    </div>
  );
};

export default LanguageSelector;