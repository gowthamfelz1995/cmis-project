import { LightningElement } from 'lwc';

export default class ServicePlanning extends LightningElement {
    fromDate = ''
    toDate = ''

    handleFromDateChanges(event){
        fromDate = event.target.value ;
    }
    handleToDateChanges(event){
        toDate = event.target.value ;
    }
}