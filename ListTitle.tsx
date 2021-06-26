import * as React from 'react';
import clsx from 'clsx';
import {View} from '@fower/taro';

export interface ListTitleProps {
  as?: React.ElementType;
  className?: string;
}

const ListTitle = (props: ListTitleProps): JSX.Element => {
  const {
    as: Component,
    className,
    ...rest
  } = props;

  return (
    <Component
      {...rest}
      className={clsx(
        className,
        'mx-list-title'
      )}
    />
  );
};

ListTitle.defaultProps = {
  as: View,
};

export default ListTitle;
