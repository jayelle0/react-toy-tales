import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'


class App extends React.Component{

  state = {
    display: false,
    newToy: {}
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  formSubmitHandler = (newToyObj) => {
    // console.log(newToyObj)
    this.setState({newToy: newToyObj})
    // debugger
  }
  
  render(){
    // console.log(this.state.newToy)
    return (
      <>
        <Header/>
        { this.state.display
            ?
            <ToyForm submitHandler={this.formSubmitHandler}/>
            :
            null
          }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer newToy = {this.state.newToy}/>
      </>
    );
  }

}

export default App;
