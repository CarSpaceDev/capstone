import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-registration',
  templateUrl: './driver-registration.component.html',
  styleUrls: ['./driver-registration.component.css']
})
export class DriverRegistrationComponent implements OnInit {


  constructor(
    private formBuilder: FormBuilder,
    router: Router
  ) { }

  ngOnInit(): void {
 
  }
}
