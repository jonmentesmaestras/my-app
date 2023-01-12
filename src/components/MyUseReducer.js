import React, {useReducer} from 'react'

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    firstNameError: '',
    lastNameError: '',
    emailError: '',
}

const reducer = (state, action)=>{
    switch(action.type){
        case 'updateFieldValue':
            return {
                ...state,
                [action.field]: action.value,
                [`${action.field}Error`]: '',
            }
        case 'validate':
            let firstNameError = '';
            let lastNameError = '';
            let emailError = '';
            if (!state.firstName){
                firstNameError = 'First Name is required'
            }
            if (!state.lastName){
                firstNameError = 'Last Name is required'
            }
            if (!state.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
                emailError = 'Invalid email format';
             }
             return {
                ...state,
                firstNameError,
                lastNameError,
                emailError,
              }
        default:
                throw new Error();    
    }
}

const MyUseReducer = () => {
    const[state, dispatch] = useReducer(reducer, initialState)
    
    const handleChange = (e) => {
        dispatch({
          type: 'updateFieldValue',
          field: e.target.name,
          value: e.target.value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'validate' });
      }; 
    
  return (
    <form onSubmit={handleSubmit}>
        <label>
            First Name:
            <input
                type="text"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
            />
            {state.firstNameError && <p>{state.firstNameError}</p>}
        </label><br/>
        <label>
            Last Name:
            <input
                type="text"
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
            />
            {state.lastNameError && <p>{state.lastNameError}</p>}
        </label><br/>
        <label>
            Email:
            <input
                type="text"
                name="email"
                value={state.email}
                onChange={handleChange}
            />
            {state.emailError && <p>{state.emailError}</p>}
        </label><br/>
        <button onClick={handleSubmit}>Submit</button>                
    </form>
  )
}

export default MyUseReducer