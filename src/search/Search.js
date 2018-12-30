import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from "./SearchActions";
import { Form, Row, Input, Button } from './styles';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const SearchItem = styled.div`
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

export class Search extends Component {

    componentDidMount(){
      const { limit, page, search, filters: { term } } = this.props.results;
      this.props.search(term, page, limit);
    }

    componentWillReceiveProps(nextProps){
      const { limit, page, search, filters: { term } } = nextProps.results;
      if(page !== actions.page || term !== actions.filters.term){
        this.props.search(term, page, limit);
      }
    }

    render() {
        const { results } = this.props.results;
        return (
              <div>
              {results.map(j => (
                <SearchItem key={j.id}>
                  {j.joke}
                </SearchItem>
              ))}
              </div>
        );
    }
}

// connect to the redux store and get the state that we need as well as the action creators
export default connect(state => state , actions)(Search);
