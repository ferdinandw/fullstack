import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {Table, Container, Col , Row} from 'react-bootstrap'
import {Form,Label,Input,FormGroup,Button} from 'reactstrap'

const Main = () =>{
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://db-heroes.herokuapp.com/heroes/get")
        .then(response => {
          setData(response.data.data);
          console.log(response.data.data);
        });
      },[]);
    const tampilkanData = data.map(item => {
        const { name,born,dead,description,establishment } = item;
        return (<tr>
        <td>{name}</td>
        <td>{born}</td>
        <td>{dead}</td>
        <td>{description}</td>
        <td>{establishment}</td>
        </tr>
        )
    });
    return(
        <Container>
            <Row>
                <Col className="col-md-4">
                <h1 className="text-center">Fake Wikipedia</h1>
                </Col>
                <Col className="col-md-4">
                <h1 className="text-center">Heroes</h1>
                </Col>
                <Col md="4">
                    <h1>test</h1>
                </Col>
            </Row>
            <Row>
        <Col md="8">
        <Table striped bordered>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Born</td>
                    <td>Dead</td>
                    <td>Description</td>
                    <td>Establishment</td>
                </tr>
            </thead>
            <tbody>
            {tampilkanData}
            </tbody>
        </Table>
        </Col>
        <Col md="4">
          <Form>
            <FormGroup>
              <Label>Song Name </Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label>Artis </Label>
              <Input />
            </FormGroup>
            <FormGroup>
              <Label>Title </Label>
              <Input />
            </FormGroup>
            <Button color="primary">Submit</Button>
          </Form>
        </Col>
        </Row>
        </Container>
    )
}

export default Main