import React, { useState } from 'react'

function Home() {
  const [list, setList] = useState(["Alma", "Banan", "Juzum"])
  const [title, setTitle] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [user, setUser] = useState([
    {
      name:"Asir",
      age:"16",
      id:"1"
    },
    {
      name:"Kadyr",
      age:"19",
      id:"2"
    }
  ])

  const addItem = () => {
    const trimmed = title.trim()
    if (!trimmed) return
    setList(prev => [...prev, trimmed])
    setTitle("")
  }

  const addUser = () => {
    const trimmedName = name.trim()
    const trimmedAge = age.trim()
    if (!trimmedName || !trimmedAge) return

    setUser(prev => [
      ...prev,
      {
        id: String(Date.now()),
        name: trimmedName,
        age: trimmedAge
      }
    ])
    setName("")
    setAge("")
  }

  return (
    <div>
      <header/>
      Home
      <hr />
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addItem()}
      />
      <button onClick={addItem}>Add</button>
      <div>
        {
          list.map((item, index) => (
            <div key={index}>{item}</div>
          ))
        }
      </div>
      <hr />

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && addUser()}
      />
      <button onClick={addUser}>Add user</button>

      <div>
        {
          user.map((item) =>(
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.age}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home
