import { Component, OnInit } from '@angular/core';
import { UserModule } from 'src/app/models/user.module';
import { LoginUser } from 'src/app/models/login-user';
import { UserService } from 'src/app/services/user.service';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  wrongCredentials: boolean = false;
  user!: UserModule;
  isLogged = false;
  loginUser!: LoginUser;
  loading = false;
  
  constructor(
    private userSerivce: UserService,
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit(): void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
      if(this.isLogged){
        this.router.navigate(['/home']);
      }
    }
  }

  onSubmit(){
    this.loginUser = new LoginUser(
      this.email.trim(), this.password.trim()
    );
    console.log(this.loginUser);
    this.loading =true;
    this.authService.login(this.loginUser).subscribe(
      data => {
        this.isLogged = true;
        this.tokenService.setToken(data.access_token);
        this.tokenService.setUserId(data.user_id)
        this.router.navigate(['/home'])
        this.loading = false;
      },
      (error: any) => {
        this.wrongCredentials = true;
        this.loading = false;
      }
    )
  }
}