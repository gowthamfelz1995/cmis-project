// This file is generated as an Apex representation of the
//     corresponding sObject and its fields.
// This read-only file is used by the Apex Language Server to
//     provide code smartness, and is deleted each time you
//     refresh your sObject definitions.
// To edit your sObjects and their fields, edit the corresponding
//     .object-meta.xml and .field-meta.xml files.

global class MailmergeTemplate {
    global Id Id;
    global Boolean IsDeleted;
    global String Name;
    global String Description;
    global String Filename;
    global Integer BodyLength;
    global String Category;
    global Blob Body;
    global Datetime LastUsedDate;
    global Datetime CreatedDate;
    global User CreatedBy;
    global Id CreatedById;
    global Datetime LastModifiedDate;
    global User LastModifiedBy;
    global Id LastModifiedById;
    global Datetime SystemModstamp;
    global Boolean SecurityOptionsAttachmentScannedForXSS;
    global Boolean SecurityOptionsAttachmentHasXSSThreat;
    global Boolean SecurityOptionsAttachmentScannedforFlash;
    global Boolean SecurityOptionsAttachmentHasFlash;

    global MailmergeTemplate () 
    {
    }
}