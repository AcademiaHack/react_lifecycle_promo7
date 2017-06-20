import React, { Component } from 'react';
import Dispatcher from './dispatcher';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      people: ['P1','P2','P3','P4','P5'],
      line: [],
      line2: [],
      line3: [],
      nextInterval: 0
    }
    this.nextLine2 = this.nextLine2.bind(this);
    this.nextLine3 = this.nextLine3.bind(this);
  }

  componentWillMount() {
    this._nextPerson();
    const nextInterval = setInterval(() => { this._nextPerson() }, 10000);
    this.setState({nextInterval});
  }

  _nextPerson() {
    const [nextPerson, ...people] = this.state.people;
    const line = [...this.state.line, nextPerson];
    if(nextPerson) {
      this.setState({people, line});
    }
  }

  nextLine2() {
    const [nextPerson, ...line] = this.state.line;
    const line2 = [...this.state.line2, nextPerson];
    if(nextPerson) {
      this.setState({line, line2});
    }
  }

  nextLine3() {
    const [nextPerson, ...line2] = this.state.line2;
    const line3 = [...this.state.line3, nextPerson];
    if(nextPerson) {
      this.setState({line2, line3});
    }
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <div className="well text-center">
              {this.state.people.map((person) => <h3>{person}</h3>)}
            </div>
          </div>
          <div className="col-md-3">
            <div className="well text-center">
              <Dispatcher order={[1,4,3,2]} nextLine={this.nextLine2}/>
              {this.state.line.map((person) => <h3>{person}</h3>)}
            </div>
          </div>
          <div className="col-md-3">
            <div className="well text-center">
              <Dispatcher order={[2,3,1,4]} nextLine={this.nextLine3}/>
              {this.state.line2.map((person) => <h3>{person}</h3>)}
            </div>
          </div>
          <div className="col-md-3">
            <div className="well text-center">
              {this.state.line3.map((person) => <h3>{person}</h3>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
