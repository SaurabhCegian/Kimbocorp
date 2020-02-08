import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import '../CreateBusinessForm1/CreateBusinessForm1.css'
// import faker from 'faker'
// import _ from 'lodash'

export default function MigrateBusinessForm() {

    return (
        <div className='CreateBusinessForm1'>
            <h2>Business Registration Form</h2>
            <form class="ui form">
                <div class="field">
                    <label className="label">UEN</label>
                    <input placeholder="First Name" />
                </div>
                <div class="field">
                    <label>SSIC - Company Activity</label>
                    <select id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div class="field">
                    <label>Describe your Business Activity:</label>
                    <input placeholder="Last Name" />
                </div>
                <div class="field">
                    <label>Why are you interested to start a business in Singapore?</label>
                    <select id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div class="field">
                    <label>What is your source of funds?</label>
                    <select id="cars">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <button type="submit" class="ui button">Submit</button>
            </form>
        </div>
    )
}

