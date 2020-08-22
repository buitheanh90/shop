import { Directive, HostListener, ElementRef } from "@angular/core";

@Directive({
  selector: "[focusLogin]",
})
export class FormDirective {
  constructor(private el: ElementRef) {}

  @HostListener("click")
  onFormSubmit() {
    const invalidControl = this.el.nativeElement.querySelector(".ng-invalid");

    if (invalidControl) {
      invalidControl.focus();
    }
  }
}
