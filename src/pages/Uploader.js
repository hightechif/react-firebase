import React, { Component } from 'react'
import firebase from '../services/firebase'

export default class Uploader extends Component {
  state = {
    file: null,
    image: null
  }

  handleFileChange = e => {
    const file = e.target.files[0]
    this.setState((prevState) => {
      return {
        ...prevState,
        file
      }
    })
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      this.setState({ image: reader.result })
    }, false)
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const {file} = this.state
    console.log(file);

    // Upload file
    try {
      const response = await firebase.storage().ref(`files/${file.name}`).put(file)
      console.log(response);
      alert('File Uploaded')
    } catch (error) {
      console.log(error);
      alert('Failed to upload file!')
    }
  }

  render() {
    const { file, image } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h4>Random Uploader</h4>
          <form onSubmit={this.handleSubmit}>
            <div 
              className="form-control" 
              style={{ margin: "32px 0px" }}
            >
              <input 
                type="file" 
                onChange={this.handleFileChange}
                placeholder="Upload File"
              />
            </div>
            <div className="form-control">
              <input 
                type="submit"
                value="Upload"
                placeholder="form-submit" 
              />
            </div>
          </form>
        </header>
      </div>
    )
  }
}