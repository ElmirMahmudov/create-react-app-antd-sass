import React, { Component } from 'react';
import { Layout, Row, Col, Button } from 'antd';

const { Header, Footer, Content } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          Hello World!!!
        </Layout>
      </div>
    );
  }
}

export default App;
