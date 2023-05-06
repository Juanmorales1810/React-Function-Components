import {Switch,Button,TextField,FormControlLabel,FormGroup} from '@mui/material';


function FormSingUp() {
    return (
        <form>
            <TextField 
            id='name' 
            label='Nombre' 
            variant='outlined'
            fullWidth
            margin='normal'
            autoComplete='off'
            />
            <TextField 
            id='name' 
            label='Apellido' 
            variant='outlined'
            fullWidth
            margin='normal'
            autoComplete='off'
            />
            <TextField 
            id='name' 
            label='Correo Electronico' 
            variant='outlined'
            fullWidth
            margin='normal'
            autoComplete='off'
            />
            <FormGroup>
                <FormControlLabel control={<Switch defaultChecked/>} label='Promociones' />
                <FormControlLabel control={<Switch defaultChecked/>} label='Novedades' />
            </FormGroup>
            <Button variant='contained'>Registrarse</Button>
        </form>
    )
}

export default FormSingUp