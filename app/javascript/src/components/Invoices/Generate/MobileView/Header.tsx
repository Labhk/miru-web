import React from "react";

import { ArrowLeftIcon, SettingIcon } from "miruIcons";
import { useNavigate } from "react-router-dom";
import { Button } from "StyledComponents";

import { sections } from "./utils";

const Header = ({ activeSection, setActiveSection }) => {
  const showBackButton = true;
  const showSettingsButton = !activeSection === sections.addLineItem;
  const navigate = useNavigate();
  const handleBackAction = () => {
    if (activeSection == sections.generateInvoice) {
      navigate("/invoices");
    } else {
      setActiveSection(sections.generateInvoice);
    }
  };

  return (
    <div className="flex h-12 items-center justify-between bg-miru-han-purple-1000 px-3 text-white">
      {showBackButton && (
        <Button style="ternary" onClick={handleBackAction}>
          <ArrowLeftIcon className="text-white" size={16} weight="bold" />
        </Button>
      )}
      <span className="w-full text-center text-base font-medium leading-5">
        {activeSection.label}
      </span>
      {showSettingsButton && (
        <Button style="ternary">
          <SettingIcon className="text-white" size={16} weight="bold" />
        </Button>
      )}
    </div>
  );
};

export default Header;