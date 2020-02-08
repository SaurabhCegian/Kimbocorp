import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import '../CreateBusinessForm1/CreateBusinessForm1.css'

export default function MigrateBusinessForm(props) {
    const onClickNext = (e) => {
        e.preventDefault()
        props.setCurrentCompFun('next')
    }
    return (
        <div className='CreateBusinessForm1'>
            <h2>Business Registration Form</h2>
            <form class="ui form">
                <div class="field">
                    <label id="label-text" className="label">UEN</label>
                    <input placeholder="First Name" />
                </div>
                <div class="field">
                    <label id="label-text">SSIC - Company Activity</label>
                    <select id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div class="field">
                    <label id="label-text">Describe your Business Activity:</label>
                    <input placeholder="Last Name" />
                </div>
                <div class="field">
                    <label id="label-text">Why are you interested to start a business in Singapore?</label>
                    <select id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div class="field">
                    <label id="label-text">What is your source of funds?</label>
                    <select id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <button type="submit" className="create-business-button" onClick={onClickNext}>Next</button>
            </form>
        </div>
    )
}

