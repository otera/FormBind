import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  public form = this.fb.group({
    items: this.fb.array([])
  });

  constructor(private fb: FormBuilder) {}

  get items(): FormArray {
    return this.form.get("items") as FormArray;
  }

  ngOnInit() {
    for (let index = 0; index < 3; index++) {
      this.items.push(new FormControl("", []));
    }

    console.log(this.form);
  }
}
