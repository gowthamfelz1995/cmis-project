import {
    LightningElement,
    api,
} from 'lwc';

import {
    ShowToastEvent
} from 'lightning/platformShowToastEvent';

import {
    NavigationMixin
} from 'lightning/navigation';

import INTAKE_OBJECT from '@salesforce/schema/AG_Intake__c';

export default class Intake extends NavigationMixin(LightningElement) {

    intake = INTAKE_OBJECT;

    @api recordId;

    handleSuccess(event) {
        const successEvent = new ShowToastEvent({
            title: "Success",
            message: "Intake record created successfully",
            variant: "success"
        });
        this.dispatchEvent(successEvent);
        this.handleCancel(event);
    }

    handleCancel(event) {
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