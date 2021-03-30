import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
  }
  title = 'reg-app';
  contactForm: FormGroup;
  constructor(public formBuilder: FormBuilder) {
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = this.formBuilder.group({
      fullName: [''],  
      email: [''],
      message: [''],
      password:[''],
      repassword:['']
    });
    localStorage.setItem("fullName", "defaultme");
      localStorage.setItem("password", "defaultme");
  }

  onSubmit() {
    var a = new Array();
      console.log('Your form data : ', this.contactForm.value );
      //console.log(localStorage.setItem('fName',JSON.stringify(this.contactForm.value.fullName)));
     /*  var a= Array(10);
      for(var i=0;i<a.length;i++){
        a[i]= new Array(2);
      }
      a[1].push(this.contactForm.value.fullName,this.contactForm.value.password);
      console.log(a);
      localStorage.setItem("aa",JSON.stringify(a));*/
     localStorage.setItem("fullName", this.contactForm.value.fullName);
      localStorage.setItem("password", this.contactForm.value.password);
  }
}