import './App.css';
import Description from './components/description';
import Name from './components/name';
import Pic from './components/pic';
import Price from './components/price';
import {Button,Card} from "react-bootstrap"
import products from './products';

function App() {
  return(

  <div>

<Card style={{ width: '18rem' }}>
      {<Card.Img style={{    height: "100px",    width: "59px"}}  variant="top" src={products.URL} /> }
      <Pic/>
      <Card.Body>
        <Card.Title> <Name/></Card.Title>

        <Card.Text>
          <Description/>
          <Price/>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    







    </div>
  

  )

  }
  export default App