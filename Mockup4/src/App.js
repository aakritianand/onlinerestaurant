import React, { Component } from 'react';
import './AppContent.css';
import Module1 from './Module1/Module1';
import Module2 from './Module2/Module2';
import Module3 from './Module3/Module3';
import Module4 from './Module4/Module4';
import Module5 from './Module5/Module5';
import Module6 from './Module6/Module6';
import Header from './header/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Content6/>
      
    </div>
  );
}
class Content1 extends React.Component {
  render() {
    return (
      <Module1/>
    );
  }
}
class Content2 extends React.Component {
  render() {
    return (
      <Module2/>
   );
  }
}
class Content3 extends React.Component {
  render() {
    return (
      <Module3/>
   );
  }
} 
class Content4 extends React.Component {
  render() {
    return (
      <Module4/>
   );
  }
}
class Content5 extends React.Component {
  render() {
    return (
      <Module5/>
   );
  }
}
class Content6 extends React.Component {
  render() {
    return (
      <Module6/>
   );
  }
}

export default App;
