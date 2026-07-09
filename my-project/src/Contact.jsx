import React from 'react'

function contact(props) {
  return (
    <div style={{
      width: "350px",
      height: "280px",
      backgroundColor: "red",
      border: "6px solid green",
      overflow: "hidden",
      textAlign: "center"
    }}>
      <h2 style={{ color: "white" }}>{props.name} {props.age}</h2>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        onError={(e) => e.target.style.display = "none"}
      />
    </div>
  )
}

export default contact
