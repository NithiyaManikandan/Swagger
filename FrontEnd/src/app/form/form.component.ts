import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { UserDetail } from '../userDetail';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  title : string ='form'
  public userForm: FormGroup | any;
  public userId !: string | null;
  public userData: any = [];
  public updateChoice = true

  constructor(private fb: FormBuilder, private param: ActivatedRoute, private service: UserServiceService) {
    this.userForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,4}")])
    })
  }

  ngOnInit(): void {

    this.userId = this.param.snapshot.paramMap.get('id')
    console.log(this.userId);
    if (this.userId) {
      this.service.getUserDataById(this.userId).subscribe(
        (res: any) =>{
          console.log(res['doc']);
          this.editUserData(res['doc'])
        } 
      )
    }

  }

  get name() {
    return this.userForm.get('name')
  }
  get email() {
    return this.userForm.get('email')
  }
  get phone() {
    return this.userForm.get('phone')
  }

  editUserData(data: UserDetail) {
    console.log(data);
    
    this.updateChoice = false
    this.userForm.patchValue({
      name: data.name,
      email: data.email,
      phone: data.phone
    })
  }

  onDataSubmit(userData: FormGroup) {
    console.log(userData);
    this.service.postUserData(userData).subscribe((res: any) => {
      console.log(res);
    })
  }
  onDataUpdate(userData: FormGroup, id: string | null) {
    console.log(userData);
    this.service.editUserData(userData, id).subscribe((res: any) => {
      console.log(res);
    })
  }
}
