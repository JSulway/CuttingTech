import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { Intro as SearchIntro } from './search/Intro';
import { Intro as KanbanIntro } from './kanban/Intro';
import { Intro as ServiceIntro } from './demoDBDirectViaService/Intro';

import Kanban from './kanban/Kanban';
import Service from './demoDBDirectViaService/Service';
import Search from './search/Search';

// for passing and as a result ensuring search function is injected as a component props
import { actions as searchActions } from './search/SearchActions';

// filters for the search action
import Filters from './search/Filters';

const Content=styled.div`
  display: inline-flex;
  width 100%;
`;

const ComponentArea = styled.div`
  padding: 2rem;
  background-color: #222;
  width: 100%;
  height: 100%;
`;

const SearchComponentArea = styled.div`
  padding: 2rem;
  background-color: #222;
  width: 50%;
  height: 100%;
`;

export class MainComponent extends Component {

  render(){
    if(this.props.main.currentTab === "search"){
      return (
        <div>
            <SearchIntro/>
            <Content>
              <SearchComponentArea>
                <Search />
              </SearchComponentArea>
              <Filters />
            </Content>
        </div>
      );
    }else if(this.props.main.currentTab === "kanban"){
      return (
        <div>
          <KanbanIntro/>
          <Content>
            <ComponentArea>
              <Kanban />
            </ComponentArea>
          </Content>
        </div>
      );
    }else if(this.props.main.currentTab === "Node.js WS to SQLDB"){
      return (
        <div>
          <ServiceIntro/>
          <Content>
            <ComponentArea>
              <Service />
            </ComponentArea>
          </Content>
        </div>
      );
    }
  }
}

// passing actions which will ensure the search function is injected as a component props
export default connect( state => state, searchActions )(MainComponent);
