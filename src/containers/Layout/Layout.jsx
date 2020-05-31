import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Topbar, Sidebar } from './components';

import {
  changeMobileSidebarVisibility,
  changeSidebarVisibility
} from '../../redux/actions/sidebarActions';

import {
  SidebarProps,
  ThemeProps,
  UserProps
} from '../../shared/prop-types/ReducerProps';

class Layout extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    sidebar: SidebarProps.isRequired,
    theme: ThemeProps.isRequired,
    user: UserProps.isRequired
  };

  changeSidebarVisibility = () => {
    const { dispatch } = this.props;
    dispatch(changeSidebarVisibility());
  };

  changeMobileSidebarVisibility = () => {
    const { dispatch } = this.props;
    dispatch(changeMobileSidebarVisibility());
  };

  render() {
    const { sidebar, user } = this.props;
    const layoutClass = classNames({
      layout: true,
      'layout--collapse': sidebar.collapse
    });
    if (!user.uid) {
      return <Redirect to={'/login'} />;
    }
    return (
      <div className={layoutClass}>
        <Topbar
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
          changeSidebarVisibility={this.changeSidebarVisibility}
          user={user}
        />

        <Sidebar
          sidebar={sidebar}
          changeMobileSidebarVisibility={this.changeMobileSidebarVisibility}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(state => ({
    sidebar: state.sidebar,
    theme: state.theme,
    user: state.user.data
  }))(Layout)
);
