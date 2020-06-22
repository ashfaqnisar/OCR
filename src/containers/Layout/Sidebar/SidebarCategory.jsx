import React, { useState } from 'react';
import { Collapse } from '@material-ui/core';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SidebarCategory = props => {
  const [collapse, setCollapse] = useState(false);

  const toggle = () => {
    setCollapse(!collapse);
  };

  const { title, icon, isNew, children } = props;

  const categoryClass = classNames({
    'sidebar__category-wrap': true,
    'sidebar__category-wrap--open': collapse,
    'sidebar__link sidebar__category': true
  });

  return (
    <div>
      <button className={categoryClass} type="button" onClick={toggle}>
        {icon ? <span className={`sidebar__link-icon lnr lnr-${icon}`} /> : ''}
        <p className="sidebar__link-title">
          {title}
          {isNew && <span className="sidebar__category-new" />}
        </p>
        <span className="sidebar__category-icon lnr lnr-chevron-right" />
      </button>
      <Collapse in={collapse} className="sidebar__submenu-wrap">
        <ul className="sidebar__submenu">
          <div>{children}</div>
        </ul>
      </Collapse>
    </div>
  );
};

SidebarCategory.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  isNew: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.element).isRequired
};

SidebarCategory.defaultProps = {
  icon: '',
  isNew: false
};
