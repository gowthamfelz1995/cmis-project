import { LightningElement, wire,track } from 'lwc';
import SERVICE_RECORD from '@salesforce/schema/AG_Service__c';
import SERVICE_TYPE_FIELD from '@salesforce/schema/AG_Service__c.AG_Service_Type__c';
import { getPicklistValuesByRecordType,getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi'; 
import { NavigationMixin } from 'lightning/navigation';
export default class ServicePlanning extends NavigationMixin(LightningElement) {
    fromDate = ''
    toDate = ''
    treeModel;
    error;
    recordTypeIdValue = ''
    serviceObj = SERVICE_RECORD
    serviceId;
    refferalId = 'a026D000002cDGhQAM';
    handleSuccess(event) {
        this.serviceId = event.detail.id;
        console.log("this.serviceId-->"+this.serviceId)
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:  this.serviceId,
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
                recordId:  this.refferalId,
                objectApiName: 'AG_Referral__c',
                actionName: 'view'
            }
        });
    }

    @wire(getPicklistValues, {
        recordTypeId: '012000000000000AAA',
        fieldApiName: SERVICE_TYPE_FIELD
    })
    picklistValues({ error, data }) {
            if (data) {
                console.log('data-->'+JSON.stringify(data));
            } else {
                console.log('error-->'+error);
                }
        }
        handleFormSubmitted(event){
   
        }

    // buildTreeModel(picklistValues) {
    //     const treeNodes = [];
    //     Object.keys(picklistValues).forEach((picklist) => {
    //         treeNodes.push({
    //             label: picklist,
    //             items: picklistValues[picklist].values.map((item) => ({
    //                 label: item.label,
    //                 name: item.value
    //             }))
    //         });
    //     });
    //     return treeNodes;
    // }
    // GET PICKLIST VALUES 
    // @wire (getPicklistValues, {recordTypeId: '$objectInfo.defaultRecordTypeId', fieldApiName: SERVICE_TYPE_FIELD})
    // picklistValues({
    //     error,data
    // })
    // {if(data){
    //     this.picklistValues = data;
    // } else if(error){
    //     console.log(error);
    // }} 
   

    handleFromDateChanges(event){
        fromDate = event.target.value ;
    }
    handleToDateChanges(event){
        toDate = event.target.value ;
    }
}