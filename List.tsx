import * as React from 'react';
import clsx from 'clsx';
import {View} from '@fower/taro';

export interface ListProps {
  as?: React.ElementType;
  className?: string;

  /**
   * 紧凑列表
   */
  size?: '' | 'sm';

  /**
   * 无边框列表
   */
  borderless?: boolean;
}

const List = (props: ListProps): JSX.Element => {
  const {
    as: Component,
    className,
    size,
    borderless,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
      className={clsx(
        className,
        'mx-list',
        size === 'sm' && 'mx-list-sm',
        borderless && 'mx-list-borderless',
      )}
    />
  );
};

List.defaultProps = {
  as: View,
};

export default List;
