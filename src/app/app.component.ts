import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, FormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'mongodb-ui';

  userData: any[] = [];

  ngOnInit(): void {
    fetch("https://user-app-bpgf.onrender.com/users")
      .then(response => response.json())
      .then((data) => {
        console.log(data)
        this.userData = data;
      })
      .catch(error => {
        console.log(error)
      })
  }
  @ViewChild('f') myForm: NgForm

  postUser(): void {
    let formValue = this.myForm.value

    let formData = {
      name: formValue.name,
      email: formValue.email,
      password: formValue.password
    }


    console.log(formData);

    fetch("https://user-app-bpgf.onrender.com/users", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      mode: "cors",
      body: JSON.stringify(formData)
    }).then(response => response.json())
      .then(data => {
        console.log(data)
      })

  }


}
