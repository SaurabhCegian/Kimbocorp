import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import './FillAddress.css';

export default function FillAddress() {
    return (
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
    )
}
