import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './CreateBusinessForm1.css'

export default function CreateBusinessForm1(props) {

    const onClickNext = (e) => {
        e.preventDefault()
        props.setCurrentCompFun('next')
    }
    const onClickPrevious = (e) => {
        e.preventDefault()
    }
    return (
        <div className='CreateBusinessForm1'>
            <form class="ui form">
                <div class="field">
                    <label className="label">Proposed Name - First Choice</label>
                    <input placeholder="First Name" />
                </div>
                <div class="field">
                    <label>SSIC - Company Activity</label>
                    <select id="cars">
                        <option value="a">A</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                    </select>
                </div>
                <div class="field">
                    <label>Describe your Business Activity:</label>
                    <input placeholder="Last Name" />
                </div>
                <div class="field">
                    <label>Why are you interested to start a business in Singapore?</label>
                    <select id="cars">
                        <option value="To seek investors">To seek investors</option>
                        <option value="To seek new business opportunits">To seek new business opportunits</option>
                        <option value="To expand into asia">To expand into asia</option>
                        <option value="To leverage banking system">To leverage banking system</option>
                    </select>
                </div>
                <div class="field">
                    <label>What is your source of funds?</label>
                    <select id="cars">
                        <option value="Business Revnue">Business Revnue</option>
                        <option value="Personal Savings">Personal Savings</option>
                        <option value="Investors">Investors</option>
                    </select>
                </div>
                <button type="submit" className="create-business-button" onClick={onClickNext}>Next</button>
            </form>
        </div>
    )
}

