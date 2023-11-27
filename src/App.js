import './App.css';
import {Button,Card} from "react-bootstrap"
import Name from './components/Name';
import Price from './components/Price';
import Description from './components/Description';
import Pic from './components/Pic';

function App() {
  return(

  <div>

<Card style={{ width: '18rem' }}>
      <Pic/>
      <Card.Body>
        <Card.Title><Name/></Card.Title>

        <Card.Text>
          <Price/>
          <Description/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    







    </div>
  

  )

  }
  export default App