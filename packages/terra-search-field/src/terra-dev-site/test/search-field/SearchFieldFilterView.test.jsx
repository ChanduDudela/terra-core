import React from 'react';
import SearchFieldFilterView from '../../../SearchFieldFilterView';

function SearchFieldFilterViewTest() {
  return (
    <SearchFieldFilterView variant="persistent" >
      <SearchFieldFilterView.OptGroup label="Colors">
        <SearchFieldFilterView.Option value="red" display="Red" key={'red'} />
        <SearchFieldFilterView.Option value="green" display="Green" key={'green'} />
        <SearchFieldFilterView.Option value="blue" display="Blue" key={'blue'} />
      </SearchFieldFilterView.OptGroup>
      <SearchFieldFilterView.OptGroup label="Animals">
        <SearchFieldFilterView.Option value="panda" display="Panda" key={'panda'} />
        <SearchFieldFilterView.Option value="tiger" display="Tiger" key={'tiger'} />
        <SearchFieldFilterView.Option value="dolphin" display="Dolphin" key={'dolphin'} />
      </SearchFieldFilterView.OptGroup>
    </SearchFieldFilterView>
  );
}
export default () => <SearchFieldFilterViewTest />;