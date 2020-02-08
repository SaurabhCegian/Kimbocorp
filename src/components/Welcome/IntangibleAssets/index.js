import React from 'react'
import './IntangibleAssets.css'

export default function IntangibleAssets(props) {
    const onClickNext = (e) => {
        e.preventDefault()
        props.setCurrentCompFun('next')
    }
    const onClickPrevious = (e) => {
        e.preventDefault()
        props.setCurrentCompFun('prev')
    }
    return (
        <div className="intangible-asset">
            <form class="ui form">
                <div class="field">
                    <label id="label-text">Accounting</label>
                    <select id="cars">
                        <option value="a">Select</option>
                        <option value="a">Entrepreneur</option>
                        <option value="b">Startup</option>
                        <option value="a">SME</option>
                        <option value="b">Corporate</option>
                    </select>
                </div>

                <div class="field">
                    <label id="label-text">Trademark</label>
                    <select id="cars">
                        <option value="a">Select</option>
                        <option value="a">Singapore registered Trademark</option>
                    </select>
                </div>

                <div class="field">
                    <label id="label-text">Website</label>
                    <select id="cars">
                        <option value="a">Corporate website</option>
                        <option value="a">E-commerce website</option>
                    </select>
                </div>

                <div class="field">
                    <label id="label-text">I do not need one now</label>
                    <select id="cars">
                        <option value="a">Yes</option>
                        <option value="a">No</option>
                    </select>
                </div>
                <h3>Others</h3>
                <div class="field">
                    <label id="label-text">CBIA</label>
                    <select id="cars">
                        <option value="cbia">Contract-based intangible assets</option>
                        <option value="cbia"> Singapore company operating license</option>
                        <option value="cbia">Singapore bank corporate account</option>
                        <option value="cbia">Sales and Purchase contracts drafting</option>
                        <option value="cbia">Supplier agreements (corporate offers) drafts</option>
                        <option value="cbia">Leasing agreements drafting</option>
                        <option value="cbia">Distribution agreements drafting</option>
                        <option value="cbia">Franchisee agreements drafting</option>
                        <option value="cbia">Employment contracts drafting</option>
                        <option value="cbia">Employment passes acquisition</option>
                        <option value="cbia">Use rights (such as use of public space)</option>
                        <option value="cbia">Individual Shareholder agreements</option>
                        <option value="cbia">Individual loan agreements</option>
                        <option value="cbia">Patents registration</option>
                        <option value="cbia">Public-Private memorandam of understanding</option>
                        <option value="cbia">Corporate Equity (and Debt) subscription letters of intent</option>
                        <option value="cbia">Sales channel partners agreements</option>
                        <option value="cbia">BOT, BOOT, EPC or DBO tenders</option>
                        <option value="cbia">Trade agreements and licenses</option>
                        <option value="cbia">Grant and Subsidies applications</option>
                    </select>
                </div>
                <div class="field">
                    <label id="label-text">RRIA</label>
                    <select id="cars">
                        <option value="rria">Relationship-related intangible assets</option>
                        <option value="rria">New local nominee director relationships</option>
                        <option value="rria">New banking relationships</option>
                        <option value="rria">New customers relationships</option>
                        <option value="rria">New supplier relationships</option>
                        <option value="rria">New tenant relationships</option>
                        <option value="rria">New distributor relationships</option>
                        <option value="rria">New franchisee relationships</option>
                        <option value="rria">New employee relationships</option>
                        <option value="rria">New right-to-use relationships</option>
                        <option value="rria">New investor relationships</option>
                        <option value="rria">New financier relationships</option>
                        <option value="rria">New technologist relationships</option>
                        <option value="rria">New government relationships</option>
                        <option value="rria">New institutional funder relationships</option>
                        <option value="rria">New sales person relationships</option>
                        <option value="rria">New construction contractor relationships</option>
                        <option value="rria">New influencer relationships</option>
                        <option value="rria">New grant approver relationships</option>
                        <option value="rria">New tax accountant relationships</option>
                    </select>
                </div>
                <div class="field">
                    <label id="label-text">CRIA</label>
                    <select id="cars">
                        <option value="cria">Copyright-related intangible assets</option>
                        <option value="cria">    Protection for traditional literacy works including lyrics, composition, books</option>
                        <option value="cria">Protection for digital literacy works including source codes</option>
                        <option value="cria">Protection for musical works such as lyrics, compositions and advertising jingles</option>
                        <option value="cria">Protection for photos, images and pictures</option>
                        <option value="cria">Protection for videos and podcasts</option>
                        <option value="cria">Protection for graphical user interface (GUI)</option>
                        <option value="cria">Protection for trade secrets (formuals, algos)</option>
                        <option value="cria">Protection for company and product logos and names</option>
                    </select>
                </div>

                <div class="field">
                    <label id="label-text">CIIA</label>
                    <select id="cars">
                        <option value="ciia">Customer-related intangible assets</option>
                        <option value="ciia">Customer lists</option>
                        <option value="ciia">Order backlog</option>
                    </select>
                </div>
                <div class="field">
                    <label id="label-text">TIIA</label>
                    <select name="tiia">
                        <option value="tiia">Technology-based intangible assets</option>
                        <option value="tiia">Software acquisition</option>
                        <option value="tiia">Website (inc. SAAS) acquisition</option>
                        <option value="tiia">Mobile App (android and IOS) acquisiton</option>
                        <option value="tiia">Database acquisiton</option>
                    </select>
                </div>
                <div class="field">
                    <label id="label-text">Others</label>
                    <textarea placeholder="Others" />
                </div>
                <button type="submit" className="director-button" onClick={onClickNext}>Next</button>
                <button type="submit" className="director-button" onClick={onClickPrevious}>Previous</button>
            </form>
        </div>
    )
}
