import React from 'react';
import './App.css';
import CounterContainer from '../containers/CounterContainer';
import AddTodoContainer from '../containers/AddTodoContainer'
import { Button, Layout } from 'antd';
const { Header, Content } = Layout;

const App = () => (
  <div className="App">
    <Layout>
      <br />
      <br />
      <Header>
        <h1>Todo List</h1>
        <AddTodoContainer />
      </Header>
      <br />
      <br />
      <Content>
        <CounterContainer />
      </Content>
    </Layout>
  </div>
);

export default App;
