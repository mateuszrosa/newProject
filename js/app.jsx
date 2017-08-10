import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function() {

class Choose extends React.Component {
  render() {
    return <div className='choose'>
      <h1>Form builder</h1>
      <div className='create'>Create</div>
      <div className='preview'>Preview</div>
      <div className='export1'>Export</div>
    </div>
  }
}

class Form extends React.Component {
  render() {
    return <div className='first'>
      <div className='addbtn'>        Add Input
      </div>
    </div>
  }
}

class App extends React.Component {
  render() {
    return <div>
      <Choose />
      // <Form />
    </div>
  }
}

  ReactDOM.render(
      <App />,
document.getElementById('app')
);
})
