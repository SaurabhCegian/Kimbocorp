import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import '../CreateBusinessForm1/CreateBusinessForm1.css'

export default function PersonalInformation(props) {
    const [value, setValue] = useState()
    const onClickNext = (e) => {
        e.preventDefault()
        props.setCurrentCompFun('next')
    }
    const onClickPrevious = (e) => {
        e.preventDefault()
        props.setCurrentCompFun('prev')
    }
    return (
        <div className='CreateBusinessForm1'>
            <form class="ui form">
                <div class="field">
                    <label id="label-text" >First Name</label>
                    <input placeholder="First Name" />
                </div>
                <div class="field">
                    <label id="label-text" >Last Name</label>
                    <input placeholder="Last Name" />
                </div>
                <PhoneInput
                    placeholder="Enter phone number"
                    value={value}
                    onChange={setValue} />
                <div class="field">
                    <label id="label-text" >Last Name</label>
                    <input type="password" placeholder="Last Name" />
                </div>

                <div class="field">
                    <label id="label-text" >First Name</label>
                    <input placeholder="First Name" />
                </div>
                <div class="field">
                    <label id="label-text" >Benificial Owner</label>
                    Yes: <input type="radio" />
                    No: <input type="radio" />
                </div>
                <h3>Please upload the following documents</h3>
                <div class="field">
                    <label id="label-text">A signed copy of your passport</label>
                    <input type="file" />
                </div>
                <div class="field">
                    <label id="label-text">A signed copy of your passport</label>
                    <input type="file" />
                </div>

                <button type="submit" className="director-button" onClick={onClickNext}>Submit</button>
                <button type="submit" className="director-button" onClick={onClickPrevious}>Previous</button>
            </form>
        </div>
    )
}
