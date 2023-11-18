import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';
import { UserModule } from 'src/app/models/user.module';
import { UserDto } from 'src/app/models/user-dto.model';
import { FormControl, Validators } from '@angular/forms';
import { LoginUser } from 'src/app/models/login-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  RegisterData!: UserDto;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.RegisterData = {} as UserDto;
  }
  control!: boolean;
  userModel!: UserModule;
  firstTry: boolean = true;
  loading = false;
  nombreControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]);
  apellidoControl = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl: FormControl = new FormControl('', Validators.required);
  confirmpasswordControl: FormControl = new FormControl('', Validators.required);

  onSubmit() {
    if (this.validateStart()) {
      this.RegisterData.firstname = String(this.nombreControl.value);
      this.RegisterData.lastname = String(this.apellidoControl.value);
      this.RegisterData.email = String(this.emailFormControl.value);
      this.RegisterData.password = this.passwordControl.value;
      this.control = true;
    } else {
      console.log('Incomplete data');
      this.control = false;
    }
    this.RegisterData.role = "USER";
    this.loading = true;
    this.authService.newuser(this.RegisterData).subscribe(
      (response) => {
        this.authService.login(new LoginUser(this.RegisterData.email, this.RegisterData.password)).subscribe();
        this.tokenService.setToken(response.access_token);
        this.tokenService.setUserId(response.user_id);
        this.router.navigate(['/home']);
        this.loading = false;
      },
      (error) => {
        this.firstTry = false;
        this.loading = false;
        console.log(error);
      }
    );
  }

  validateStart() {
    if (
      this.emailFormControl.hasError('required') ||
      this.emailFormControl.hasError('email') ||
      this.passwordControl.hasError('required') ||
      this.confirmpasswordControl.hasError('required') ||
      this.nombreControl.hasError('required') ||
      this.nombreControl.hasError('pattern') ||
      this.apellidoControl.hasError('required') ||
      this.apellidoControl.hasError('pattern') ||
      this.passwordControl.value === '' ||
      this.confirmpasswordControl.value === ''
    ) {
      return false;
    } else {
      this.control = true;
      return true;
    }
  }

  validatePassword() {
    if (this.passwordControl.value === this.confirmpasswordControl.value) {
      return true;
    } else {
      return false;
    }
  }

}
