import React, { Component } from "react";
import { Button } from "antd";

import { Layout, Menu, Icon } from "antd";
import logo from "./logo.svg";
import "./App.css";
const { Header, Content, Footer, Sider } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              position: "fixed",
              left: 0
            }}
          >
            <div className="logo" />
          </Sider>
          <Layout style={{ marginLeft: 200 }}>
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                style={{ padding: 24, background: "#fff", textAlign: "center" }}
              >
                content goes here
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }} />
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default App;
