import { Component, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css'],
})

export class PopUpComponent {

  constructor(private modalService: NgbModal) {}
  content: any;
  
  openVerticallyCentered(content: any) {
		this.modalService.open(content, { centered: true });
	}
}

