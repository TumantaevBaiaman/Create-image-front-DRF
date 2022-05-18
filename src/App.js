import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    title: '',
    image: null,
    video: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };
  handleVideoChange = (e) => {
    this.setState({
      video: e.target.files[0]
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    // form_data.append('category', this.state.category);
    form_data.append('title', this.state.title);
    form_data.append('img', this.state.image, this.state.image.name);
    form_data.append('video_test', this.state.video, this.state.video.name);
    // form_data.append('content', this.state.content);
    let url = ('http://127.0.0.1:8000/posts/');
    axios.post(url, form_data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
          </p>
          
            {/* <select defaultValue="School" placeholder='Caategory' id='category' onChange={this.handleChange} value={this.state.category}>
                    <option value=""></option>
                    <option value={5}>Category</option>
            </select> */}
          <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpg"  onChange={this.handleImageChange} required/>Create - Image
          </p>
          <p>
            <input type="file"
                   id="video"
                   accept="video/mp4"  onChange={this.handleVideoChange} required/> Create - Video
          </p>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}

export default App;