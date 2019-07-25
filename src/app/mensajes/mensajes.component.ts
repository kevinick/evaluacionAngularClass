import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {
  public information:any;
  public btn1:boolean;
  public btn2:boolean;
  public btn3:boolean;
  public image:boolean;
  public todo:boolean;
  constructor(private quote:RequestService) {
      this.btn1=true;
      this.btn2=true;
      this.btn3=true;
      this.image=true;
      this.todo=true;
  }

  ngOnInit() {
    this.getQuote();
  }
  getQuote(){
    return this.quote.getQuotes()
      .subscribe(data => {
        this.information=data.quote;
      });
  }
  ocultarbtn1(){
    this.btn1=!this.btn1;
  }
  ocultarbtn2(){
    this.btn2=!this.btn2;
  }
  ocultarimg(){
    this.image=!this.image;
  }
  ocultartodo(){
    this.todo=!this.todo;
  }
}
