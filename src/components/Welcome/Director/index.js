import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import LocalDirector from './LocalDirector'
import './Director.css'

export default function Director(props) {
    const onClickNext = (e) => {
        e.preventDefault()
        props.setCurrentCompFun('next')
    }
    const onClickPrevious = (e) => {
        e.preventDefault()
        props.setCurrentCompFun('prev')
    }

    return (
        <div className='director'>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <span className="task-heading"><i class="fa fa-plus-circle" aria-hidden="true"></i> {'  '}Use Kimbocorp as Local Director</span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <LocalDirector onClickNext={onClickNext} onClickPrevious={onClickPrevious} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            <span className="task-heading"><i class="fa fa-plus-circle" aria-hidden="true"></i>{'  '}Aleady have a Local director</span>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>
                            <LocalDirector onClickNext={onClickNext} onClickPrevious={onClickPrevious} />
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>
        </div>
    )
}
