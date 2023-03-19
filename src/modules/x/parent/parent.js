import { LightningElement, track, api } from 'lwc';

export default class Parent extends LightningElement {
  @track isChecked = false;

  handleParentChange(event) {
    console.log('handleParentChange')
    this.isChecked = event.target.checked;
    const childComponent = this.template.querySelector('x-child');
    childComponent.updateChildCheckboxValue(this.isChecked);
  }

  handleChildChange(event) {
    this.isChecked = event.detail.value;
  }
}
