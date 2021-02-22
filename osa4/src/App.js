//import logo from './logo.svg';
const logo = require('./logo.svg')
const acss = require('./App.css')
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// function App() {
//<div className="App">

/*

const App = () => {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
const App = () => {
	r = "<div>hello world</div>"
	b = 12
	ReactDOM.render(
		console.log(b * 6)
		//document.getElementById("root")
	)
}

//export default App;
exports = module.exports.App = App
