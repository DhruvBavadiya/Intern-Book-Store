import React from 'react'

const Card = (props) => {
  return (
    <div>
    <div class="card" style={{width: "18rem"}}>
    <img src={props.img} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.title}</h5>
      <p class="card-text m-0">{props.category}</p>
      <p class="card-text">{props.description}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
    </div>
  )
}

export default Card
