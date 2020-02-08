import React, { useState } from 'react';
import './Address.css';
import FillAddress from './FillAddress';
import AutoFillAddress from './AutoFillAddress';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Address(props) {

    const onClickNext = (e) => {
        e.preventDefault()
        props.setCurrentCompFun('next')
    }
    const onClickPrevious = (e) => {
        e.preventDefault()
        props.setCurrentCompFun('prev')
    }

    return (
        <React.Fragment>
            <div className="address" >
                <Accordion>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                <span className="task-heading"><i class="fa fa-plus-circle" aria-hidden="true"></i> {'  '}Use Kimbocorp's Registered Address and Digial Mailroom Service</span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <AutoFillAddress />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <span className="task-heading"><i class="fa fa-plus-circle" aria-hidden="true"></i>{'  '}Add my own business address</span>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <FillAddress />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <button type="submit" className="address-button" onClick={onClickNext}>Next</button>
            <button type="submit" className="address-button" onClick={onClickPrevious}>Previous</button>
        </React.Fragment>
    )
}
