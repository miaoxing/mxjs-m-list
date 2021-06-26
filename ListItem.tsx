import * as React from 'react';
import clsx from 'clsx';
import {View} from '@fower/taro';
import ListTitle from './ListTitle';
import ListDetail from './ListDetail';
import ListText from './ListText';

export interface ListItemProps {
  as?: React.ElementType;
  className?: string;
  title?: string;
  detail?: string;
  text?: string;
  arrow?: boolean | React.ReactNode;
  /**
   * 是否为描述列表项目
   */
  description?: boolean | 'left';
  children?: React.ReactNode;
}

const ListItem = (props: ListItemProps): JSX.Element => {
  const {
    as: Component,
    className,
    title,
    detail,
    text,
    children,
    description,
    arrow,
    ...rest
  } = props;

  if (detail && text) {
    throw new Error('detail 和 text 只能同时使用一个');
  }

  return (
    <Component
      {...rest}
      className={clsx(
        className,
        'mx-list-item',
        arrow && 'mx-list-has-arrow',
        description && `mx-list-description${description === 'left' ? '-left' : ''}`,
      )}
    >
      {title && <ListTitle>{title}</ListTitle>}
      {text && <ListText>{text}</ListText>}

      {/* @experimental 可能调整子节点位置 */}
      {children}

      {detail && <ListDetail>{detail}</ListDetail>}
      {arrow && <View className="mx-list-arrow">{arrow}</View>}
    </Component>
  );
};

ListItem.defaultProps = {
  as: View,
};

export default ListItem;
