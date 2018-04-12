class Task{
  id: number;
  name: string;
  status: boolean;
  constructor(taskname: string){
    this.id = new Date().getTime();
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
      if(item.id == id){
        index_to_remove = index;
      }
    });
    if( index_to_remove !== undefined){
      this.tasks.splice( index_to_remove, 1 );
    }
  }
  changeStatus(id:number){
    this.tasks.forEach( (item:Task) => {
      if( item.id == id ){
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
  template:HTMLElement;
  constructor( template_id:string){
    let id = '#' + template_id;
    this.template = (<HTMLMetadata>document.getElementById( id )).content.cloneNode( true );
  }
  populate(id:number, name:string, status:boolean){

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
  }
}
//array to store tasks
var taskarray: Array<Task> = [];
//Task Manager class, pass the task array
var taskmanager = new TaskManager( TaskArray );
//list view
var listview = new ListView('task-list');
//task template
var template = new Template('task-template');



//reference to form
const taskform:HTMLFormElement = (<HTMLFormElement>document.getElementById('task-form'));
taskform.addEventListener('submit', ( event: Event) => {
  event.preventDefault();
  let input:HTMLElement = document.getElementById('task-input');
  let taskname: string = (<HTMLInputElement>input).value;
  let task:Task = new Task(taskname);
  taskmanager.add( task);
  taskform.reset();
});
