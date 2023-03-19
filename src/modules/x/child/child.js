import { LightningElement, api } from 'lwc';

export default class Child extends LightningElement {
  @api isChecked = false;

  @api
  updateChildCheckboxValue(value) {
    this.isChecked = value;
  }

  handleChildChange(event) {
    this.isChecked = event.target.checked;
    const childChangeEvent = new CustomEvent('childchange', { detail: { value: this.isChecked } });
    this.dispatchEvent(childChangeEvent);
  }
}
