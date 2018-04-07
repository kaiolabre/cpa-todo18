(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Task = /** @class */ (function () {
    function Task(taskname) {
        this.id = new Date().getTime();
        this.name = taskname;
        this.status = false;
    }
    return Task;
}());
var TaskManager = /** @class */ (function () {
    function TaskManager(arrayname) {
        this.tasks = arrayname;
    }
    TaskManager.prototype.add = function (task) {
        this.tasks.push(task);
        console.log(this.tasks);
    };
    TaskManager.prototype.remove = function (id) {
        var index_to_remove = undefined;
        this.tasks.forEach(function (item, index) {
            if (item.id == id) {
                index_to_remove = index;
            }
        });
        if (index_to_remove !== undefined) {
            this.tasks.splice(index_to_remove, 1);
        }
    };
    return TaskManager;
}());
//array to store tasks
var TaskArray = [];
//Task Manager
var taskmanager = new TaskManager(TaskArray);
//reference to form
var taskform = document.getElementById('task-form');
taskform.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('task-input');
    var taskname = input.value;
    var task = new Task(taskname);
    taskmanager.add(task);
    taskform.reset();
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0lBSUUsY0FBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQUVEO0lBRUUscUJBQVksU0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELHlCQUFHLEdBQUgsVUFBSSxJQUFTO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELDRCQUFNLEdBQU4sVUFBTyxFQUFTO1FBQ2QsSUFBSSxlQUFlLEdBQVUsU0FBUyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFFLFVBQUMsSUFBUyxFQUFFLEtBQVk7WUFDMUMsSUFBRyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBQztnQkFDZixlQUFlLEdBQUcsS0FBSyxDQUFDO2FBQ3pCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGVBQWUsS0FBSyxTQUFTLEVBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUUsZUFBZSxFQUFFLENBQUMsQ0FBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FwQkEsQUFvQkMsSUFBQTtBQUNELHNCQUFzQjtBQUN0QixJQUFJLFNBQVMsR0FBZ0IsRUFBRSxDQUFDO0FBQ2hDLGNBQWM7QUFDZCxJQUFJLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBRSxTQUFTLENBQUUsQ0FBQztBQUUvQyxtQkFBbUI7QUFDbkIsSUFBTSxRQUFRLEdBQXFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFFLENBQUM7QUFDekYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFFLEtBQVk7SUFDaEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLElBQUksS0FBSyxHQUFlLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUQsSUFBSSxRQUFRLEdBQThCLEtBQU0sQ0FBQyxLQUFLLENBQUM7SUFDdkQsSUFBSSxJQUFJLEdBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsV0FBVyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUN2QixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkIsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjbGFzcyBUYXNre1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHN0YXR1czogYm9vbGVhbjtcbiAgY29uc3RydWN0b3IodGFza25hbWU6IHN0cmluZyl7XG4gICAgdGhpcy5pZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMubmFtZSA9IHRhc2tuYW1lO1xuICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gIH1cbn1cblxuY2xhc3MgVGFza01hbmFnZXJ7XG4gIHRhc2tzOiBBcnJheTxUYXNrPjtcbiAgY29uc3RydWN0b3IoYXJyYXluYW1lOiBBcnJheTxUYXNrPil7XG4gICAgdGhpcy50YXNrcyA9IGFycmF5bmFtZTtcbiAgfVxuICBhZGQodGFzazpUYXNrKXtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgY29uc29sZS5sb2coIHRoaXMudGFza3MgKTtcbiAgfVxuICByZW1vdmUoaWQ6bnVtYmVyKXtcbiAgICBsZXQgaW5kZXhfdG9fcmVtb3ZlOm51bWJlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goIChpdGVtOlRhc2ssIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgaWYoaXRlbS5pZCA9PSBpZCl7XG4gICAgICAgIGluZGV4X3RvX3JlbW92ZSA9IGluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKCBpbmRleF90b19yZW1vdmUgIT09IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLnRhc2tzLnNwbGljZSggaW5kZXhfdG9fcmVtb3ZlLCAxICk7XG4gICAgfVxuICB9XG59XG4vL2FycmF5IHRvIHN0b3JlIHRhc2tzXG52YXIgVGFza0FycmF5OiBBcnJheTxUYXNrPiA9IFtdO1xuLy9UYXNrIE1hbmFnZXJcbnZhciB0YXNrbWFuYWdlciA9IG5ldyBUYXNrTWFuYWdlciggVGFza0FycmF5ICk7XG5cbi8vcmVmZXJlbmNlIHRvIGZvcm1cbmNvbnN0IHRhc2tmb3JtOkhUTUxGb3JtRWxlbWVudCA9ICg8SFRNTEZvcm1FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKSk7XG50YXNrZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoIGV2ZW50OiBFdmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgaW5wdXQ6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpO1xuICBsZXQgdGFza25hbWU6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD5pbnB1dCkudmFsdWU7XG4gIGxldCB0YXNrOlRhc2sgPSBuZXcgVGFzayh0YXNrbmFtZSk7XG4gIHRhc2ttYW5hZ2VyLmFkZCggdGFzayk7XG4gIHRhc2tmb3JtLnJlc2V0KCk7XG59KTtcbiJdfQ==
