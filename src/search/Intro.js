import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from './SearchActions';
import styled from 'styled-components';

const Content=styled.div`
  background: lightgrey;
  height: 50px;
  line-height: 50px;
  border: 1px 0px 0px 0px;
  border-style: solid;
  border-color: #222;
`;

export class Intro extends Component {
  render(){
    return (
      <Content>
        Axios used to access JSON data from an external API.
        Data response returned can be filtered using the search facility.
        Paging is applied to results with next and previous buttons provided.
      </Content>
    );
  }
}

// passing actions which will ensure the search function is injected as a component props
export default connect( state => state.results , actions )(Intro);
