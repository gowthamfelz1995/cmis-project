({
    navigateToParent: function (component, event, helper) {
        var event = $A.get("e.force:navigateToComponent");
        event.setParams({
            componentDef: "c:waitList",
            componentAttributes: {
                recordId: component.get("v.recordId")
            }
        });
        event.fire();
    }
})