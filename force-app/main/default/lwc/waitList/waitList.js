import {
    LightningElement,
    api
} from 'lwc';

import {
    NavigationMixin
} from 'lightning/navigation';

import {
    ShowToastEvent
} from 'lightning/platformShowToastEvent';

import waitListReferral from '@salesforce/apex/AG_Referral_CL.waitListReferral';

export default class WaitList extends NavigationMixin(LightningElement) {

    @api recordId;

    connectedCallback() {
        waitListReferral({
                recordId: this.recordId
            })
            .then((result) => {
                const successEvent = new ShowToastEvent({
                    title: "Success",
                    message: "The referral record waitlisted successfully",
                    variant: "success"
                });
                this.dispatchEvent(successEvent);
            })
            .catch((error) => {
                this.message = undefined;
                this.error = error;
            });
        this.handleCancel();
    }

    handleCancel() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'AG_Referral__c',
                actionName: 'view'
            }
        });
    }
}