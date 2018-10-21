import { Input, Output, Component, OnInit, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input('nombre') leyenda = 'LEYENDA';
  @Input() progreso: number = 50;
  @ViewChild('txtName') txtName: ElementRef;
  @Output('actualizarPro') actualizaProgreso: EventEmitter<number> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {
    console.log(this.progreso);
  }

  onChanges(newValue) {

    if (newValue >= 100) {
      this.progreso = 100;
    } else if (newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso =  newValue;
    }

    this.txtName.nativeElement.value = this.progreso;
    this.actualizaProgreso.emit(this.progreso);
  }

  cambiarValor( cantidad: number) {
    if (this.progreso >= 100 && cantidad > 0) {
      this.progreso = 100;
      return;
    }

    if (this.progreso <= 0 && cantidad < 0) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + cantidad;
    this.txtName.nativeElement.focus();
    this.actualizaProgreso.emit(this.progreso);
  }

}
