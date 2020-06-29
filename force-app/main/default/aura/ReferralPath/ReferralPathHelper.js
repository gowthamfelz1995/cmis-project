({
    getAgreementDetails: function (component) {
        var toastEvent = $A.get("e.force:showToast");
        let action = component.get("c.findReferral");
        action.setParams({
            "recordId": component.get("v.recordId")
        });
        action.setCallback(this, function (response) {
            if (response.getState() == 'SUCCESS') {
                let res = JSON.parse(response.getReturnValue());
                if (res.success) {
                    component.set("v.referral", res.data);
                    this.changeStatusPath(component);
                }
            } else {
                toastEvent.setParams({
                    "title": "Error!",
                    "type": "Error",
                    "message": "Something went wrong"
                });
                toastEvent.fire();
            }
        });
        $A.enqueueAction(action);
    },

    changeStatusPath: function (component) {
        let referralRecord = component.get("v.referral");
        let status = referralRecord.AG_Status__c;
        let currentStatus = '';

        if (status == 'In Referral') {
            currentStatus = 'inReferral';
        } else if (status == 'In Approval') {
            currentStatus = 'inApproval';
        } else if (status == 'Waitlisted') {
            currentStatus = 'waitlisted';
        } else if (status == "Approved") {
            currentStatus = "approved";
        } else if (status == "In Take") {
            currentStatus = "inTake";
        } 
        else if (status == "In Assessment") {
            currentStatus = "assessment";
        } else if (status == 'In Service') {
            currentStatus = 'inService';
        } else if (status == 'Discharged') {
            currentStatus = 'AllDone';
        }
        component.set("v.pathValue", currentStatus);
    }
})