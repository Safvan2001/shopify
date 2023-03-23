import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ViewItem() {
    const params = useParams()
    const [allShop, setAllShop] = useState([])
    const [show, setShow] = useState(false);

    // console.log(params.id);
    const shopdata = async () => {
        await fetch('https://fakestoreapi.com/products').then(data => {
            data.json().then(result => {
                setAllShop(result)


            })
        })
    }
    //   console.log(allShop);

    const viewData = allShop.find(item => item.id == params.id)
    console.log(viewData);
    useEffect(() => {
        shopdata()
    }, [])


    return (

        <div>
            {viewData ? (

                <Row>
                    <Col>
                        <Image className='p-5' src={viewData.image} fluid />
                    </Col>
                    <Col className='p-5'><h1>{viewData.title}</h1>
                        <h6>Rate:{viewData.rating.rate}</h6>
                        <h6>Count:{viewData.rating.count}</h6>

                        <br></br>

                        <Button variant="primary" onClick={() => setShow(true)}>
                            Deatails
                        </Button>

                        <Modal
                            show={show}
                            onHide={() => setShow(false)}
                            dialogClassName="modal-90w"
                            aria-labelledby="example-custom-modal-styling-title"
                        >
                            <Modal.Header closeButton>
                                <Modal.Title id="example-custom-modal-styling-title">
                                    {viewData.title}
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                   {viewData.description}
                                </p>
                            </Modal.Body>
                        </Modal>
                       
                        
                    </Col>



                </Row>


            ) : 'null'}
        </div>

    )
}


export default ViewItem