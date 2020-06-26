import { LightningElement, wire,track } from 'lwc';
import SERVICE_RECORD from '@salesforce/schema/AG_Service__c';
import SERVICE_TYPE_FIELD from '@salesforce/schema/AG_Service__c.AG_Service_Type__c';
import { getPicklistValuesByRecordType,getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi'; 
export default class ServicePlanning extends LightningElement {
    fromDate = ''
    toDate = ''
    treeModel;
    error;
    recordTypeIdValue = ''
    serviceObj = SERVICE_RECORD
   

   
    // @wire (getObjectInfo, {objectApiName: SERVICE_RECORD})
    // objectInfo({
    //     error,data
    // })
    // {if(data){
    //     console.log(data.defaultRecordTypeId); 
    // } else if(error){
    //     console.log(error);
    // }}
 
    // @wire(getPicklistValuesByRecordType, {
    //     objectApiName: SERVICE_RECORD,
    //     recordTypeId: '012000000000000AAA'
    // })
    // wiredValues({ error, data }) {
    //     if (data) {
    //         console.log('error-->'+JSON.stringify(data));
    //         this.treeModel = this.buildTreeModel(data.picklistFieldValues);
    //         this.error = undefined;
    //     } else {
    //         console.log('error-->'+error);
    //         this.error = error;
    //         this.treeModel = undefined;
    //     }
    // }

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