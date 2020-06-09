import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';

import {
  changeMobileSidebarVisibility,
  changeSidebarVisibility
} from '../../redux/actions/sidebarActions';

const Layout = () => {
  const dispatch = useDispatch();

  const sidebar = useSelector(state => state.sidebar);
  const changeSidebar = () => {
    dispatch(changeSidebarVisibility());
  };

  const changeMobileSidebar = () => {
    dispatch(changeMobileSidebarVisibility());
  };

  const layoutClass = classNames({
    layout: true,
    'layout--collapse': sidebar.collapse
  });

  return (
    <div className={layoutClass}>
      <Topbar
        changeMobileSidebarVisibility={changeMobileSidebar}
        changeSidebarVisibility={changeSidebar}
      />

      <Sidebar
        sidebar={sidebar}
        changeMobileSidebarVisibility={changeMobileSidebar}
      />
    </div>
  );
};

export default Layout;
