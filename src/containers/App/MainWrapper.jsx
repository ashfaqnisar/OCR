import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import { isLoaded, isEmpty } from 'react-redux-firebase';

const MainWrapper = props => {
  const theme = useSelector(state => state.theme);
  const auth = useSelector(state => state.firebase.auth);
  const { children } = props;
  const history = useHistory();

  const wrapperClass = classNames({
    wrapper: true
  });

  if (isLoaded(auth) && !isEmpty(auth)) {
    history.push('/home');
  }

  const direction = 'ltr';

  return (
    <div className={`${theme.className} ${direction}-support`} dir={direction}>
      <div className={wrapperClass}>{children}</div>
    </div>
  );
};

export default MainWrapper;
