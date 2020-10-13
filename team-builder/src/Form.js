import React from 'react'

export default function Form(props) {
    // const {callbacks to make form work} = props
    const {update, values, submit} = props
    // Callbacks will go here 
    const onChange = (evt) => {
        const {name, value} = evt.target

        update(name, value)
    }
    
    const onSubmit = (evt) => {
        evt.preventDefault()

        submit()
    }

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group inputs">
                <label>
                    Name 

                    <input 
                    type="text"
                    name="name"
                    value={values.name}
                    placeholder="Name"
                    maxLength="15"
                    onChange={onChange}
                    />
                </label>
                <label>
                    Gender 

                    <input 
                    type="text"
                    name="gender"
                    value={values.gender}
                    placeholder="gender"
                    onChange={onChange}
                    />
                </label>
                <label>
                    Breed 

                    <input 
                    type="text"
                    name="breed"
                    value={values.breed}
                    placeholder="Breed"
                    maxLength="15"
                    onChange={onChange}
                    />
                </label>

                <div className='submit'>
                    <button >Submit</button>
                </div>
            </div>
        </form>
    )
}