import React, { Component, Fragment } from 'react'
import firebase from '../services/firebase'

export default class GetData extends Component {
  state = {
    isLoading: true
  }

  componentDidMount(){
    this.fetchLastPost()
  }

  async fetchLastPost() {
    try {
      const response = await firebase
        .database()
        .ref('posts')
        .once('value')
      
      console.log(response.val());

      this.setState({
        isLoading: false,
        value: response.val()
      })
    } catch (error) {
      console.error(error);
      alert("There is problem while loading the data")
    }
  }

  get OneContent(){
    const {value} = this.state
    const postIds = Object.keys(value)
    const lastPostId = postIds[postIds.length - 1]
    const post = value[lastPostId].text

    console.log(post);

    const detailPost = post.split("\n").map((el, index) => {
      return <p key={index}>{el}</p>
    })
    return (
      <Fragment>
        <h5 className="hero">Last Post</h5>
        <div className="post">{detailPost}</div>
      </Fragment>  
    )
  }

  get Contents(){
    const {value} = this.state
    const postIds = Object.keys(value)
    return postIds.map((el, index) => {
      const detailPost = value[el].text.split("\n").map((el, index) => {
        return <p key={index}>{el}</p>
      })
      return (
        <Fragment key={el}>
          <h5 className="hero">Post ID {el}</h5>
          <div className="post">{detailPost}</div>
        </Fragment>  
      )
    })
  }

  get Loader(){
    return <h2>Loading ...</h2>
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          { this.state.isLoading ? this.Loader : this.Contents}
        </header>
      </div>
    )
  }
}
