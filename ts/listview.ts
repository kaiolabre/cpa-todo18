import { Task } from '../ts/task';
import * as moment from 'moment';

export class ListView{
  list:HTMLElement;
  constructor( listid:string ){
    this.list = document.getElementById( listid );
  }
  render( items:Array<Task> ){
    items.forEach( (task) => {
      let id = task.id;
      let name= task.name;
      let status = task.status;
      let idtime:number = parseInt(id)
      let timestamp = moment( idtime ).fromNow();

      let template = `<li id="${id}" data-status="${status}">
                      <div class="task-container">
                        <div class="task-name">
                          <p class="task-label">${name}</p>
                          <p class="task-age">${timestamp}</p>
                        </div>
                        <div class="task-buttons">
                          <button type="button" data-function="status">&#x2714;</button>
                          <button type="button" data-function="delete">&times;</button>
                        </div>
                      </div>
                      </li>`;
      let fragment = document.createRange().createContextualFragment( template );
      this.list.appendChild( fragment );
    } );
  }
  clear(){
    this.list.innerHTML = '';
  }
}
