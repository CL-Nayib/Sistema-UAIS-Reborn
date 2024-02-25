import { Component, OnInit } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';

import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { FormControl, Validators } from '@angular/forms';
import { PopUpComponent } from '../components/pop-up/pop-up.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './services/login.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './css/util.css', './bootstrap/css/bootstrap.min.css'] // Se agregan los estilos de bootstrap
})

export class LoginComponent implements OnInit {

  faUser = faUser;
  faKey = faKey;
  faFontAwesome = faFontAwesome;
  showComponent = false;
  matricula = new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]);
  contrasenia = new FormControl('', [Validators.required, Validators.minLength(8)]);
  rememberMe = new FormControl(false);

  constructor(private router: Router, private http: HttpClient, private loginService: LoginService) { }

  ngOnInit() {
    // Comprobar si hay datos guardados en el almacenamiento local
    const savedMatricula = localStorage.getItem('matricula');
    const savedContrasenia = localStorage.getItem('contrasenia');

    if (savedMatricula && savedContrasenia) {
      this.matricula.setValue(savedMatricula);
      this.contrasenia.setValue(savedContrasenia);
    }
  }

  onSubmit() {

    // Obtener los valores actuales de matrícula y contraseña desde los FormControl

    const usuario = {
      matricula: this.matricula.value,
      contrasenia: this.contrasenia.value
    };



    const rememberMeChecked = this.rememberMe.value; // Verificar si el checkbox está marcado

    if (rememberMeChecked) {
      // Validar que los valores no sean null antes de guardar en localStorage
      if (usuario.matricula !== null && usuario.contrasenia !== null) {
        // Guardar la matrícula y la contraseña en el almacenamiento local
        localStorage.setItem('matricula', usuario.matricula);
        localStorage.setItem('contrasenia', usuario.contrasenia);
      }
    }

    this.loginService.login(usuario).subscribe(
      (data) => {
        console.log('Respuesta de la api:', data);
        this.loginService.setToken(data.token);
        if (data.rol === 1) {
          this.router.navigate(['/profesional']);
        } else {
          this.router.navigate(['/']);
        }

      },
      (error) => {
        console.error('Error en la solicitud a la api', error);
      }
    );











  }

}

