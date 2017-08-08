import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms'

import { AuthService } from './auth.service'

@Component({
  templateUrl: 'app/user/profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { background-color: #E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup

  constructor(
    private authService: AuthService,
    private router: Router) {
  }

  ngOnInit() {
    let firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[A-Z][a-z]*')])
    let lastName = new FormControl(this.authService.currentUser.lastName, Validators.required)
    this.profileForm = new FormGroup({
      firstName: firstName,
      lastName: lastName
    })
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    }
  }

  validateFormControl(formControl: FormControl): boolean {
    return formControl && (formControl.valid || formControl.untouched)
  }

  cancel() {
    this.router.navigate(['events'])
  }
}