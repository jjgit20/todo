import React, { useState } from 'react'
import styled from 'styled-components'

import { TextField, Button } from '@mui/material'
import StyledEngine, { StyledEngineProvider } from '@mui/styled-engine'

const StyledTextField = styled(TextField)`
    border-radius: 3px;

    & label.Mui-focused {
        color: rgba(255, 105, 135, 0.7);

    }
    & .MuiInputBase-root{
        height: 50px;

        &.Mui-focused fieldset{
            border: none;
            box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
        }
    }
`

const StyledButton = styled(Button)`
    background: pink;
    width: 90px;
    height: 50px;
    margin: 0 0 0 10px;
    padding: 0 30px;
    border-radius: 10px;
`

function TodoField ({ setTodoList }) {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const addTodo = (item) => {
        setTodoList((prevState) => {
          return[...prevState, item]
        })
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        addTodo(inputValue)
        setInputValue("");
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" /> */}
            <StyledEngineProvider injectFirst>
                <StyledTextField label="Todo" value={inputValue} onChange={(e) => handleChange(e)}/>
                <StyledButton variant="contained" onClick={handleSubmit}> Add </StyledButton>
            </StyledEngineProvider>
            
        </form>
    )
}

export default TodoField;