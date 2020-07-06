import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const MainWrapper = ({ children }) => {
  const theme = useSelector(state => state.theme);
  const auth = useSelector(state => state.firebase.auth);
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
