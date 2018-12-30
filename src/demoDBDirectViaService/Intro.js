import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        Axios used to access JSON data from a Node Web Service also running locally. The service performs a SQL query against SQL DB.
      </Content>
    );
  }
}

export default connect()(Intro);
