import React, { Component } from 'react';
import Card from './cards/card'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      yes_cats: [],
      no_cats: []
    }
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
  }

  componentWillMount() {
    const images = tumblr_api_read.posts.map((post) => post["photo-url-400"]);
    this.setState({
      cats: images
    });
  }

  like() {
    const [liked, ...cats] = this.state.cats;
    const yes_cats = [liked, ...this.state.yes_cats]
    this.setState({cats, yes_cats}); 
  }

  dislike() {
    const [disliked, ...cats] = this.state.cats;
    const no_cats = [disliked, ...this.state.no_cats]
    this.setState({cats, no_cats});
  }

  _renderHeader(){
    return(
      <div className="row well well-sm">
        <div className="col-md-3">
          <h2 className='text-center text-danger'>
            <span className="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>
          </h2>
        </div>
        <div className="col-md-6"><h1 className='text-center tinder-title'>TinderCats</h1></div>
        <div className="col-md-3">
          <h2 className='text-center text-success'>
            <span className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>
          </h2>
        </div>
      </div>
    );
  }

  render() {
    return(
      <div className="container">
        {this._renderHeader()}
        <div className="row">
          <div className="col-md-3">
            {this.state.no_cats.map((image) => <Card image={image}/> )}
          </div>
          <div className="col-md-6">
            <Card image={this.state.cats[0]} like={this.like} dislike={this.dislike}/>
          </div>
          <div className="col-md-3">
            {this.state.yes_cats.map((image) => <Card image={image}/> )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
