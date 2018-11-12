import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  Item,
} from 'terra-list/lib/List';

const ListItemTest = () => (
  <List>
    <Item
      key="default"
    >
      <p>test default</p>
    </Item>
    <Item
      key="chevron"
      hasChevron
    >
      <p>test chevron</p>
    </Item>
    <Item
      key="selectable"
      isSelectable
      id="selectable-item"
    >
      <p>test selectable</p>
    </Item>
    <Item
      key="selected"
      isSelectable
      isSelected
    >
      <p>test selected</p>
    </Item>
    <Item
      key="divided"
      isDivided
    >
      <p>test divided</p>
    </Item>
  </List>
);

export default ListItemTest;