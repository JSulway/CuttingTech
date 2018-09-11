import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { actions } from './search/jokes';
import Filters from './search/Filters';
import Intro from './search/Intro';

const Content=styled.div`
  display: inline-flex;
  width 100%;
`;

const JokeList = styled.div`
  padding: 2rem;
  background-color: #222;
  width: 50%;
  height: 100%;
`;

const Joke = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 2rem 1rem;
  background-color: white;
  border: 1px solid darkgray;

  &:hover {
    background-color:forestgreen;
    color: white;
  }
`;

const TABS = ['search', 'kanban'];

export class MainComponent extends Component {

  componentDidMount(){
    const { limit, page, search, filters: { term } } = this.props;
    search(term, page, limit);
  }

  componentWillReceiveProps(nextProps){
    const { limit, page, search, filters: { term } } = nextProps;
    if(page !== this.props.page || term !== this.props.filters.term){
      search(term, page, limit);
    }
  }

  render(){
    const { results } = this.props;

    if(this.props.currentTab === "search"){
      return (
        <div>
            <Intro/>
            <Content>
              <JokeList>
                {results.map(j => (
                  <Joke key={j.id}>
                    {j.joke}
                  </Joke>
                ))}
              </JokeList>
              <Filters />
            </Content>
        </div>
      );
    }else{
      return (
        <Content>
          kanban board component
        </Content>
      );
    }
  }
}

// passing actions which will ensure the search function is injected as a component props
export default connect( state => state.jokes , actions )(MainComponent);
