import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private dataService: DataService) {}

  onSubmit() {
    // Verificar credenciales aquí si lo deseas

    // Llamar al servicio para actualizar la contraseña
    this.dataService.updatePassword(this.email, this.password);
  }
}
