import React from 'react';
import { FixedSizeList as List } from 'react-window';

export const VirtualizedMenuList = props => {
  const { options, children, maxHeight, getValue } = props;
  const height = 35;               // altura de cada item (px)
  const itemCount = children.length;
  const initialOffset = (() => {
    const [value] = getValue();
    const index = options.findIndex(opt => opt.value === value);
    return index > 0 ? index * height : 0;
  })();

  return (
    <List
      height={Math.min(maxHeight, itemCount * height)}
      itemCount={itemCount}
      itemSize={height}
      initialScrollOffset={initialOffset}
    >
      {({ index, style }) => (
        <div style={style}>
          {children[index]}
        </div>
      )}
    </List>
  );
};