import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
 
  form: FormGroup = new FormGroup({
    emailUsuario: new FormControl('', [Validators.required]),
    passwordUsuario: new FormControl('', [Validators.required])
  });

  usuarios: User[] = [];
  mensaje: string = '';

  constructor(
    private UserService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  
  login(): void {
    const emailUser = this.form.get('emailUser')?.value;
    const passwordUser = this.form.get('passwordUser')?.value;
  
    this.UserService.list().subscribe((usuarios) => {
      console.log('funca0'); //llega hasta aquí
      this.usuarios = usuarios;
      // error en la sgt linea: this.usuarios.find is not a function
      const usuario = this.usuarios.find(
        (u) => u.emailUser === emailUser && u.passwordUser === passwordUser
      );
      console.log('funca1');

      if (usuario) {
        this.mensaje = 'Inicio de sesión exitoso';
        console.log(this.mensaje);
        localStorage.setItem('userId', usuario.id.toString());
        timer(2000).subscribe(() => {
          this.router.navigate(['home']).then(() => {
            window.location.reload();
          });
        });
      } else {
        this.mensaje = 'Usuario y/o contraseña incorrectos';
      }
     
  })};
}