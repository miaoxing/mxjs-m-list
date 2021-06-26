import * as React from 'react';
import clsx from 'clsx';
import {View} from '@fower/taro';

export interface ListTextProps {
  as?: React.ElementType;
  className?: string;
}

const ListText = (props: ListTextProps): JSX.Element => {
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
        'mx-list-text'
      )}
    />
  );
};

ListText.defaultProps = {
  as: View,
};

export default ListText;
