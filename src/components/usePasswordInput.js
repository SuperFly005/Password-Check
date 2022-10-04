import React, { useState } from "react";
import { TextField, OutlinedInput, InputAdornment, IconButton, FormControl, InputLabel, FormHelperText } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material'

export const usePasswordInput = ({ label }) => {
    const [ value, setValue ] = useState("")
    const [ warning, setWarning ] = useState([])
    const [ visible, setVisible ] = useState(false)

    return {
        value,
        element: <FormControl sx={{ mt: '30px'}} variant="outlined">
          <InputLabel error={ !!warning.length } htmlFor={`aweber-${label.toLowerCase()}`}>{label}</InputLabel>
          <OutlinedInput
            id={`aweber-${label.toLowerCase()}`}
            label={label}
            error={ !!warning.length }
            type={ visible ? "text" : "password" }
            value={value}
            onChange={ev => setValue(ev.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setVisible(!visible)}
                  edge="end"
                >
                  {visible ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          { label === "Password" && <FormHelperText error>{warning.map(warningCase => (<span>- {warningCase}<br/></span>))}</FormHelperText> }
        </FormControl>,
        setWarning
    }
}