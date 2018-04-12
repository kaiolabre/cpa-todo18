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
    function Template(template_name) {
    }
    Template.prototype.populate = function (id, name, status) {
        var task = "<li id=\"" + id + "\" data-status=\"" + status + "\">\n                <div class=\"task-container\">\n                <div class=\"task-name\">" + name + "</div>\n                <div class=\"task-buttons\">\n                  <button type=\"button\" data-function=\"done\">done</button>\n                  <button type=\"button\" data-function=\"delete\">delete</button>\n                </div>\n                </div>\n            </li>";
        return task;
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
            // convert our string to HTML Node
            var fragment = document.createRange().createContextualFragment(item);
            _this.list.appendChild(fragment);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJ0cy9tYWluLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0lBSUUsY0FBWSxRQUFnQjtRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQTtBQUVEO0lBRUUscUJBQVksU0FBc0I7UUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7SUFDekIsQ0FBQztJQUNELHlCQUFHLEdBQUgsVUFBSSxJQUFTO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELDRCQUFNLEdBQU4sVUFBTyxFQUFTO1FBQ2QsSUFBSSxlQUFlLEdBQVUsU0FBUyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFFLFVBQUMsSUFBUyxFQUFFLEtBQVk7WUFDMUMsSUFBRyxRQUFRLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBRSxJQUFJLEVBQUUsRUFBQztnQkFDM0IsZUFBZSxHQUFHLEtBQUssQ0FBQzthQUN6QjtRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxlQUFlLEtBQUssU0FBUyxFQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFFLGVBQWUsRUFBRSxDQUFDLENBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFDRCxrQ0FBWSxHQUFaLFVBQWEsRUFBUztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBRSxVQUFDLElBQVM7WUFDNUIsSUFBSSxRQUFRLENBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBRSxJQUFJLEVBQUUsRUFBRTtnQkFDN0IsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssRUFBRTtvQkFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7aUJBQ3BCO3FCQUNHO29CQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2lCQUNyQjthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBRUQ7SUFFRSxrQkFBWSxhQUFhO0lBRXpCLENBQUM7SUFDRCwyQkFBUSxHQUFSLFVBQVMsRUFBUyxFQUFFLElBQVcsRUFBRSxNQUFhO1FBQzVDLElBQUksSUFBSSxHQUFRLGNBQVcsRUFBRSx5QkFBa0IsTUFBTSxzR0FFaEIsSUFBSSxnU0FNM0IsQ0FBQztRQUNmLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNILGVBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBRUQ7SUFFRSxrQkFBYSxNQUFjO1FBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0Qsd0JBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBQ0QseUJBQU0sR0FBTixVQUFRLEtBQWlCO1FBQXpCLGlCQVdDO1FBVkMsNkJBQTZCO1FBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUUsVUFBQyxJQUFJO1lBQ3BCLElBQUksRUFBRSxHQUFFLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDaEIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUNyQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ3BDLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFDLElBQUksRUFBQyxNQUFNLENBQUMsQ0FBQztZQUNqRCxrQ0FBa0M7WUFDbEMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFFLFFBQVEsQ0FBRSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGVBQUM7QUFBRCxDQXBCQSxBQW9CQyxJQUFBO0FBQ0Qsc0JBQXNCO0FBQ3RCLElBQUksU0FBUyxHQUFnQixFQUFFLENBQUM7QUFDaEMseUNBQXlDO0FBQ3pDLElBQUksV0FBVyxHQUFHLElBQUksV0FBVyxDQUFFLFNBQVMsQ0FBRSxDQUFDO0FBQy9DLFdBQVc7QUFDWCxJQUFJLFFBQVEsR0FBRyxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN6QyxlQUFlO0FBQ2YsSUFBSSxZQUFZLEdBQUcsSUFBSSxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7QUFJakQsbUJBQW1CO0FBQ25CLElBQU0sUUFBUSxHQUFxQyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBRSxDQUFDO0FBQ3pGLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsVUFBRSxLQUFZO0lBQ2hELEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN2QixJQUFJLEtBQUssR0FBZSxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlELElBQUksUUFBUSxHQUE4QixLQUFNLENBQUMsS0FBSyxDQUFDO0lBQ3ZELElBQUksSUFBSSxHQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLFdBQVcsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLENBQUM7SUFDdkIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2pCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNqQixRQUFRLENBQUMsTUFBTSxDQUFFLFNBQVMsQ0FBRSxDQUFDO0FBQy9CLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgVGFza3tcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBzdGF0dXM6IGJvb2xlYW47XG4gIGNvbnN0cnVjdG9yKHRhc2tuYW1lOiBzdHJpbmcpe1xuICAgIHRoaXMuaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpO1xuICAgIHRoaXMubmFtZSA9IHRhc2tuYW1lO1xuICAgIHRoaXMuc3RhdHVzID0gZmFsc2U7XG4gIH1cbn1cblxuY2xhc3MgVGFza01hbmFnZXJ7XG4gIHRhc2tzOiBBcnJheTxUYXNrPjtcbiAgY29uc3RydWN0b3IoYXJyYXluYW1lOiBBcnJheTxUYXNrPil7XG4gICAgdGhpcy50YXNrcyA9IGFycmF5bmFtZTtcbiAgfVxuICBhZGQodGFzazpUYXNrKXtcbiAgICB0aGlzLnRhc2tzLnB1c2godGFzayk7XG4gICAgY29uc29sZS5sb2coIHRoaXMudGFza3MgKTtcbiAgfVxuICByZW1vdmUoaWQ6bnVtYmVyKXtcbiAgICBsZXQgaW5kZXhfdG9fcmVtb3ZlOm51bWJlciA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnRhc2tzLmZvckVhY2goIChpdGVtOlRhc2ssIGluZGV4Om51bWJlcikgPT4ge1xuICAgICAgaWYocGFyc2VJbnQoIGl0ZW0uaWQgKSA9PSBpZCl7XG4gICAgICAgIGluZGV4X3RvX3JlbW92ZSA9IGluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKCBpbmRleF90b19yZW1vdmUgIT09IHVuZGVmaW5lZCl7XG4gICAgICB0aGlzLnRhc2tzLnNwbGljZSggaW5kZXhfdG9fcmVtb3ZlLCAxICk7XG4gICAgfVxuICB9XG4gIGNoYW5nZVN0YXR1cyhpZDpudW1iZXIpe1xuICAgIHRoaXMudGFza3MuZm9yRWFjaCggKGl0ZW06VGFzaykgPT4ge1xuICAgICAgaWYoIHBhcnNlSW50KCBpdGVtLmlkICkgPT0gaWQgKXtcbiAgICAgICAgaWYoIGl0ZW0uc3RhdHVzID09IGZhbHNlICl7XG4gICAgICAgICAgaXRlbS5zdGF0dXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgaXRlbS5zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmNsYXNzIFRlbXBsYXRle1xuICB0ZW1wbGF0ZTpzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKHRlbXBsYXRlX25hbWUpe1xuXG4gIH1cbiAgcG9wdWxhdGUoaWQ6c3RyaW5nLCBuYW1lOnN0cmluZywgc3RhdHVzOnN0cmluZyl7XG4gICAgbGV0IHRhc2s6YW55ID0gIGA8bGkgaWQ9XCIke2lkfVwiIGRhdGEtc3RhdHVzPVwiJHtzdGF0dXN9XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stbmFtZVwiPiR7bmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWZ1bmN0aW9uPVwiZG9uZVwiPmRvbmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtZnVuY3Rpb249XCJkZWxldGVcIj5kZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+YDtcbiAgICByZXR1cm4gdGFzaztcbiAgfVxufVxuXG5jbGFzcyBMaXN0Vmlld3tcbiAgbGlzdDogSFRNTEVsZW1lbnQ7XG4gIGNvbnN0cnVjdG9yKCBsaXN0aWQ6IHN0cmluZyApe1xuICAgIHRoaXMubGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxpc3QnKTtcbiAgfVxuICBjbGVhcigpe1xuICAgIHRoaXMubGlzdC5pbm5lckhUTUwgPSAnJztcbiAgfVxuICByZW5kZXIoIGl0ZW1zOkFycmF5PFRhc2s+ICl7XG4gICAgLy9yZW5kZXIgYXJyYXkgdXNpbmcgdGVtcGxhdGVcbiAgICBpdGVtcy5mb3JFYWNoKCAodGFzaykgPT4ge1xuICAgIGxldCBpZD0gdGFzay5pZDtcbiAgICBsZXQgbmFtZSA9IHRhc2submFtZTtcbiAgICBsZXQgc3RhdHVzID0gdGFzay5zdGF0dXMudG9TdHJpbmcoKTtcbiAgICBsZXQgaXRlbSA9IHRhc2t0ZW1wbGF0ZS5wb3B1bGF0ZShpZCxuYW1lLHN0YXR1cyk7XG4gICAgLy8gY29udmVydCBvdXIgc3RyaW5nIHRvIEhUTUwgTm9kZVxuICAgIGxldCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCkuY3JlYXRlQ29udGV4dHVhbEZyYWdtZW50KGl0ZW0pO1xuICAgIHRoaXMubGlzdC5hcHBlbmRDaGlsZCggZnJhZ21lbnQgKTtcbiAgICB9KTtcbiAgfVxufVxuLy9hcnJheSB0byBzdG9yZSB0YXNrc1xudmFyIHRhc2thcnJheTogQXJyYXk8VGFzaz4gPSBbXTtcbi8vVGFzayBNYW5hZ2VyIGNsYXNzLCBwYXNzIHRoZSB0YXNrIGFycmF5XG52YXIgdGFza21hbmFnZXIgPSBuZXcgVGFza01hbmFnZXIoIHRhc2thcnJheSApO1xuLy9saXN0IHZpZXdcbnZhciBsaXN0dmlldyA9IG5ldyBMaXN0VmlldygndGFzay1saXN0Jyk7XG4vL3Rhc2sgdGVtcGxhdGVcbnZhciB0YXNrdGVtcGxhdGUgPSBuZXcgVGVtcGxhdGUoJ3Rhc2stdGVtcGxhdGUnKTtcblxuXG5cbi8vcmVmZXJlbmNlIHRvIGZvcm1cbmNvbnN0IHRhc2tmb3JtOkhUTUxGb3JtRWxlbWVudCA9ICg8SFRNTEZvcm1FbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWZvcm0nKSk7XG50YXNrZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoIGV2ZW50OiBFdmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgaW5wdXQ6SFRNTEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbnB1dCcpO1xuICBsZXQgdGFza25hbWU6IHN0cmluZyA9ICg8SFRNTElucHV0RWxlbWVudD5pbnB1dCkudmFsdWU7XG4gIGxldCB0YXNrOlRhc2sgPSBuZXcgVGFzayh0YXNrbmFtZSk7XG4gIHRhc2ttYW5hZ2VyLmFkZCggdGFzayk7XG4gIHRhc2tmb3JtLnJlc2V0KCk7XG4gIGxpc3R2aWV3LmNsZWFyKCk7XG4gIGxpc3R2aWV3LnJlbmRlciggdGFza2FycmF5ICk7XG59KTtcbiJdfQ==
