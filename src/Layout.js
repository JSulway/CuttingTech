import React from 'react';
import ErrorBoundary from "./ErrorBoundary";
import { App, AppHeader, Title, AppLogo } from './styles';
import logo from './cuttingtech.jpg';

export default function Layout({ title, renderContent }){
  return (
    <App>
      <AppHeader>
        <div align="left">
          <AppLogo src={logo} alt="logo"/>
          <Title>React and Redux, JSON API, Filtering and Paging</Title>
        </div>
      </AppHeader>
      {renderContent()}
    </App>
  );
}

export function withLayout(title){
  return Component => props => (
    <Layout
      title={title}
      renderContent={() => (
        <ErrorBoundary>
          <Component {...props} />
        </ErrorBoundary>
      )}
    />
  );
}
