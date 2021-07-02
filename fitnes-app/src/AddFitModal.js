import React,{Component} from 'react';
import {Modal, Button, Row, Col, Form}from 'react-bootstrap';


export class AddFitModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:37026/api/'+ 'fitnes', {
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                // DepartmentId:null,
                FitnesName:event.target.FitnesName.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    
    render(){
        return(
            <div className="container">
         <Modal 
         {...this.props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
         >
             <Modal.Header closeButton>
                 <Modal.Title id="contained-modal-title-vcenter">
                     Add Fitnes
                 </Modal.Title>
             </Modal.Header>
             <Modal.Body>

                 <Row>
                     <Col sm={6}>
                         <Form onSubmit={this.handleSubmit}>
                             <Form.Group controlId="FitnesName">
                                 <Form.Label>DepartmentName</Form.Label>
                                 <Form.Control type="text" name="FitnesName" required
                                 placeholder="FitnesName"/>
                             </Form.Group>
                             <Form.Group>
                                 <Button variant="primary" type="submit">
                                     Add Fitnes
                                 </Button>
                             </Form.Group>
                         </Form>
                     </Col>
                 </Row>
             </Modal.Body>
             <Modal.Footer>
                 <Button variant="danger" onClick={this.props.onHide}>Close</Button>
             </Modal.Footer>
             
             </Modal>        

            </div>
        )
    }
}