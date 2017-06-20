import React, { Component } from 'react';
import Card from './cards/card'

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      yes_posts: [],
      no_posts: []
    }
    this.like = this.like.bind(this);
    this.dislike = this.dislike.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentWillMount() {
    const posts = tumblr_api_read.posts;
    this.setState({posts});
  }

  like() {
    const [liked, ...posts] = this.state.posts;
    const yes_posts = [liked, ...this.state.yes_posts]
    this.setState({posts, yes_posts}); 
  }

  dislike() {
    const [disliked, ...posts] = this.state.posts;
    const no_posts = [disliked, ...this.state.no_posts]
    this.setState({posts, no_posts});
  }

  remove(post) {
    const yes_posts = this.state.yes_posts.filter((yes_post) => {
      return yes_post.id != post.id
    })
    const no_posts = this.state.no_posts.filter((no_post) => {
      return no_post.id != post.id
    })
    this.setState({yes_posts, no_posts});
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
            {this.state.no_posts.map((post) => <Card post={post} key={post.id} remove={this.remove}/> )}
          </div>
          <div className="col-md-6">
            <Card post={this.state.posts[0]} like={this.like} dislike={this.dislike}/>
          </div>
          <div className="col-md-3">
            {this.state.yes_posts.map((post) => <Card post={post} key={post.id} remove={this.remove}/> )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
