import React, { Component } from 'react';

//components
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

//Data
import items from '../data/menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="CodeJobs" items={items}/>
        <Content/>
        <Footer copyright="&copy; codeJobs 2019"/>
      </div>
    );
  }
}

export default App;
