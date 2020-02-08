import React from 'react'
import './LocalDirector.css'

export default function LocalDirector(props) {
    return (
        <div>
            <form class="ui form">
                <div class="field">
                    <label className="label">Director</label>
                    <input placeholder="Director" />
                    <button className="add-director-btn">Add Director</button>
                </div>
                <div class="field">
                    <label className="label">Shareholder</label>
                    <input placeholder="Shareholder" />
                    <button className="add-director-btn">Add Shareholder</button>
                </div>
                <div class="field">
                    <label className="label">First Name</label>
                    <input placeholder="First Name" />
                </div>
                <div class="field">
                    <label className="label">Email Address</label>
                    <input placeholder="Email" />
                </div>
                <div class="field">
                    <label>Individal or corporate shareholder</label>
                    <select id="cars">
                        <option value="a">Individual</option>
                        <option value="b">Corporate Shareholder</option>
                    </select>
                </div>
                <div class="field">
                    <label className="label">Company Name</label>
                    <input placeholder="Company Name" />
                </div>
                <button type="submit" className="director-button" onClick={props.onClickNext}>Next</button>
                <button type="submit" className="director-button" onClick={props.onClickPrevious}>Previous</button>
            </form>
        </div>
    )
}
