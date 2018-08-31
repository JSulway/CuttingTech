import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './jokes';
import styled from 'styled-components';

const Content=styled.div`
  background: lightgrey;
  height: 50px;
  line-height: 50px;
`;

export class Intro extends Component {
  render(){
    return (
      <Content>
        React and Redux Example.
        Axios used to access JSON data from an API.
        Data returned can be filtered using the search facility.
        Paging is applied to results with next and previous buttons provided.
      </Content>
    );
  }
}

// passing actions which will ensure the search function is injected as a component props
export default connect( state => state.jokes , actions )(Intro);
