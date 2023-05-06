import React from 'react';
import styled from 'styled-components';
import { FormControlLabel, Checkbox } from "@mui/material";
//import { FormControlLabel } from '@mui/material';


const MyFormField = styled(FormControlLabel)`
    border-radius: 3px;
    box-shadow: 0 3px 4px 2px rgba(255, 105, 135, 0.3);
    color: black;
    width: 100%;
    height: 50px;
    margin: 3px;
`


function TodoItem (props) {
    
    return (

        <div>
            <MyFormField
                control={<Checkbox checked={false}/>}
                label = {props.item}
                onChange={() => props.getCompleted(props.id)}
            />
        </div>
    )
}

export default TodoItem;