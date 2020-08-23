import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Start from '../Start/Start';
import PageOne from '../PageOne/PageOne';
import PageTwo from '../PageTwo/PageTwo';
import PageThree from '../PageThree/PageThree';
import PageFour from '../PageFour/PageFour';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
import Thanks from '../Thanks/Thanks'



class App extends Component {

  render() { 
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <main> 
        <Route exact path="/" component={Start} />
        <Route path="/pageOne" component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
        <Route path="/pageThree" component={PageThree} />
        <Route path="/pageFour" component={PageFour} />
        <Route path="/reviewFeedback" component={ReviewFeedback} />
        <Route path="/thanks" component={Thanks} />
        </main>
        </Router> 
      </div>
    );
  }
}

export default connect()(App);