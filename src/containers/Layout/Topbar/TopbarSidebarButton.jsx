import React from 'react';
import MenuIcon from '@material-ui/icons/MenuRounded';

const TopbarSidebarButton = props => {
  const { changeMobileSidebarVisibility, changeSidebarVisibility } = props;

  return (
    <div>
      <button
        className="topbar__button topbar__button--desktop"
        type="button"
        onClick={changeSidebarVisibility}
      >
        <MenuIcon className="topbar__button-icon" />
      </button>
      <button
        className="topbar__button topbar__button--mobile"
        type="button"
        onClick={changeMobileSidebarVisibility}
      >
        <MenuIcon className="topbar__button-icon" />
      </button>
    </div>
  );
};

export default TopbarSidebarButton;
