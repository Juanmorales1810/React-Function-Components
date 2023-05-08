import FormSingUp from './components/FormSingUp'
import {Container,Typography} from '@mui/material';


function App() {

  const handleSubmit = (valores) => {
    console.log('appjs',valores);
  }

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align='center' component="h1">Formulario Registro</Typography>
      <FormSingUp handleSubmit={handleSubmit}/>
    </Container>
  )
}

export default App
