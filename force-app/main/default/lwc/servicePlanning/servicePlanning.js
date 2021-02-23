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

import changeStatus from '@salesforce/apex/AG_Referral_CL.changeStatus';

export default class ServicePlanning extends NavigationMixin(LightningElement) {

    @api recordId;

    @api status = 'In Service';

    handleSuccess(event) {
        this.showNotification();
        this.changeStatusForReferral();
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'AG_Referral__c',
                actionName: 'view'
            }
        });
    }

    changeStatusForReferral() {
        changeStatus({
                recordId: this.recordId,
                status: this.status
            })
            .then((result) => {
                console.log("Status changed");
            })
            .catch((error) => {
                console.log("Error");
            })
    }

    navToRefferal() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'AG_Referral__c',
                actionName: 'view'
            }
        });
    }

    showNotification() {
        const evt = new ShowToastEvent({
            title: this.titleText,
            message: 'Service created successfully!',
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
}