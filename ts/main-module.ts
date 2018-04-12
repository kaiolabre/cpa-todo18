class Task{
  id: string;
  name: string;
  status: boolean;
  constructor(taskname: string){
    this.id = new Date().getTime().toString();
    this.name = taskname;
    this.status = false;
  }
}

class TaskManager{
  tasks: Array<Task>;
  constructor(arrayname: Array<Task>){
    this.tasks = arrayname;
  }
  add(task:Task){
    this.tasks.push(task);
    console.log( this.tasks );
  }
  remove(id:number){
    let index_to_remove:number = undefined;
    this.tasks.forEach( (item:Task, index:number) => {
      if(parseInt( item.id ) == id){
        index_to_remove = index;
      }
    });
    if( index_to_remove !== undefined){
      this.tasks.splice( index_to_remove, 1 );
    }
  }
  changeStatus(id:number){
    this.tasks.forEach( (item:Task) => {
      if( parseInt( item.id ) == id ){
        if( item.status == false ){
          item.status = true;
        }
        else{
          item.status = false;
        }
      }
    });
  }
}

class Template{
  template:string;
  constructor(template_name){

  }
  populate(id:string, name:string, status:string){
    let task:any =  `<li id="${id}" data-status="${status}">
                <div class="task-container">
                <div class="task-name">${name}</div>
                <div class="task-buttons">
                  <button type="button" data-function="done">done</button>
                  <button type="button" data-function="delete">delete</button>
                </div>
                </div>
            </li>`;
    return task;
  }
}

class ListView{
  list: HTMLElement;
  constructor( listid: string ){
    this.list = document.getElementById('task-list');
  }
  clear(){
    this.list.innerHTML = '';
  }
  render( items:Array<Task> ){
    //render array using template
    items.forEach( (task) => {
    let id= task.id;
    let name = task.name;
    let status = task.status.toString();
    let item = tasktemplate.populate(id,name,status);
    // convert our string to HTML Node
    let fragment = document.createRange().createContextualFragment(item);
    this.list.appendChild( fragment );
    });
  }
}
//array to store tasks
var taskarray: Array<Task> = [];
//Task Manager class, pass the task array
var taskmanager = new TaskManager( taskarray );
//list view
var listview = new ListView('task-list');
//task template
var tasktemplate = new Template('task-template');



//reference to form
const taskform:HTMLFormElement = (<HTMLFormElement>document.getElementById('task-form'));
taskform.addEventListener('submit', ( event: Event) => {
  event.preventDefault();
  let input:HTMLElement = document.getElementById('task-input');
  let taskname: string = (<HTMLInputElement>input).value;
  let task:Task = new Task(taskname);
  taskmanager.add( task);
  taskform.reset();
  listview.clear();
  listview.render( taskarray );
});
