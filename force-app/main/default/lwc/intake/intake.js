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

import INTAKE_COORDINATOR_FIELD from '@salesforce/schema/AG_Intake__c.AG_Intake_Coordinator__c';

import REFERRAL_FIELD from '@salesforce/schema/AG_Intake__c.AG_Referral__c';

import SERVICE_PROVIDER_FIELD from '@salesforce/schema/AG_Intake__c.AG_Service_Provider__c';

import DEMOGRAPHIC_INFORMATION from '@salesforce/schema/AG_Intake__c.AG_Demographic_Information__c';

import INSURANCE_INFORMATION from '@salesforce/schema/AG_Intake__c.AG_Insurance_Information__c';


export default class Intake extends LightningElement {

    intake = INTAKE_OBJECT;

    @api recordId;

    fields = [REFERRAL_FIELD, INTAKE_COORDINATOR_FIELD, SERVICE_PROVIDER_FIELD, DEMOGRAPHIC_INFORMATION, INSURANCE_INFORMATION];

    handleSuccess(event) {
        const successEvent = new ShowToastEvent({
            title: "Success",
            message: "Intake record created successfully",
            variant: "success"
        });
        this.dispatchEvent(successEvent);
    }
}