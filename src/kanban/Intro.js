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
        Kanban board actively used for this sites development. Kanban state on server is held in a flat file and maintained via
        GET, POST, PUT and DELETE JSON requests. Add, edit, change status and remove tasks from the board.
      </Content>
    );
  }
}

// passing actions which will ensure the search function is injected as a component props
export default connect()(Intro);
