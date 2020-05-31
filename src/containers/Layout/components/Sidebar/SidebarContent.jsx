import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';

const SidebarContent = props => {
  const { onClick, signOut } = props;

  const hideSidebar = () => {
    onClick();
  };

  return (
    <div className="sidebar__content">
      <ul className="sidebar__block">
        <SidebarLink
          title={'Home'}
          icon={'home'}
          route={'/home'}
          onClick={hideSidebar}
        />

        <SidebarLink
          title={'Forms'}
          icon={'file-empty'}
          route={'/forms'}
          onClick={hideSidebar}
        />
        <SidebarLink
          title={'Settings'}
          icon={'cog'}
          route={'/settings'}
          onClick={hideSidebar}
        />
      </ul>

      <ul className="sidebar__block">
        <SidebarLink
          title={'Log Out'}
          route={'/login'}
          icon="exit"
          onClick={signOut}
        />
      </ul>
    </div>
  );
};

export default SidebarContent;
