import React from "react";
import "./styles.css"


const TermsOfUse = () => {
    return(
    <div className="terms-of-use">
        <h1 className="heading">Terms of Use</h1>
        <p className="first-paragraph">The terms and conditions set forth the conditions, clauses, terms and requirements related to using the platform.</p>
        <section className="requirements-section">
            <h2>Requirements:</h2>
            <p>You must be at least 14 years old to access or use the platform, including without limitation to complete a DevAsk account registration. By accessing or using the Services or the Network in any manner, you represent and warrant that you are at least 14 years of age. If you are under 14 years old, you may not, under any circumstances or for any reason, access or use the Services or Network in any manner, and may not provide any personal information to or on the Services or Network (including, for example, a name, address, telephone number or email address).</p>
        </section>
        <section className="rules-section">
            <h2>Rules:</h2>
            <ul>
            <li>Avoid the use of discriminatory or abusive languages as such could lead to immediate deactivation of your account.</li>
            <li>Any form of fraud or illegal activities are frown upon in the community and will lead to immediate deactivation if found guilty.</li>
            </ul>
        </section>
        <section className="deactivation-section">
            <h2>Account Deactivation:</h2>
            <p>Disregard for any of the stated terms will lead to deactivation. Account reactivation can be processed on contact with our customer care depending on the severity of offence.</p></section>
        <section className="copyright-section">
            <h2>Copyright information:</h2>
            <p>If you believe that content residing or accessible on the Network infringes a copyright, please send a notice of copyright infringement to any of our customer care agents.</p></section>
        <section className="billing-section">
            <h2>Billing and Subscription:</h2>
            <p>Check Pricing page</p>
        </section>
        <p className="update">Last Update: 15th November, 2022</p>

    </div>
)};

export default TermsOfUse;
