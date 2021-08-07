import React, { Component } from 'react';
import Table from './Table';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      apiUrl: 'https://newsapi.org/v2/everything?sortBy=publishedAt&apiKey=bccea144e9a24ac09478471228a6d7ae&q=',
      articles: [],
      visible: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

  }

  handleSubmit(event) {
    this.state.apiUrl = this.state.apiUrl + this.state.value
    console.log(this.state.apiUrl)
    fetch(this.state.apiUrl)
      .then(res => res.json())
      .then(json => json.articles)
      //.then((data) => console.log('This is your data', data))
      .then(articles => this.setState({ 'articles': articles }))
    this.setState({ visible: true })
    //alert(this.state.apiUrl)
    event.preventDefault();
  }
  
  render() {
    return (      
        <form onSubmit={this.handleSubmit}>
        <div class="center">
          <label >
          
            <h3>Enter the Keyword to search  :</h3>
            
            <br></br><input type="text" value={this.state.value} onChange={this.handleChange} />
            
          </label>
          <input type="submit"  value="Submit" />
          <br></br>
          </div>
          <Table articles={this.state.articles} />
          
        </form>      
        
    );
  }
}
export default NameForm;
