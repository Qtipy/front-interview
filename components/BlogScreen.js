import React from 'react';


class BlogScreen extends React.Component {

constructor(props) {
  super(props);
}


getPosts = () => {

    fetch('https://upply-interview.herokuapp.com/')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.setState({posts: data}, () => {console.log('data:',this.state.posts)});
    })
  }
  
  componentDidMount = () => {
    this.getPosts();
  }

  render = () => {

    return (
        <h1 data-testid="page-title">BlogScreen</h1>
    );
  }
}

export default BlogScreen;
