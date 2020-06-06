import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeProps, RTLProps } from '../../shared/prop-types/ReducerProps';

class MainWrapper extends PureComponent {
  static propTypes = {
    theme: ThemeProps.isRequired,
    children: PropTypes.element.isRequired
  };

  render() {
    const { theme, children } = this.props;

    const wrapperClass = classNames({
      wrapper: true
    });

    const direction = 'ltr';

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
    theme: state.theme
  };
};

export default withRouter(connect(mapStateToProps)(MainWrapper));
