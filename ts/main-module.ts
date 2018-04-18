import * as moment from 'moment';
import { ListView } from '../ts/listview';
import { Task } from '../ts/task';
import { Template } from '../ts/template';
import { TaskManager } from '../ts/taskmanager';

// class Task{
//   id: string;
//   name: string;
//   status: boolean;
//   constructor(taskname: string){
//     this.id = new Date().getTime().toString();
//     this.name = taskname;
//     this.status = false;
//   }
// }

// class DataStorage{
//   status:boolean;
//   dataname:string;
//   constructor( dataname:string ){
//     //check if local storage available
//     if( window.localStorage ){
//     //local storage  available
//       this.status = true;
//       this.dataname = dataname;
//     }
//     else{
//     //local storage not available
//       this.status = false;
//     }
//   }
//   read( callback ){
//     if( this.status ){
//       try{
//         let data:string = window.localStorage.getItem(this.dataname);
//         callback( JSON.parse( data ) );
//       }
//       catch( error ){
//         //console.log(error)
//         callback (false);
//       }
//     }
//   }
//   store( tasks:Array <Task>, callback ){
//     if( this.status ){
//       try{
//         let data:string = JSON.stringify( tasks );
//         window.localStorage.setItem(this.dataname, data );
//         callback( true );
//       }
//       catch( error ){
//         //console.log(error)
//         callback( false );
//       }
//     }
//   }
// }

// class TaskManager{
//   tasks: Array<Task>;
//   constructor(arrayname: Array<Task>){
//     this.tasks = arrayname;
//   }
//   add(task:Task){
//     this.tasks.push(task);
//     this.sort( this.tasks );
//   }
//   remove(id:string, callback ){
//     let index_to_remove:number = undefined;
//     this.tasks.forEach( (item:Task, index:number) => {
//       if(item.id  == id){
//         index_to_remove = index;
//       }
//     });
//     if( index_to_remove !== undefined){
//       this.tasks.splice( index_to_remove, 1 );
//     }
//     callback();
//   }
//   changeStatus(id:string,callback):void{
//     this.tasks.forEach( (task:Task) => {
//       if(task.id  === id){
//         if( task.status == false ){
//           task.status = true;
//           return;
//         }
//         else{
//           task.status = false;
//         }
//       }
//     });
//     this.sort( this.tasks );
//     callback();
//   }
//   sort( tasks:Array<Task> ){
//     tasks.sort((task1,task2) => {
//       let id1:number = parseInt( task1.id );
//       let id2:number = parseInt( task2.id );
//       if( task1.status == true && task2.status == false ){
//         return 1;
//       }
//       if( task1.status == false && task2.status == true ){
//         return -1;
//       }
//       if( task1.status  == task2.status ){
//         return 0;
//       }
//     })
//   }
// }

// class Template{
//   template:string;
//   constructor(){
//     //not being used right now
//   }
//   populate(id:string, name:string, status:string){
//     let idtime:number = parseInt(id)
//     let timestamp = moment( idtime ).fromNow();
//     let task:string =  `<li id="${id}" data-status="${status}">
//                 <div class="task-container">
//                 <div class="task-label">
//                   <p class="task-name">${name}</p>
//                   <p class="task-age">added ${timestamp}</p>
//                 </div>
//                 <div class="task-buttons">
//                   <button type="button" data-function="status">&#x2714;</button>
//                   <button type="button" data-function="delete">&times;</button>
//                 </div>
//                 </div>
//             </li>`;
//     return task;
//   }
// }

// class ListView{
//   list: HTMLElement;
//   constructor( listid: string ){
//     this.list = document.getElementById('task-list');
//   }
//   clear(){
//     this.list.innerHTML = '';
//   }
//   render( items:Array<Task> ){
//     //clear the view
//     //render array using template
//     items.forEach( (task) => {
//     let id= task.id;
//     let name = task.name;
//     let status = task.status.toString();
//     let item = tasktemplate.populate(id,name,status);
//     // convert our string to HTML Node
//     let fragment = document.createRange().createContextualFragment(item);
//     this.list.appendChild( fragment );
//     });
//   }
// }

function getParentId(elm:Node){
  while( elm.parentNode ){
    elm = elm.parentNode;
    let id:string = (<HTMLElement> elm).getAttribute('id');
    if( id ){
      return id;
    }
  }
  return null;
}
//----INITIALISE CLASSES
//array to store tasks
var taskarray: Array<Task> = [];
//storage class
var taskstorage = new DataStorage('taskdata');
//Task Manager class, pass the task array
var taskmanager = new TaskManager( taskarray );
//list view
var listview = new ListView('task-list');
//task template
export var tasktemplate = new Template();


//things to do when app loads
window.addEventListener('load',init);
function init(){
  //read from storage
  taskstorage.read( (data) => {
    if( data.length > 0 ){
      data.forEach( (item) => {
        taskarray.push( item );
      });
      listview.clear();
      listview.render( taskarray );
    }
  });
}
//reference to form
const taskform:HTMLFormElement = (<HTMLFormElement>document.getElementById('task-form'));
//add listener to form
taskform.addEventListener('submit', ( event: Event) => {
  event.preventDefault();
  let input:HTMLElement = document.getElementById('task-input');
  let taskname: string = (<HTMLInputElement>input).value;
  //prevent blank tasks form being created
  if( taskname.length > 0 ){
    let task:Task = new Task(taskname);
    taskmanager.add( task);
    taskstorage.store( taskarray, ( result ) => {
      if( result ){
        taskform.reset();
        listview.clear();
        listview.render( taskarray );
      }
      else{
        //show error message / call error handler
      }
    });
  }
});

//--LIST STUFF
//add listener to list
const listelement:HTMLElement = document.getElementById('task-list');
//add listener to list
listelement.addEventListener('click', (event:Event) => {
  let target:HTMLElement = <HTMLElement> event.target;
  let id = getParentId( (<Node> event.target) );

  if( target.getAttribute('data-function') == 'status' ){
    if( id ){
      taskmanager.changeStatus(id,() => {
        taskstorage.store( taskarray , () => {
          listview.clear();
          listview.render( taskarray );
        });
      });
    }
  }
  if( target.getAttribute('data-function') == 'delete'){
    if( id ){
      taskmanager.remove( id, () => {
        taskstorage.store( taskarray, () => {
          listview.clear();
          listview.render( taskarray );
        });
      });
    }
  }

});
