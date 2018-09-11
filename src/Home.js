import React from 'react';
import { withLayout } from './search/Layout';
import MainComponent from './MainComponent';
import Tabs from './Tabs';

export function Home(){
  return (
    <React.Fragment>
      <Tabs />
      <MainComponent />
    </React.Fragment>
  );
}

export default withLayout("Demo Site")(Home);
