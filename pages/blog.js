import styled from 'styled-components';
import Layout from '../components/Layout';

import React from 'react';
import BlogScreen from '../components/BlogScreen';


class Blog extends React.Component {

constructor(props) {
  super(props);
}


  render() {

    return (
      <Layout>
        <h1 data-testid="page-title">Blog</h1>
        <p data-testid="text">Blog page</p>

        <BlogScreen/>

      </Layout>
    );
  }
}

export default Blog;
