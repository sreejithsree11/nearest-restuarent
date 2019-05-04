import React, { Component } from 'react';
import './App.css';
import { Layout,Textfield, Drawer, Header, Navigation } from 'react-mdl';
import Main from './components/main';

// minified version is also included
import 'react-toastify/dist/ReactToastify.min.css';
class App extends Component {
  render() {
    return (
      <div>
        <Layout fixedHeader>
            <Header 
              className = "fixed-header"
              title={<span><span style={{ color: '#ddd' }}></span><strong>Nearest Restaurant</strong></span>}>
              <Navigation>
                  <a href="/">Home</a>
                </Navigation>
              <Textfield
                value=""
                onChange={() => {}}
                label="Search"
                expandable
                expandableIcon="search"
              />
                
            </Header>
            <Drawer title="Nearest Restaurant">
                <Navigation>
                  <a href="/">Home</a>
                </Navigation>
            </Drawer>
        </Layout>
        <div style={{height: '90px'}} ></div>
        
        <Main />
    </div>
    );
  }
}

export default App;
