import React, { Component } from 'react';

class ToyCard extends Component {
  
  deleteHandler = () => {
    // console.log(this.props.toy.id)
    this.props.deleteHandler(this.props.toy.id)
  }

  likeHandler = () => {
   console.log(this.props.toy.id)
    let updatedLikes = ++this.props.toy.likes
    console.log(updatedLikes)
    this.props.likeHandler(this.props.toy.id, updatedLikes)
  }
  
  render() {
    let {toy} = this.props 
    return (
      <div className="card">
        <h2>{toy.name}</h2>
        <img src={toy.image} alt={toy.name} className="toy-avatar" />
        <p>{toy.likes} Likes </p>
        <button className="like-btn" onClick ={this.likeHandler}>Like {'<3'}</button>
        <button className="del-btn" onClick={this.deleteHandler} >Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
