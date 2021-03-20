import React from 'react';

const ResponseTab = (props) => {
    const { totalEmails, validEmails, invalidEmails, spamEmails, acceptableEmails, disposable, unknown, duplicate } = props;
    return (
        <div className='email-response-tab'>
            <div className='total-emails'>
                <strong>Total Emails : {totalEmails} emails</strong>
            </div>
            <div className='response-pills'>
                <div className='valid-email pills'>
                    <p>{validEmails} Valid</p>
                </div>
                <div className='invalid-email pills'>
                    <p>{invalidEmails} Invalid</p>
                </div>
                <div className='spam-email pills'>
                    <p>{spamEmails} Spam Traps</p>
                </div>
                <div className='accept-all pills'>
                    <p>{acceptableEmails} Accept All</p>
                </div>
                <div className='disposable pills'>
                    <p>{disposable} Disposable</p>
                </div>
                <div className='unknown pills'>
                    <p>{unknown} Unknown</p>
                </div>
                <div className='duplicate pills'>
                    <p>{duplicate} Duplicate</p>
                </div>
            </div>
        </div>
    )
}

export default ResponseTab
