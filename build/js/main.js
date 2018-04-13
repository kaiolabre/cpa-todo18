(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Task = /** @class */ (function () {
    function Task(taskname) {
        this.id = new Date().getTime().toString();
        this.name = taskname;
        this.status = false;
    }
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager(array) {
        this.tasks = array;
    }
    TaskManager.prototype.add = function (task) {
        this.tasks.push(task);
        console.log(this.tasks);
    };
    return TaskManager;
}());
var ListView = /** @class */ (function () {
    function ListView(listid) {
        this.list = document.getElementById(listid);
    }
    ListView.prototype.render = function (items) {
        var _this = this;
        items.forEach(function (task) {
            var id = task.id;
            var name = task.name;
            var status = task.status;
            var template = "<li id=\"" + id + "\" data-status=\"" + status + "\">\n                      <div class=\"task-container\">\n                        <div class=\"task-name\">" + name + "</div>\n                        <div class=\"task-buttons\">\n                          <button type=\"button\" data-function=\"status\">&#x2714;</button>\n                          <button type=\"button\" data-function=\"delete\">&times;</button>\n                        </div>\n                      </div>\n                      </li>";
            var fragment = document.createRange().createContextualFragment(template);
            _this.list.appendChild(fragment);
        });
    };
    ListView.prototype.clear = function () {
        this.list.innerHTML = '';
    };
    return ListView;
}());
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.storage = window.localStorage;
    }
    DataStorage.prototype.store = function (array) {
        var data = JSON.stringify(array);
        this.storage.setItem('taskdata', data);
    };
    DataStorage.prototype.read = function () {
        var data = this.storage.getItem('taskdata');
        var array = JSON.parse(data);
        return array;
    };
    return DataStorage;
}());
//initialize
var taskarray = [];
var taskstorage = new DataStorage();
var taskmanager = new TaskManager(taskarray);
var listview = new ListView('task-list');
window.addEventListener('load', function () {
    var taskdata = taskstorage.read();
    taskdata.forEach(function (item) { taskarray.push(item); });
    listview.render(taskarray);
});
//reference to form
var taskform = document.getElementById('task-form');
taskform.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('task-input');
    var taskname = input.value;
    taskform.reset();
    //console.log(taskname);
    var task = new Task(taskname);
    taskmanager.add(task);
    listview.clear();
    taskstorage.store(taskarray);
    listview.render(taskarray);
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0lBSUUsY0FBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQUVEO0lBRUUscUJBQWEsS0FBa0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUNELHlCQUFHLEdBQUgsVUFBSyxJQUFVO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFFRDtJQUVFLGtCQUFhLE1BQWE7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFFLE1BQU0sQ0FBRSxDQUFDO0lBQ2hELENBQUM7SUFDRCx5QkFBTSxHQUFOLFVBQVEsS0FBaUI7UUFBekIsaUJBaUJDO1FBaEJDLEtBQUssQ0FBQyxPQUFPLENBQUUsVUFBQyxJQUFJO1lBQ2xCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDakIsSUFBSSxJQUFJLEdBQUUsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3pCLElBQUksUUFBUSxHQUFHLGNBQVcsRUFBRSx5QkFBa0IsTUFBTSxvSEFFVCxJQUFJLHVWQU16QixDQUFDO1lBQ3ZCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBRSxRQUFRLENBQUUsQ0FBQztZQUMzRSxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxRQUFRLENBQUUsQ0FBQztRQUNwQyxDQUFDLENBQUUsQ0FBQztJQUNOLENBQUM7SUFDRCx3QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQUVEO0lBRUU7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQztJQUNELDJCQUFLLEdBQUwsVUFBTyxLQUFrQjtRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFFLEtBQUssQ0FBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMEJBQUksR0FBSjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDL0IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQWRBLEFBY0MsSUFBQTtBQUVELFlBQVk7QUFDWixJQUFJLFNBQVMsR0FBYyxFQUFFLENBQUM7QUFDOUIsSUFBSSxXQUFXLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUNwQyxJQUFJLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBRSxTQUFTLENBQUUsQ0FBQztBQUMvQyxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUV6QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0lBQzlCLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxRQUFRLENBQUMsT0FBTyxDQUFFLFVBQUMsSUFBSSxJQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxRQUFRLENBQUMsTUFBTSxDQUFFLFNBQVMsQ0FBRSxDQUFDO0FBQy9CLENBQUMsQ0FBRSxDQUFDO0FBR0osbUJBQW1CO0FBQ25CLElBQU0sUUFBUSxHQUFzQixRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBRSxDQUFDO0FBQzFFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBRSxLQUFZO0lBQ2hELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xELElBQUksUUFBUSxHQUFzQixLQUFNLENBQUMsS0FBSyxDQUFDO0lBQy9DLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQix3QkFBd0I7SUFDeEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUUsUUFBUSxDQUFFLENBQUM7SUFDaEMsV0FBVyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUUsQ0FBQztJQUN4QixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsV0FBVyxDQUFDLEtBQUssQ0FBRSxTQUFTLENBQUUsQ0FBQztJQUMvQixRQUFRLENBQUMsTUFBTSxDQUFFLFNBQVMsQ0FBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgVGFza3tcclxuICBpZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdGF0dXM6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IodGFza25hbWU6IHN0cmluZyl7XHJcbiAgICB0aGlzLmlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKTtcclxuICAgIHRoaXMubmFtZSA9IHRhc2tuYW1lO1xyXG4gICAgdGhpcy5zdGF0dXMgPSBmYWxzZTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFRhc2tNYW5hZ2Vye1xyXG4gIHRhc2tzIDogQXJyYXk8VGFzaz47XHJcbiAgY29uc3RydWN0b3IoIGFycmF5OiBBcnJheTxUYXNrPil7XHJcbiAgICB0aGlzLnRhc2tzID0gYXJyYXk7XHJcbiAgfVxyXG4gIGFkZCggdGFzazogVGFzayApe1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xyXG4gICAgY29uc29sZS5sb2coIHRoaXMudGFza3MgKTtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIExpc3RWaWV3e1xyXG4gIGxpc3Q6SFRNTEVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoIGxpc3RpZDpzdHJpbmcgKXtcclxuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBsaXN0aWQgKTtcclxuICB9XHJcbiAgcmVuZGVyKCBpdGVtczpBcnJheTxUYXNrPiApe1xyXG4gICAgaXRlbXMuZm9yRWFjaCggKHRhc2spID0+IHtcclxuICAgICAgbGV0IGlkID0gdGFzay5pZDtcclxuICAgICAgbGV0IG5hbWU9IHRhc2submFtZTtcclxuICAgICAgbGV0IHN0YXR1cyA9IHRhc2suc3RhdHVzO1xyXG4gICAgICBsZXQgdGVtcGxhdGUgPSBgPGxpIGlkPVwiJHtpZH1cIiBkYXRhLXN0YXR1cz1cIiR7c3RhdHVzfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLW5hbWVcIj4ke25hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWZ1bmN0aW9uPVwic3RhdHVzXCI+JiN4MjcxNDs8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWZ1bmN0aW9uPVwiZGVsZXRlXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9saT5gO1xyXG4gICAgICBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVSYW5nZSgpLmNyZWF0ZUNvbnRleHR1YWxGcmFnbWVudCggdGVtcGxhdGUgKTtcclxuICAgICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKCBmcmFnbWVudCApO1xyXG4gICAgfSApO1xyXG4gIH1cclxuICBjbGVhcigpe1xyXG4gICAgdGhpcy5saXN0LmlubmVySFRNTCA9ICcnO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgRGF0YVN0b3JhZ2V7XHJcbiAgc3RvcmFnZTphbnk7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2U7XHJcbiAgfVxyXG4gIHN0b3JlKCBhcnJheTpBcnJheSA8VGFzaz4gKXtcclxuICAgIGxldCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoIGFycmF5ICk7XHJcbiAgICB0aGlzLnN0b3JhZ2Uuc2V0SXRlbSgndGFza2RhdGEnLCBkYXRhICk7XHJcbiAgfVxyXG4gIHJlYWQoKXtcclxuICAgIGxldCBkYXRhID0gdGhpcy5zdG9yYWdlLmdldEl0ZW0oJ3Rhc2tkYXRhJyk7XHJcbiAgICBsZXQgYXJyYXkgPSBKU09OLnBhcnNlKCBkYXRhICk7XHJcbiAgICByZXR1cm4gYXJyYXk7XHJcbiAgfVxyXG59XHJcblxyXG4vL2luaXRpYWxpemVcclxudmFyIHRhc2thcnJheTpBcnJheTxhbnk+ID0gW107XHJcbnZhciB0YXNrc3RvcmFnZSA9IG5ldyBEYXRhU3RvcmFnZSgpO1xyXG52YXIgdGFza21hbmFnZXIgPSBuZXcgVGFza01hbmFnZXIoIHRhc2thcnJheSApO1xyXG52YXIgbGlzdHZpZXcgPSBuZXcgTGlzdFZpZXcoJ3Rhc2stbGlzdCcpO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XHJcbiAgbGV0IHRhc2tkYXRhID0gdGFza3N0b3JhZ2UucmVhZCgpO1xyXG4gIHRhc2tkYXRhLmZvckVhY2goIChpdGVtKSA9PiB7IHRhc2thcnJheS5wdXNoKCBpdGVtKTsgfSk7XHJcbiAgbGlzdHZpZXcucmVuZGVyKCB0YXNrYXJyYXkgKTtcclxufSApO1xyXG5cclxuXHJcbi8vcmVmZXJlbmNlIHRvIGZvcm1cclxuY29uc3QgdGFza2Zvcm0gPSAoPEhUTUxGb3JtRWxlbWVudD4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpKTtcclxudGFza2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCBldmVudDogRXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWlucHV0Jyk7XHJcbiAgbGV0IHRhc2tuYW1lID0gKDxIVE1MSW5wdXRFbGVtZW50PmlucHV0KS52YWx1ZTtcclxuICB0YXNrZm9ybS5yZXNldCgpO1xyXG4gIC8vY29uc29sZS5sb2codGFza25hbWUpO1xyXG4gIGxldCB0YXNrID0gbmV3IFRhc2soIHRhc2tuYW1lICk7XHJcbiAgdGFza21hbmFnZXIuYWRkKCB0YXNrICk7XHJcbiAgbGlzdHZpZXcuY2xlYXIoKTtcclxuICB0YXNrc3RvcmFnZS5zdG9yZSggdGFza2FycmF5ICk7XHJcbiAgbGlzdHZpZXcucmVuZGVyKCB0YXNrYXJyYXkgKTtcclxufSk7XHJcbiJdfQ==
