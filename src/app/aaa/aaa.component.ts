import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-aaa",
  templateUrl: "./aaa.component.html",
  styleUrls: ["./aaa.component.scss"]
})
export class AaaComponent implements OnInit {
  @Input() mainForm: FormGroup;

  constructor() {}

  get items(): FormArray {
    return this.mainForm.get("items") as FormArray;
  }

  ngOnInit() {}
}
