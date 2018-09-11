import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './search/jokes';
import styled from 'styled-components';

const TABS = ['search', 'kanban'];

export class Tabs extends Component {

  constructor(props) {
		super(props);
		this.state = { currentTab: 'search' };
	}

  render(){
    const tabs = TABS.map((iteratedTab, i) => {
        const className = iteratedTab===this.props.currentTab ? 'selectedTab' : 'nonselectedTab';
        return (
            <a key={i} className={className} onClick={this.handleTabClick.bind(this, iteratedTab)}>
                {iteratedTab}
            </a>
        );
    });

    return(
        <div className='main-nav'>{tabs}</div>
    );
  }

  handleTabClick(tab) {
      this.props.setTab(tab);
  }
}



// passing actions which will ensure the search function is injected as a component props
export default connect( state => state.jokes , actions )(Tabs);
