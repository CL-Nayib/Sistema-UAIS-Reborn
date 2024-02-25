// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';

@Injectable({
   providedIn: 'root',
})
export class AuthGuard implements CanActivate {
   constructor(private loginService: LoginService, private router: Router) { }

   canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
   ): boolean {
      const token = this.loginService.getToken();

      if (token) {
         // Decodificar el token para obtener información, como el rol del usuario
         const tokenPayload = JSON.parse(atob(token.split('.')[1]));

         // Verificar el rol del usuario y permitir o denegar el acceso según sea necesario
         if (tokenPayload && tokenPayload.rol === 1) {
            return true; // Permitir el acceso para el rol de administrador
         } else {
            // Redirigir a una página de acceso no autorizado o a otra ruta
            this.router.navigate(['/unauthorized']);
            return false;
         }
      } else {
         // Redirigir a la página de inicio de sesión si no hay token
         this.router.navigate(['/login']);
         return false;
      }
   }
}
