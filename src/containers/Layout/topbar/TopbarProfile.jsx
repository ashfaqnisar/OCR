import React, { PureComponent } from 'react';
import DownIcon from 'mdi-react/ChevronDownIcon';
import { Collapse } from 'reactstrap';
import TopbarMenuLink from './TopbarMenuLink';
import { UserProps } from '../../../shared/prop-types/ReducerProps';
import { hookAuth0 } from '../../../shared/components/auth/withAuth0';

const Ava = `${process.env.PUBLIC_URL}/img/ava.png`;

class TopbarProfile extends PureComponent {
  static propTypes = {
    user: UserProps.isRequired
  };

  state = {
    collapse: false
  };

  toggle = () => {
    this.setState(prevState => ({ collapse: !prevState.collapse }));
  };

  logout = () => {
    localStorage.removeItem('esocr');
  };

  render() {
    const { user } = this.props;
    const { collapse } = this.state;

    return (
      <>
        <div className="topbar__profile">
          <button
            className="topbar__avatar"
            type="button"
            onClick={this.toggle}
          >
            <img
              className="topbar__avatar-img"
              src={user.avatar || Ava}
              alt="avatar"
            />
            <p className="topbar__avatar-name">
              {user.name ? user.name : 'Loading....'}
            </p>
            <DownIcon className="topbar__icon" />
          </button>
          {collapse && (
            <button
              className="topbar__back"
              type="button"
              onClick={this.toggle}
            />
          )}
          <Collapse isOpen={collapse} className="topbar__menu-wrap">
            <div className="topbar__menu">
              <TopbarMenuLink
                title="Account Settings"
                icon="cog"
                path="#"
                onClick={this.toggle}
              />

              <TopbarMenuLink
                title="Log Out"
                icon="exit"
                path="/login"
                onClick={this.logout}
              />
            </div>
          </Collapse>
        </div>
      </>
    );
  }
}

export default hookAuth0(TopbarProfile);
