import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from  '@angular/forms';
@Component({
  selector: 'app-blogin',
  templateUrl: './blogin.component.html',
  styleUrls: ['./blogin.component.css']
})
export class BloginComponent implements OnInit {

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
      password:['']
    });
  }

  onSubmit() {
      console.log('Your form data : ', this.contactForm.value );
     // let fv=JSON.parse(localStorage.getItem('form-data'));
      //if(fv==null)
    //  alert("NO");
    //  else
    /*alert(fv);
    if((localStorage.getItem('fName')!==null)){
    alert("yes");}
    else{
      alert("no");
       localStorage.getItem('fullName'))*/
  /*     var sa=JSON.parse(localStorage.getItem("aa"));
       console.log(sa[1][0]);
      for(var i=0;i<10;i++){*/
      if ((this.contactForm.value.fullName == localStorage.getItem("fullName")&& (this.contactForm.value.password == localStorage.getItem('password')))){
      alert("yes user exist- WELCOME");}
      else{
      alert("invalid");}
      }}