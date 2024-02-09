
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { addNumbers } from './services/DataServices.js';


function App() {
  //state variable  function   Hook (useState)
  // this state Variable is a int because its initial value is 0 
  const [count, setCount] = useState(0)

  // this state variable is a string because it initial value is '' an empty strimg
  const [inputField, setInputField] = useState('');

  //what ever is in useState parenthesis wil be the initial value of the state varibale


  const clickFunction = () => {
    //inside of setCount we are updating count
    setCount(count + 1);
  }



  const [numOne, setNumOne] = useState('');
  const [numTwo, setNumTwo] = useState('');
  const [result, setResult] = useState('');

  const getResult = async () => {
    const response = await addNumbers(numOne, numTwo);
    setResult(response);
  }


  return (
    <>
      <Button variant="primary" onClick={() => clickFunction()}>Primary</Button>{' '}
      {/*or you can do it this way <Button variant="primary" onClick={() => setCount(count + 1)}>Primary</Button>{' '}  */}

      <p>{count}</p>

      <input onChange={(e) => setInputField(e.target.value)}></input>
      <p>{inputField}</p>

      <Row>
          <Col lg={6} className='d-flex justify-content-center'>
            <input onChange={e => setNumOne(e.target.value)}></input>
          </Col>
          <Col lg={6} className='d-flex justify-content-center'>
              <input onChange={e => setNumTwo(e.target.value)}></input>
          </Col>
      </Row>
      <Row>
        <Col lang='12'className='d-flex justify-content-center'>
        <Button variant="primary" onClick={() => getResult()}>Get Result</Button>{' '}
        </Col>
      </Row>
      <Row><p className='d-flex justify-content-center mt-5'>{result}</p></Row>


    </>

  );
}

export default App;
