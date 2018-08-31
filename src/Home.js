import React from 'react';
import { withLayout } from './Layout';
import Intro from './Intro';
import JokesComponent from './JokesComponent';

export function Home(){
  return (
    <React.Fragment>
      <Intro />
      <JokesComponent />
    </React.Fragment>
  );
}

export default withLayout("Demo Site")(Home);
