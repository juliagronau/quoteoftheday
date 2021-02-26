import logo from './logo.svg';
import './App.css';
import Randomadvice from './Components/Randomadvice';
import Header from './Components/Header';
import Nameinput from './Components/Nameinput';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container >
       <Header />
       <Nameinput />
    </Container>
  );
}

export default App;
