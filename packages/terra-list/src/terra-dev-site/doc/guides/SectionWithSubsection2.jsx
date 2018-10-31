import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import List, {
  Item,
  Section,
  Subsection,
  Utils,
} from 'terra-list/lib/List';
import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-section-sub';

const createListItem = itemData => (
  <Item key={itemData.key} isDivided>
    <Placeholder title={itemData.title} style={{ height: '50px' }} />
  </Item>
);

class SectionWithSubsection2 extends React.Component {
  constructor(props) {
    super(props);
    this.createSection = this.createSection.bind(this);
    this.createSections = this.createSections.bind(this);
    this.createSubsection = this.createSubsection.bind(this);
    this.handleSectionSelection = this.handleSectionSelection.bind(this);
    this.state = { collapsedKeys: [] };
  }

  handleSectionSelection(event, metaData) {
    event.preventDefault();

    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));
  }

  createSubsection(subsectionData) {
    return (
      <Subsection
        key={subsectionData.key}
        isCollapsed={this.state.collapsedKeys.indexOf(subsectionData.key) >= 0}
        isCollapsible
        metaData={{ key: subsectionData.key }}
        title={subsectionData.title}
        onSelect={this.handleSectionSelection}
      >
        {subsectionData.childItems.map(childItem => createListItem(childItem))}
      </Subsection>
    );
  }

  createSection(sectionData) {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
      >
        {sectionData.childItems.map(childItem => this.createSubsection(childItem))}
      </Section>
    );
  }

  createSections(data) {
    return data.map(section => this.createSection(section));
  }

  render() {
    const sections = this.createSections(mockData);

    return (
      <List>
        {sections}
      </List>
    );
  }
}

export default SectionWithSubsection2;
