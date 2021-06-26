import * as React from 'react';
import clsx from 'clsx';
import {View} from '@fower/taro';

export interface ListDetailProps {
  as?: React.ElementType;
  className?: string;
}

const ListDetail = (props: ListDetailProps): JSX.Element => {
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
        'mx-list-detail'
      )}
    />
  );
};

ListDetail.defaultProps = {
  as: View,
};

export default ListDetail;
