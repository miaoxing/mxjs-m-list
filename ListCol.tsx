import * as React from 'react';
import clsx from 'clsx';
import {View} from '@fower/taro';

export interface ListColProps {
  as?: React.ElementType;
  className?: string;
}

const ListCol = (props: ListColProps): JSX.Element => {
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
        'mx-list-col'
      )}
    />
  );
};

ListCol.defaultProps = {
  as: View,
};

export default ListCol;
