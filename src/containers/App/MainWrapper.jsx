import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeProps, RTLProps } from '../../shared/prop-types/ReducerProps';

class MainWrapper extends PureComponent {
  static propTypes = {
    theme: ThemeProps.isRequired,
    rtl: RTLProps.isRequired,
    children: PropTypes.element.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string
    }).isRequired
  };

  render() {
    const { theme, children, rtl, location } = this.props;

    const wrapperClass = classNames({
      wrapper: true
    });

    const direction = location.pathname === '/' ? 'ltr' : rtl.direction;

    return (
      <div
        className={`${theme.className} ${direction}-support`}
        dir={direction}
      >
        <div className={wrapperClass}>{children}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    theme: state.theme,
    rtl: state.rtl
  };
};

export default withRouter(connect(mapStateToProps)(MainWrapper));
