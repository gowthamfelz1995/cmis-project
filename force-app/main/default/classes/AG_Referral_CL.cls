public with sharing class AG_Referral_CL {

    @AuraEnabled
    public static String findReferral(Id recordId){
        try{
            AG_Referral__c referral = getReferralDetails(recordId);
            return '{"success": true, "data": '+JSON.serialize(referral)+'}';
        }
        catch(Exception e){
            System.debug(e.getLineNumber());
            System.debug(e.getMessage());
            return '{"success": false, "message": "'+e.getMessage()+'"}';
        }
    }

    public static AG_Referral__c getReferralDetails(Id recordId){
        try{
            String query = 'SELECT Id,Name,AG_Contact_Person__c,AG_Date_Of_Referral__c,AG_Phone_Number__c,AG_Reffered_By__c,AG_Source_Name__c,AG_Status__c FROM AG_Referral__c WHERE Id =: recordId';
            return Database.query(query);
        }
        catch(Exception e){
            System.debug(e.getLineNumber());
            System.debug(e.getMessage());
        }
        return null;
    }
}
