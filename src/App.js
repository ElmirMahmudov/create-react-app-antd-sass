import React, { Component } from 'react';
import Login from './containers/Login/Login';
import { Layout } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Login/>
        </Layout>
      </div>
    );
  }
}

export default App;
