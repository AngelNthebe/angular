import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  user: any;
  users: any;

  constructor(private api: ServicesService, private snackBar: MatSnackBar, private router: Router,
   ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })

  }
  signIn(): any {

    if (!this.loginForm.valid) return
    let logInForm = this.loginForm.value
let role = logInForm.role
    this.api.genericPost('/log-in', logInForm)
      .subscribe({
        next: (res) => {
         
      if(role === 'user' ){
        this.router.navigate(['/home'])
      }else(role === '2nduser'){
        this.router.navigate(['/2nd user home'])
      
      } else {
        
      (this.role === '3rd user') {
        this.router.navigate(['/3rd user home'])
      } 
      sessionStorage.setItem("user",JSON.stringify(res) )
        },
        error: (err) => {
          this.snackBar.open(err.error.Error, 'OK', { duration: 3000 })
          console.log(err)
        },
        complete: () => { }
      })
  }
}
