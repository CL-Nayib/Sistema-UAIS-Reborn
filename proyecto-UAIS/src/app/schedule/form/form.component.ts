import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {LoadScriptsService} from './load-scripts.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

interface ContactForm{ //interface para el envio de correo (Se debe crear una interface por cada formulario)
  "field": string;
  "hour": string;
  "firstName": string;
  "lastName": string;
  "birthdate": string;
  "gender": string;
  "email": string;
  "cellphone": string;
  "date": string;
  "motive": string;
}


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit{
  model = {
    field: localStorage.getItem("field"),
    hour: localStorage.getItem("hour"),
    firstName: "",
    lastName: "",
    birthdate: "",
    gender: "",
    email: "",
    cellphone: "",
    date: "",
    motive: ""
  }

  showComponent = false;
  content: any;

  constructor(private _loadScripts:LoadScriptsService, private modalService: NgbModal) {
    _loadScripts.Load(["javascriptfiletest"]);
  }

  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}

  toggleComponent() {
    this.showComponent = !this.showComponent; //Es para mostrar el componente de pop-up, no se usa ahora, ya que se invoca directamente con la función openVerticallyCentered
  }

  ngOnInit(): void{

  }

  onSubmit(form: NgForm): void {
    console.log('Form values', form);
    /*var field = localStorage.getItem("field");
    var hour = localStorage.getItem("hour");
    alert(field + " . " + hour);
    alert(JSON.stringify(form));*/
  }

    public sendEmail(e: Event) {
      e.preventDefault();
      emailjs.sendForm('service_lvt84q8', 'template_hg70ixc', e.target as HTMLFormElement, 'aYsVi7g2WKAs4PRmv')
        .then((result: EmailJSResponseStatus) => {
          console.log('SUCCESS!', result.status, result.text);
        }, (error) => {
          console.log('FAILED...', error);
        });
    }
}




