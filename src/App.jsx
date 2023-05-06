import FormSingUp from './components/FormSingUp'
import {Container,Typography} from '@mui/material';


function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align='center' component="h1">Formulario Registro</Typography>
      <FormSingUp />
    </Container>
  )
}

export default App
