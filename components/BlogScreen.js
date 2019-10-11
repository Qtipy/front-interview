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
      this.setState({posts: data}, () => {
          // Callback to sort the array
        this.state.posts.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
          });
      });
    })
  }
  
  componentDidMount = () => {
    this.getPosts();
  }

  render = () => {

    const apiUri= "https://upply-interview.herokuapp.com/images/";

    return (
        <React.Fragment>
            <h1>BlogScreen</h1>

            {this.state.posts.map((item, index) => (
                <React.Fragment  key={index}>
                        <h5>{item.title.substr(0, 100)}</h5>
                        <p>{item.text}</p>
                        <img src={apiUri + item.src}/>
                        {item.date && <p><em>{item.date}</em></p>}
                    <hr/>

                </React.Fragment>
            ))}
        </React.Fragment>
    );
  }
}

export default BlogScreen;
