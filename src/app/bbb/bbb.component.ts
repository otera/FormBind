import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-bbb",
  templateUrl: "./bbb.component.html",
  styleUrls: ["./bbb.component.scss"]
})
export class BbbComponent implements OnInit {
  @Input() mainForm: FormGroup;

  constructor() {}

  get items(): FormArray {
    return this.mainForm.get("items") as FormArray;
  }

  ngOnInit() {}
}
