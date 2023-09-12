import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent {
  email: string="";
  newPassword: string="";

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe(params => {
      this.email = params['email'];
    });
  }

  changePassword() {
    this.dataService.updatePassword(this.email, this.newPassword);
    alert('Contraseña cambiada con éxito');
    // Puedes redirigir a una página diferente después de cambiar la contraseña si lo deseas
  }
}