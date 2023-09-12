import { Injectable } from '@angular/core';
interface User {
  email: string;
  contrasenia: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: User[] = [
    {
    email:"randomuser789@gmail.com",
    contrasenia:"1234"
  },
  {
    email:"exampleuser456@yahoo.com",
    contrasenia:"1234"
  },
  {
    email:"testemail123@hotmail.com",
    contrasenia:"1234"
  },
  {
    email:"dummyaccount@example.com",
    contrasenia:"1234"
  },
  {
    email:"tempemailuser789@outlook.com",
    contrasenia:"1234"
  },
  {
    email:"fictitioususer321@gmail.com",
    contrasenia:"1234"
  },
  {
    email:"demoemail123@yahoo.com",
    contrasenia:"1234"
  },
  {
    email:"fakeuser789@hotmail.com",
    contrasenia:"1234"
  },
  {
    email:"sampleemail456@example.com",
    contrasenia:"1234"
  },
  {
    email:"tempuser123@outlook.com",
    contrasenia:"1234"
  },
  ];

  getData() {
    return this.data;
  }

  updatePassword(email: string, newPassword: string) {
    const user: User |undefined = this.data.find(user => user.email === email);
    if (user) {
      user.contrasenia = newPassword;
    }
  }
}
