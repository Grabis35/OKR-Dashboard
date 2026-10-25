import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import OKR_REFRESH_CHANNEL from '@salesforce/messageChannel/okrRefreshChannel__c';

export default class OkrPageListener extends LightningElement {
    @wire(MessageContext)
    messageContext;

    
    renderedCallback() {
        publish(this.messageContext, OKR_REFRESH_CHANNEL, { recordUpdated: true });
    }
}