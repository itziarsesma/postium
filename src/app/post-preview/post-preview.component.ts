import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from './../post';

@Component({
  selector: 'post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.css']
})
export class PostPreviewComponent {

  @Input() post: Post;
  @Output() postSeleccionado: EventEmitter<number>;
  @Output() autorSeleccionado: EventEmitter<number>;

  constructor() {
    this.postSeleccionado = new EventEmitter<number>();
    this.autorSeleccionado = new EventEmitter<number>();
  }

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Red Path ~~~                                                                                                 |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el usuario sobre el cuál se ha hecho clic. Y puesto que dicho  |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

   notoficarAutorSeleccionado(autorId: number): void {
     this.autorSeleccionado.emit(autorId);
   }

  /*------------------------------------------------------------------------------------------------------------------|
   | ~~~ Green Path ~~~                                                                                               |
   |------------------------------------------------------------------------------------------------------------------|
   | Expón un atributo de salida con el decorador correspondiente. El tipo de dicho atributo debe permitir la emisión |
   | de eventos; la idea es enviar al componente padre el post sobre el cuál se ha hecho clic. Y puesto que dicho     |
   | clic se realiza en el template de este componente, necesitas, además, un manejador para el mismo.                |
   |------------------------------------------------------------------------------------------------------------------*/

   notificarPostSeleccionado(id: number): void {
     this.postSeleccionado.emit(id);
   }

  plainTextToHtml(text: string): string {
    return text ? `<p>${text.replace(/\n/gi, "</p><p>")}</p>` : '';
  }

}
