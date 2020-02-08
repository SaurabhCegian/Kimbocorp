import React, { useState } from 'react';
import './Welcome.css';
import logo from '../../assets/images/logo.png';
import CreateBusinessForm1 from './CreateBusinessForm1';
import MigrateBusinessForm from './MigrateBusinessForm';
import Address from './Address';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import createBusiness2 from '../../assets/images/create-business2.png'
import Director from './Director';
import PersonalInformation from './PersonalInformation';
import IntangibleAssets from './IntangibleAssets';

export default function Welcome() {

    const [index, setIndex] = useState(-1)
    const [currentComponent, setCurrentComponent] = useState("")
    const [allForm, setAllForm] = useState(['Address', 'Director', 'IntangibleAssets', 'PersonalInformation'])

    const setCurrentCompFun = (status) => {
        if (status === 'next') {
            let idx = index + 1
            if (idx > 3) {
                alert("this is last form")
                return;
            }
            setCurrentComponent(allForm[idx])
            setIndex(idx)
        } else if (status === 'prev') {
            let idx = index - 1
            if (idx === -1) {
                setCurrentComponent("")
            } else {
                setCurrentComponent(allForm[idx])
            }
            setIndex(idx)
        }
    }

    return (
        <>
            <div className="welcome" >
                {
                    <form>
                        <div className="header">
                            <img src={logo} class="welcome-logo" />
                            <p className="header-text">Welcome to Kimbocorp, How can we help you?</p>
                        </div>
                        <Accordion>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                        <span className="circle-plus-icon"><i class="fa fa-plus-circle" aria-hidden="true"></i></span><span className="task-heading"> {'  '}Create Business</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="0">
                                    <Card.Body>
                                        {
                                            currentComponent === "" &&
                                            <CreateBusinessForm1 setCurrentCompFun={setCurrentCompFun} />
                                        }
                                        {
                                            currentComponent === "Address" &&
                                            <Address setCurrentCompFun={setCurrentCompFun} />
                                        }
                                        {
                                            currentComponent === "Director" &&
                                            <Director setCurrentCompFun={setCurrentCompFun} />
                                        }
                                        {
                                            currentComponent === "IntangibleAssets" &&
                                            <IntangibleAssets setCurrentCompFun={setCurrentCompFun} />
                                        }
                                        {
                                            currentComponent === "PersonalInformation" &&
                                            <PersonalInformation setCurrentCompFun={setCurrentCompFun} />
                                        }
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                        <span className="circle-plus-icon"><i class="fa fa-plus-circle" aria-hidden="true"></i></span><span className="task-heading">{'  '}Migrate Business!</span>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="1">
                                    <Card.Body>
                                        {
                                            currentComponent === "" &&
                                            <MigrateBusinessForm setCurrentCompFun={setCurrentCompFun} />
                                        }
                                        {
                                            currentComponent === "Address" &&
                                            <Address setCurrentCompFun={setCurrentCompFun} />
                                        }
                                        {
                                            currentComponent === "Director" &&
                                            <Director setCurrentCompFun={setCurrentCompFun} />
                                        }
                                        {
                                            currentComponent === "IntangibleAssets" &&
                                            <IntangibleAssets setCurrentCompFun={setCurrentCompFun} />
                                        }
                                        {
                                            currentComponent === "PersonalInformation" &&
                                            <PersonalInformation setCurrentCompFun={setCurrentCompFun} />
                                        }
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
                    </form>
                }
            </div>
        </>
    )
}


