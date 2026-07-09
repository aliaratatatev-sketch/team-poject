import React from 'react'

function Info(props) {
  return (
    <div style={{
      width: "350px",
      border: "4px solid blue",
      borderRadius: "10px",
      overflow: "hidden",
      backgroundColor: "#1e1e2e",
      color: "white",
      textAlign: "center"
    }}>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
        onError={(e) => e.target.style.display = "none"}
      />
      <div style={{ padding: "10px" }}>
        <h2 style={{ color: "yellow" }}>{props.name}</h2>
        <p><b>Вид:</b> {props.type}</p>
        <p><b>Возраст:</b> {props.age} лет</p>
        <p><b>Описание:</b> {props.description}</p>
      </div>
    </div>
  )
}

export default Info
