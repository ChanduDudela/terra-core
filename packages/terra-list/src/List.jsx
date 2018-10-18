import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './List.module.scss';
import Item from './ListItem';
import Section from './ListSection';
import Utils from './ListUtils';
// test commit.
const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children list items passed to the component.
   */
  children: PropTypes.node,
  /**
   * Function callback for the ref of the ul.
   */
  refCallback: PropTypes.func,
};

const defaultProps = {
  children: [],
};

const List = ({
  children,
  refCallback,
  ...customProps
}) => {
  const listClassNames = cx([
    'list',
    customProps.className,
  ]);

  return (
    <ul {...customProps} className={listClassNames} ref={refCallback}>
      {children}
    </ul>
  );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
export { Item, Section, Utils };
