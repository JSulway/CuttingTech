import React, { Component } from 'react';
import { connect } from 'react-redux';  // Adds connect to the list of imports
import { getPlanets } from './ServiceActions';
import styled from 'styled-components';

const ServiceItem = styled.div`
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

export class Service extends Component {

  componentDidMount() {
    this.props.dispatch(getPlanets());  // Dispatches the fetchTasks action from componentDidMount
  }

  // The onCreateTask handler is passed to TasksPage as a simple callback prop
  render() {
    return (
      <div className="main-content">
        {this.props.planets.planets.map(j => (
                  <ServiceItem key={j.id}>
                  <table>
                    <tr>
                      <td>
                        Plant Name: {j.PLANET_NAME}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Class: {j.CLASS_TYPE}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Climate: {j.CLIMATE}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Notes: {j.NOTES}
                      </td>
                    </tr>
                  </table>
                  </ServiceItem>
                ))}
      </div>
    );
  }
}

function mapStateToProps(state) {     // The state argument is the entire contents of the Redux store, specifically the result of calling getState on the store instance
  return {
    planets: state.planets    // The return value of mapStateToProps is passed into the App component as props, which is why render can reference this.props.tasks
  }
}

export default connect( mapStateToProps )(Service);
