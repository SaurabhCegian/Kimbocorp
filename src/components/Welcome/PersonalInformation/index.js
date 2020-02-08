import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import './PersonalInformation.css'

export default function PersonalInformation(props) {
    const [value, setValue] = useState()
    return (
        <div className="personal-information">
            <form class="ui form">
                <div class="field">
                    <label className="label">First Name</label>
                    <input placeholder="First Name" />
                </div>
                <div class="field">
                    <label className="label">Last Name</label>
                    <input placeholder="Last Name" />
                </div>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue} />
                <div class="field">
                    <label className="label">Last Name</label>
                    <input type="password" placeholder="Last Name" />
                </div>

                <div class="field">
                    <label className="label">First Name</label>
                    <input placeholder="First Name" />
                </div>
                <div class="field">
                    <label className="label">Benificial Owner</label>
                    Yes: <input type="radio" />
                    No: <input type="radio" />
                </div>
                <h3>Please upload the following documents</h3>
                <div class="field">
                    <label>A signed copy of your passport</label>
                    <input type="file" />
                </div>
                <div class="field">
                    <label>A signed copy of your passport</label>
                    <input type="file" />
                </div>

                <button type="submit" className="director-button" onClick={props.onClickNext}>Submit</button>
                <button type="submit" className="director-button" onClick={props.onClickPrevious}>Previous</button>
            </form>
        </div>
    )
}
