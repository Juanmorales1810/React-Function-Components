import { useState } from 'react';
import {Switch,Button,TextField,FormControlLabel,FormGroup} from '@mui/material';


function FormSingUp({handleSubmit}) {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [prom, setProm] = useState(true);
    const [nov, setNov] = useState(true);
    //Al utilizar el hook useState indicamos para React que ese componente va a guardar un estado, para eso tenemos un array del resultado de mandar a llamar la función useState(), la primera posición de ese array es el valor del estado y la segunda posición es una función con la cual podremos actualizar el valor de nuestro estado.
    const [errors, setErrors] = useState({
        name:{
            error:false,
            mensaje:'Deben ser al menos 3 caracteres'
        }
    });

    function validarNombre(nombre){
        if(nombre.length < 3){
            setErrors({
                ...errors,
                name:{
                    error:true,
                    mensaje:'Deben ser al menos 3 caracteres'
                }
            })
        }else{
            setErrors({
                ...errors,
                name:{
                    error:false,
                    mensaje:''
                }
            })
        }
    }

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit({
                name,
                lastName,
                email,
                prom,
                nov
            });
        }}>
            <TextField 
            id='name' 
            label='Nombre' 
            variant='outlined'
            fullWidth
            margin='normal'
            autoComplete='off'
            onChange={(e)=>
                setName(e.target.value)
            }
            value={name}
            error={errors.name.error}
            helperText={errors.name.error ? errors.name.mensaje : ''}
            onBlur={(e)=>{
                validarNombre(e.target.value);
            }}
            />
            <TextField 
            id='name' 
            label='Apellido' 
            variant='outlined'
            fullWidth
            margin='normal'
            autoComplete='off'
            onChange={(e)=>
                setLastName(e.target.value)
            }
            value={lastName}
            />
            <TextField 
            id='name' 
            label='Correo Electronico' 
            variant='outlined'
            fullWidth
            margin='normal'
            autoComplete='off'
            onChange={(e)=>
                setEmail(e.target.value)
            }
            value={email}
            />
            <FormGroup>
                <FormControlLabel control={<Switch  checked={prom} onChange={(e)=>setProm(e.target.checked)}/>} label='Promociones' />
                <FormControlLabel control={<Switch  checked={nov} onChange={(e)=>setNov(e.target.checked)} />} label='Novedades' />
            </FormGroup>
            <Button variant='contained' type='submit'>Registrarse</Button>
        </form>
    )
}

export default FormSingUp