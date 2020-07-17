import React from 'react';

import { StatusBar } from 'react-native';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#128c7e" />
    <Header />
    <Dashboard />
  </>
);

export default App;
