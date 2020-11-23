import React from 'react';
import ToyCard from './ToyCard'


class  ToyContainer extends React.Component{

  state = {
    toys: []
  }

  componentDidMount= () => {
    fetch('http://localhost:3000/toys')
    .then(response => response.json())
    .then(toyArray => {
      this.setState({toys: toyArray})
      console.log(toyArray)
    });
  }

  componentDidUpdate= (prevProps) => {
    if (this.props.newToy !== prevProps.newToy){
      fetch('http://localhost:3000/toys', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.props.newToy),
      })
      .then(response => response.json())
      .then(newToyObj => {
        this.setState({toys:[...this.state.toys,newToyObj]})
        console.log('Success:', newToyObj);
      })
    }
  }

  deleteToyHandler = (id) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'DELETE',
      })
      .then(response => response.json())
      .then(() => {
        console.log(id)
        let newToyArray = [...this.state.toys]
        const index = newToyArray.findIndex(toy => toy.id === id);
        newToyArray.splice(index, 1)
        this.setState({toys: newToyArray})
        }
      )
  }


  likeHandler = (id, likes) => {
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({likes}),
    })
    .then(response => response.json())
    .then(updatedToy => {
      let newToyArray = [...this.state.toys]
      const index = newToyArray.findIndex(toy => toy.id === id);
      newToyArray[index] = updatedToy
      this.setState({toys: newToyArray})
      console.log('Success:', updatedToy);
    })
  }
  renderToy = () => {return this.state.toys.map (toyObj =>  <ToyCard key={toyObj.id} toy= {toyObj} deleteHandler={this.deleteToyHandler} likeHandler= {this.likeHandler}/> )
  }


  render() {
    return(
      <div id="toy-collection">
        {this.renderToy()}
      </div>
    )
  }
}

export default ToyContainer;
