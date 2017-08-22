import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

class Choose extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createColor: '',
      createColor1: '',
      createColor2: '',
    }
  }
  handleChangeColor = () => {
    if(this.state.createColor === 'grey') {
      this.setState({
        createColor: 'white',
      })
    } else {
      this.setState({
        createColor: 'grey',
      })
    }
  }

  handleChangeColor1 = () => {
    if(this.state.createColor1 === 'grey') {
      this.setState({
        createColor1: 'white',
      })
    } else {
      this.setState({
        createColor1: 'grey',
      })
    }
  }

  handleChangeColor2 = () => {
    if(this.state.createColor2 === 'grey') {
      this.setState({
        createColor2: 'white',
      })
    } else {
      this.setState({
        createColor2: 'grey',
      })
    }
  }
  render() {
    return <div className='choose'>
      <h1>Form builder</h1>
      <div className='create'
        onClick={this.handleChangeColor}
        style={{backgroundColor: this.state.createColor}}
        >Create</div>
      <div className='preview'
        onClick={this.handleChangeColor1}
        style={{backgroundColor: this.state.createColor1}}>Preview</div>
      <div className='export1'
        onClick={this.handleChangeColor2}
        style={{backgroundColor: this.state.createColor2}}>Export</div>
    </div>
  }
}

class Form extends React.Component {
  handleClick() {
    console.log('clicked');
  }
  render() {
    return <div className='first'>
      <div className='addbtn'
        onClick={this.handleClick}>
        Add Input
      </div>
    </div>
  }
}

class App extends React.Component {
  render() {
    return <div>
      <Choose />
      <Form />
    </div>
  }
}

  ReactDOM.render(
      <App />,
document.getElementById('app')
);
})
