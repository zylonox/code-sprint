import React from 'react'

const Card = (props) => {
  return (
    <div>
  <div className="card mt-3" style={{width: '18rem'}}>
    <img className="card-img-top" src={`../../photos/${props.img}`} alt={props.img} />
    <div className="card-body">
      <h5 className="card-title">{props.productName}</h5>
      <p className="card-text"><ul>
        <li><h6>{props.category}</h6></li>
        <li>{props.price}</li>
        <li>{props.storage}</li>
        <li>{props.ram}</li>
        
        </ul>
        
        </p>
      
    </div>
  </div>
</div>

      
    
  )
}

export default Card
