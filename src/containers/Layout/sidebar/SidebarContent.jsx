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
          title={'Current Outstandings'}
          icon={'cart'}
          route={'/outstanding'}
          onClick={hideSidebar}
        />
        <SidebarLink
          title={'Payment Dues'}
          icon={'user'}
          route={'/payment/dues'}
          onClick={hideSidebar}
        />
        <SidebarLink
          title={'Payment History'}
          icon={'license'}
          route={'/payment/history'}
          onClick={hideSidebar}
        />

        <SidebarLink
          icon={'layers'}
          title={'Invoices'}
          route={'/invoices'}
          onClick={hideSidebar}
        />

        <SidebarLink
          title={'Issues'}
          icon={'layers'}
          route={'/issues'}
          onClick={hideSidebar}
        />

        <SidebarLink
          icon={'store'}
          title={'Wallet'}
          route={'/wallet'}
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
