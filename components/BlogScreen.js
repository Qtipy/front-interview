import React from 'react';


class BlogScreen extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    posts: [],
  };
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
        <React.Fragment>
            <h1>BlogScreen</h1>

            <ol>
            {this.state.posts.map((item, index) => (
                <React.Fragment  key={index}>
                    <li>{item.title.substr(0, 100)}</li>
                </React.Fragment>
            ))}
            </ol>
        </React.Fragment>
    );
  }
}

export default BlogScreen;
