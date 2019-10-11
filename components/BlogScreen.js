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

//   handleInputChange = () => {
//     this.setState({
//       search: this.search.value
//     }, () => { 
//         console.log('search: ',this.state.search);
//     })
//   }

  handleSearch = name => event => {

    event.preventDefault();

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
        </React.Fragment>
    );
  }
}

export default BlogScreen;
