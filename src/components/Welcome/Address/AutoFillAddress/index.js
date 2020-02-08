import React, { useState } from 'react'
import './AutoFillAddress.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Checkbox, Form } from 'semantic-ui-react'

export default function AutoFillAddress() {
    const [radioValue, setRadioValue] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [showAddressBox, setShowAddressBox] = useState(false)

    const onChangeRadioButton = (e) => {
        setRadioValue(e.target.value)
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
        setRadioValue("")
    }
    const iAcknowledgeClick = () => {
        setShowModal(false)
        setShowAddressBox(true)
    }
    return (
        <div>
            <label for="test1">Agree business address</label>
            <input type="radio" id="test1" name="radio-group" value="agree" onChange={onChangeRadioButton} />
            {
                showModal &&
                <Modal
                    show={showModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Agree!
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Are you sure?
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={closeModal}>Cancel</Button>
                        <Button onClick={iAcknowledgeClick}>I acknowledge</Button>
                    </Modal.Footer>
                </Modal>
            }
            {
                showAddressBox &&
                <div className="fill-address">
                    <form class="ui form">
                        <div class="field">
                            <label id="label-text">Address Line 1</label>
                            <input placeholder="First Name" />
                        </div>
                        <div class="field">
                            <label id="label-text">Address Line 2</label>
                            <input placeholder="First Name" />
                        </div>
                    </form>
                </div>
            }
        </div>
    )
}
