import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private authService: AuthService, private router: Router) { }

  // метод для виконання авторизації
  onSubmit(): void {
    const { email, password } = this.loginForm.value;
    if (email && password) {
      this.authService.login(email, password).subscribe(
        response => {
          this.router.navigate(['/header']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  

}
