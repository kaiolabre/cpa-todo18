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
            if (parseInt(item.id) == id) {
                index_to_remove = index;
            }
        });
        if (index_to_remove !== undefined) {
            this.tasks.splice(index_to_remove, 1);
        }
    };
    TaskManager.prototype.changeStatus = function (id) {
        this.tasks.forEach(function (item) {
            if (parseInt(item.id) == id) {
                if (item.status == false) {
                    item.status = true;
                }
                else {
                    item.status = false;
                }
            }
        });
    };
    return TaskManager;
}());
var Template = /** @class */ (function () {
    function Template(template_id) {
        //let id = '#' + template_id;
        this.template = document.getElementById(template_id);
    }
    Template.prototype.populate = function (id, name, status) {
        var tmp = this.template.content.cloneNode(true);
        tmp.querySelector('li').setAttribute('id', id);
        tmp.querySelector('li').setAttribute('data-status', status.toString());
        tmp.querySelector('.task-name').innerText = name;
        return tmp;
    };
    return Template;
}());
var ListView = /** @class */ (function () {
    function ListView(listid) {
        this.list = document.getElementById('task-list');
    }
    ListView.prototype.clear = function () {
        this.list.innerHTML = '';
    };
    ListView.prototype.render = function (items) {
        var _this = this;
        //render array using template
        items.forEach(function (task) {
            var id = task.id;
            var name = task.name;
            var status = task.status.toString();
            var item = tasktemplate.populate(id, name, status);
            _this.list.appendChild(item);
        });
    };
    return ListView;
}());
//array to store tasks
var taskarray = [];
//Task Manager class, pass the task array
var taskmanager = new TaskManager(taskarray);
//list view
var listview = new ListView('task-list');
//task template
var tasktemplate = new Template('task-template');
//reference to form
var taskform = document.getElementById('task-form');
taskform.addEventListener('submit', function (event) {
    event.preventDefault();
    var input = document.getElementById('task-input');
    var taskname = input.value;
    var task = new Task(taskname);
    taskmanager.add(task);
    taskform.reset();
    listview.clear();
    listview.render(taskarray);
});
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0lBSUUsY0FBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQUVEO0lBRUUscUJBQVksU0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELHlCQUFHLEdBQUgsVUFBSSxJQUFTO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELDRCQUFNLEdBQU4sVUFBTyxFQUFTO1FBQ2QsSUFBSSxlQUFlLEdBQVUsU0FBUyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFFLFVBQUMsSUFBUyxFQUFFLEtBQVk7WUFDMUMsSUFBRyxRQUFRLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBRSxJQUFJLEVBQUUsRUFBQztnQkFDM0IsZUFBZSxHQUFHLEtBQUssQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxlQUFlLEtBQUssU0FBUyxFQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFFLGVBQWUsRUFBRSxDQUFDLENBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFDRCxrQ0FBWSxHQUFaLFVBQWEsRUFBUztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBRSxVQUFDLElBQVM7WUFDNUIsSUFBSSxRQUFRLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBRSxJQUFJLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRTtvQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQ3BCO3FCQUNHO29CQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNyQjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBRUQ7SUFFRSxrQkFBYSxXQUFrQjtRQUM3Qiw2QkFBNkI7UUFDN0IsSUFBSSxDQUFDLFFBQVEsR0FBeUIsUUFBUSxDQUFDLGNBQWMsQ0FBRSxXQUFXLENBQUcsQ0FBQztJQUNoRixDQUFDO0lBQ0QsMkJBQVEsR0FBUixVQUFTLEVBQVMsRUFBRSxJQUFXLEVBQUUsTUFBYTtRQUM1QyxJQUFJLEdBQUcsR0FBZ0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELEdBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztRQUM5QyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUM7UUFDeEQsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pFLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUNILGVBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQUVEO0lBRUUsa0JBQWEsTUFBYztRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNELHdCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELHlCQUFNLEdBQU4sVUFBUSxLQUFpQjtRQUF6QixpQkFTQztRQVJDLDZCQUE2QjtRQUM3QixLQUFLLENBQUMsT0FBTyxDQUFFLFVBQUMsSUFBSTtZQUNwQixJQUFJLEVBQUUsR0FBRSxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ2hCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNwQyxJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsTUFBTSxDQUFDLENBQUM7WUFDakQsS0FBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsZUFBQztBQUFELENBbEJBLEFBa0JDLElBQUE7QUFDRCxzQkFBc0I7QUFDdEIsSUFBSSxTQUFTLEdBQWdCLEVBQUUsQ0FBQztBQUNoQyx5Q0FBeUM7QUFDekMsSUFBSSxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUUsU0FBUyxDQUFFLENBQUM7QUFDL0MsV0FBVztBQUNYLElBQUksUUFBUSxHQUFHLElBQUksUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLGVBQWU7QUFDZixJQUFJLFlBQVksR0FBRyxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUlqRCxtQkFBbUI7QUFDbkIsSUFBTSxRQUFRLEdBQXFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFFLENBQUM7QUFDekYsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFFLEtBQVk7SUFDaEQsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZCLElBQUksS0FBSyxHQUFlLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUQsSUFBSSxRQUFRLEdBQThCLEtBQU0sQ0FBQyxLQUFLLENBQUM7SUFDdkQsSUFBSSxJQUFJLEdBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsV0FBVyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsQ0FBQztJQUN2QixRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDakIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLFFBQVEsQ0FBQyxNQUFNLENBQUUsU0FBUyxDQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjbGFzcyBUYXNre1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHN0YXR1czogYm9vbGVhbjtcclxuICBjb25zdHJ1Y3Rvcih0YXNrbmFtZTogc3RyaW5nKXtcclxuICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xyXG4gICAgdGhpcy5uYW1lID0gdGFza25hbWU7XHJcbiAgICB0aGlzLnN0YXR1cyA9IGZhbHNlO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGFza01hbmFnZXJ7XHJcbiAgdGFza3M6IEFycmF5PFRhc2s+O1xyXG4gIGNvbnN0cnVjdG9yKGFycmF5bmFtZTogQXJyYXk8VGFzaz4pe1xyXG4gICAgdGhpcy50YXNrcyA9IGFycmF5bmFtZTtcclxuICB9XHJcbiAgYWRkKHRhc2s6VGFzayl7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XHJcbiAgICBjb25zb2xlLmxvZyggdGhpcy50YXNrcyApO1xyXG4gIH1cclxuICByZW1vdmUoaWQ6bnVtYmVyKXtcclxuICAgIGxldCBpbmRleF90b19yZW1vdmU6bnVtYmVyID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy50YXNrcy5mb3JFYWNoKCAoaXRlbTpUYXNrLCBpbmRleDpudW1iZXIpID0+IHtcclxuICAgICAgaWYocGFyc2VJbnQoIGl0ZW0uaWQgKSA9PSBpZCl7XHJcbiAgICAgICAgaW5kZXhfdG9fcmVtb3ZlID0gaW5kZXg7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYoIGluZGV4X3RvX3JlbW92ZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgdGhpcy50YXNrcy5zcGxpY2UoIGluZGV4X3RvX3JlbW92ZSwgMSApO1xyXG4gICAgfVxyXG4gIH1cclxuICBjaGFuZ2VTdGF0dXMoaWQ6bnVtYmVyKXtcclxuICAgIHRoaXMudGFza3MuZm9yRWFjaCggKGl0ZW06VGFzaykgPT4ge1xyXG4gICAgICBpZiggcGFyc2VJbnQoIGl0ZW0uaWQgKSA9PSBpZCApe1xyXG4gICAgICAgIGlmKCBpdGVtLnN0YXR1cyA9PSBmYWxzZSApe1xyXG4gICAgICAgICAgaXRlbS5zdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgaXRlbS5zdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgVGVtcGxhdGV7XHJcbiAgdGVtcGxhdGU6SFRNTFRlbXBsYXRlRWxlbWVudDtcclxuICBjb25zdHJ1Y3RvciggdGVtcGxhdGVfaWQ6c3RyaW5nKXtcclxuICAgIC8vbGV0IGlkID0gJyMnICsgdGVtcGxhdGVfaWQ7XHJcbiAgICB0aGlzLnRlbXBsYXRlID0gKDxIVE1MVGVtcGxhdGVFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCB0ZW1wbGF0ZV9pZCApKTtcclxuICB9XHJcbiAgcG9wdWxhdGUoaWQ6c3RyaW5nLCBuYW1lOnN0cmluZywgc3RhdHVzOnN0cmluZyl7XHJcbiAgICBsZXQgdG1wID0gPEhUTUxFbGVtZW50PnRoaXMudGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICB0bXAucXVlcnlTZWxlY3RvcignbGknKS5zZXRBdHRyaWJ1dGUoJ2lkJyxpZCk7XHJcbiAgICB0bXAucXVlcnlTZWxlY3RvcignbGknKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdHVzJyxzdGF0dXMudG9TdHJpbmcoKSApO1xyXG4gICAgKDxIVE1MRWxlbWVudD4gdG1wLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLW5hbWUnKSkuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIHJldHVybiB0bXA7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBMaXN0Vmlld3tcclxuICBsaXN0OiBIVE1MRWxlbWVudDtcclxuICBjb25zdHJ1Y3RvciggbGlzdGlkOiBzdHJpbmcgKXtcclxuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcclxuICB9XHJcbiAgY2xlYXIoKXtcclxuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcbiAgcmVuZGVyKCBpdGVtczpBcnJheTxUYXNrPiApe1xyXG4gICAgLy9yZW5kZXIgYXJyYXkgdXNpbmcgdGVtcGxhdGVcclxuICAgIGl0ZW1zLmZvckVhY2goICh0YXNrKSA9PiB7XHJcbiAgICBsZXQgaWQ9IHRhc2suaWQ7XHJcbiAgICBsZXQgbmFtZSA9IHRhc2submFtZTtcclxuICAgIGxldCBzdGF0dXMgPSB0YXNrLnN0YXR1cy50b1N0cmluZygpO1xyXG4gICAgbGV0IGl0ZW0gPSB0YXNrdGVtcGxhdGUucG9wdWxhdGUoaWQsbmFtZSxzdGF0dXMpO1xyXG4gICAgdGhpcy5saXN0LmFwcGVuZENoaWxkKCBpdGVtICk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuLy9hcnJheSB0byBzdG9yZSB0YXNrc1xyXG52YXIgdGFza2FycmF5OiBBcnJheTxUYXNrPiA9IFtdO1xyXG4vL1Rhc2sgTWFuYWdlciBjbGFzcywgcGFzcyB0aGUgdGFzayBhcnJheVxyXG52YXIgdGFza21hbmFnZXIgPSBuZXcgVGFza01hbmFnZXIoIHRhc2thcnJheSApO1xyXG4vL2xpc3Qgdmlld1xyXG52YXIgbGlzdHZpZXcgPSBuZXcgTGlzdFZpZXcoJ3Rhc2stbGlzdCcpO1xyXG4vL3Rhc2sgdGVtcGxhdGVcclxudmFyIHRhc2t0ZW1wbGF0ZSA9IG5ldyBUZW1wbGF0ZSgndGFzay10ZW1wbGF0ZScpO1xyXG5cclxuXHJcblxyXG4vL3JlZmVyZW5jZSB0byBmb3JtXHJcbmNvbnN0IHRhc2tmb3JtOkhUTUxGb3JtRWxlbWVudCA9ICg8SFRNTEZvcm1FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKSk7XHJcbnRhc2tmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICggZXZlbnQ6IEV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgaW5wdXQ6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpO1xyXG4gIGxldCB0YXNrbmFtZTogc3RyaW5nID0gKDxIVE1MSW5wdXRFbGVtZW50PmlucHV0KS52YWx1ZTtcclxuICBsZXQgdGFzazpUYXNrID0gbmV3IFRhc2sodGFza25hbWUpO1xyXG4gIHRhc2ttYW5hZ2VyLmFkZCggdGFzayk7XHJcbiAgdGFza2Zvcm0ucmVzZXQoKTtcclxuICBsaXN0dmlldy5jbGVhcigpO1xyXG4gIGxpc3R2aWV3LnJlbmRlciggdGFza2FycmF5ICk7XHJcbn0pO1xyXG4iXX0=
