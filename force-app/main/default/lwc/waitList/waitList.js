import {
    LightningElement,
    track,
    wire
} from 'lwc';

import {
    NavigationMixin
} from 'lightning/navigation';


import changeStatusOfReferral from '@salesforce/apex/AG_Referral_CL.changeStatusOfReferral';

export default class WaitList extends NavigationMixin(LightningElement) {

    @track recordId;

    @wire(changeStatusOfReferral, {
        recordId: '$recordId'
    }) referral;

    connectedCallback() {
        console.log("Entered");
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