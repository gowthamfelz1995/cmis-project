import {
    LightningElement,
    api
} from 'lwc';

import {
    ShowToastEvent
} from 'lightning/platformShowToastEvent';

import {
    NavigationMixin
} from 'lightning/navigation';

import getServiceProviderForAssessment from '@salesforce/apex/AG_Referral_CL.getServiceProviderForAssessment';

import ASSESSMENT_OBJECT from '@salesforce/schema/AG_Assessment__c';

export default class Assessment extends NavigationMixin(LightningElement) {

    assessment = ASSESSMENT_OBJECT;

    @api recordId;

    @api serviceProvider;

    connectedCallback() {
        getServiceProviderForAssessment({
                recordId: this.recordId
            })
            .then(result => {
                const response = JSON.parse(result);
                this.serviceProvider = response.data.AG_Service_Provider__c;
            })
            .catch((error) => {
                this.error = error;
            });
    }

    handleSuccess(event) {
        const successEvent = new ShowToastEvent({
            title: "Success",
            message: "Assessment record created successfully",
            variant: "success"
        });
        this.dispatchEvent(successEvent);
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