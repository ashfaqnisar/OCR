import React from 'react';
import Scrollbar from 'react-smooth-scrollbar';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import SidebarContent from './SidebarContent';
import { SidebarProps } from '../../../../shared/prop-types/ReducerProps';
import firebase from '../../../../config/firebase';
import { useDispatch } from 'react-redux';
import { signOutUser } from '../../../../redux/actions/loginActions';
import { history } from '../../../../redux/store';

const Sidebar = ({
  changeToDark,
  changeToLight,
  changeMobileSidebarVisibility,
  sidebar
}) => {
  const sidebarClass = classNames({
    sidebar: true,
    'sidebar--show': sidebar.show,
    'sidebar--collapse': sidebar.collapse
  });
  const dispatch = useDispatch();

  const firebaseSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch(signOutUser());
        history.push('/login');
      })
      .catch(error => {
        console.log(error.message);
      });
  };

  return (
    <div className={sidebarClass}>
      <button
        className="sidebar__back"
        type="button"
        onClick={changeMobileSidebarVisibility}
      />
      <Scrollbar className="sidebar__scroll scroll">
        <div className="sidebar__wrapper sidebar__wrapper--desktop">
          <SidebarContent
            signOut={() => firebaseSignOut()}
            onClick={() => {}}
            changeToDark={changeToDark}
            changeToLight={changeToLight}
          />
        </div>
        <div className="sidebar__wrapper sidebar__wrapper--mobile">
          <SidebarContent
            onClick={changeMobileSidebarVisibility}
            changeToDark={changeToDark}
            changeToLight={changeToLight}
          />
        </div>
      </Scrollbar>
    </div>
  );
};

Sidebar.propTypes = {
  sidebar: SidebarProps.isRequired,
  // changeToDark: PropTypes.func.isRequired,
  // changeToLight: PropTypes.func.isRequired,
  changeMobileSidebarVisibility: PropTypes.func.isRequired
};

export default Sidebar;
