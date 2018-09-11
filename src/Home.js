import React from 'react';
import { withLayout } from './search/Layout';
import JokesComponent from './search/JokesComponent';
import Tabs from './Tabs';

export function Home(){
  return (
    <React.Fragment>
      <Tabs />
      <JokesComponent />
    </React.Fragment>
  );
}

export default withLayout("Demo Site")(Home);
