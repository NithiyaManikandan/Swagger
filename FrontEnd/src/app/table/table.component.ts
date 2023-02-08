import { Component, Input, OnInit } from "@angular/core";
import { UserServiceService } from "../service/user-service.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { debounceTime, Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  title: string = "table";
  public userData: any = [];
  public userForm: FormGroup | any;
  private userName = new  Subject();

  constructor(private service: UserServiceService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.getAllUser();
    this.userForm
      .get("name")
      .valueChanges.pipe(takeUntil(this.userName), debounceTime(350))
      .subscribe((value: any) => {
        if (value) {
          this.userData = this.userData.filter((s: any) =>
            s.name.toLowerCase().includes(value)
          );
        } else {
          this.getAllUser();
        }
      });
  }

  getAllUser() {
    this.service.getUserData().subscribe((res: any) => {
      this.userData = res["doc"];
    });
  }
  deleteData(id: string) {
    this.service.deleteUserById(id).subscribe((res) => {
      console.log(res);
    });
    window.location.reload();
  }
}
