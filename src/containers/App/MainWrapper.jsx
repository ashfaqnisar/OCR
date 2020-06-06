import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';

const MainWrapper = props => {
  const theme = useSelector(state => state.theme);
  const { uid } = useSelector(state => state.firebase.auth);
  const { children } = props;
  const history = useHistory();

  const wrapperClass = classNames({
    wrapper: true
  });

  const direction = 'ltr';

  return (
    <div className={`${theme.className} ${direction}-support`} dir={direction}>
      <div className={wrapperClass}>{children}</div>
    </div>
  );
};

export default MainWrapper;
