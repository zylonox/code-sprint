import React from 'react'

const Card = (props) => {
  return (
    <div>
  <div className="card mt-3" style={{ width: "18rem", height: "25rem", overflow: "hidden" }}>
    <img className="card-img-top" src={require(`../../photos/${props.img}`)} alt={props.img} style={{ maxHeight: "14rem" }} />
    <div className="card-body">
      <h5 className="card-title">{props.productName}</h5>
      <p className="card-text"><ul>
        <li><h6>{props.category}</h6></li>
        <li>Price {props.price}</li>
        <li>Storage {props.storage}</li>
        <li>Ram {props.ram}</li>
        
        </ul>
        
        </p>
      
    </div>
  </div>
</div>

      
    
  )
}

export default Card
