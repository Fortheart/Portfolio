import React from 'react';

import './App.css';

import Header from './components/header';
import LandingPage from './components/landingPage';
import Main from './components/main';
import Footer from './components/footer';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      english: true
    })
  }
  selectLanguage = () => {
    this.setState({
      english: !this.state.english
    })

  }
  render() {
    return (
      <div className="App">
        <Header english={this.state.english} handleLanguageChange={this.selectLanguage} />
        <LandingPage english={this.state.english} />
        <Main english={this.state.english} />
        <Footer english={this.state.english} />
      </div>
    );
  }
}

export default App;
