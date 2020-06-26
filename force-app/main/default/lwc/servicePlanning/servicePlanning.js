import { LightningElement, wire,track , api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ServicePlanning extends NavigationMixin(LightningElement) {
    @api recordId;
    refferalId = 'a026D000002cDGhQAM';
    handleSuccess(event) {
        this.showNotification();
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:event.detail.id,
                objectApiName: 'AG_Service__c',
                actionName: 'view'
            }
        });
        console.log("this.serviceId-->"+this.serviceId)
    }
    navToRefferal(){
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:  this.recordId,
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