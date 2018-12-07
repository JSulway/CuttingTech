import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './MainActions';
import styled from 'styled-components';

const TABS = ['search', 'kanban','Node.js WS to SQLDB'];

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

export default connect( state => state , actions )(Tabs);
