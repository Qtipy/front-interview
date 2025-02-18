import React from 'react';


class BlogScreen extends React.Component {

constructor(props) {
  super(props);

  this.state = {
    posts: [],
    search: '',
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

  handleSearch = name => event => {

    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log('submit');
  }
  
  componentDidMount = () => {
    this.getPosts();
  }

  render = () => {

    const apiUri= "https://upply-interview.herokuapp.com/images/";

    console.log(this.state.search);

    return (
        <React.Fragment>
            <h1>BlogScreen</h1>
            
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="search" name="search" minLength="3" maxLength="8"
                size="30" placeholder="Search" onChange={this.handleSearch('search')}/>
            </form>

            {this.state.posts.map((item, index) => (
                <React.Fragment  key={index}>
                        <h5>{item.title.substr(0, 100)}</h5>
                        <p>{item.text}</p>
                        <img src={apiUri + item.src}/>
                        {item.date && <p><em>{item.date}</em></p>}
                    <hr/>

                </React.Fragment>
            ))}


            <p>I haven't enough time to finish the test but there are some ideas to implement later:</p>
            <ul>
                <li>Title of posts should be cut from 10 words or another limit,  if not title could be too long</li>
                <li>Same for the post description, fix a limit to cut and add a link to see more</li>
                <li>A button to scroll down or up can facilitate navigation</li>
                <li>Create more components and subcomponents to re use them later</li>
                <li>Use hooks for more efficiency</li>
            </ul>

        </React.Fragment>
    );
  }
}

export default BlogScreen;
