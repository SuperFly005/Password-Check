import React from "react";
import { Button, Card, Typography } from "@mui/material";
import { usePasswordInput } from "./usePasswordInput";
import { validate } from "../utils/validate";

export const PasswordDialog = () => {
    const { value: password, element: passwordInput, setWarning: setPasswordWarning} = usePasswordInput({ label: "Password" })
    const { value: repassword, element: repasswordInput, setWarning: setRePasswordWarning} = usePasswordInput({ label: "Re-Password" })

    const submitHandler = () => {
        const warning = validate(password, repassword)
        setPasswordWarning(warning)
        setRePasswordWarning(warning)
        if(warning.length === 0) {
            alert("Submit success!!! ^_^")
        }
    }

    return (
        <Card sx={{ width: 560, p: '30px 50px', display: 'flex', flexDirection: 'column', boxSizing: 'border-box'}} >
            <Typography variant="h5" sx={{color: "#a0a0a0"}}>AWeber - Password</Typography>
            { passwordInput }
            { repasswordInput }
            <Button variant="outlined" sx={{ height: 50, mt: '30px'}} onClick={submitHandler}>S U B M I T</Button>
        </Card>
    )
}