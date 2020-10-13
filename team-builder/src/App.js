import React, {useState} from 'react';
import './App.css';
import Form from "./Form"
// test
const initialFormValues = {
  name: "",
  gender: "",
  breed: ""
}

function App() {
  const [members, setMembers] = useState([
    {
      name: 'Kyle',
      gender: 'king',
      breed: "different"
    }
  ])

  const [formValues, setFormValues] = useState(initialFormValues)
  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    let newFriend = {
      name: formValues.name.trim(),
      gender: formValues.gender.trim(),
      breed: formValues.breed.trim(),
    }
    setMembers(
      [...members, newFriend]
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team!</h1>
      </header>

      <div className="section">
        <Form update={updateForm} values={formValues} submit={submitForm}/>

        {members.map(friend => {
          return (
            <div>
              <h2>{friend.name}</h2>
              <p>{friend.gender}</p>
              <p>{friend.breed}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
