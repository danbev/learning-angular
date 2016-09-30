// A container to help organize the application. The second parameter
// could have been additional submodules to be injected into this module
var module = angular.module('Angular1', []);

module.factory('AngularHelper', function() {
  var buildIndex = function (source, property) {
    var tempArray = [];
    for (var i = 0, len = source.length; i < len; ++i) {
      tempArray[source[i][property]] = source[i];
    }
    return tempArray;
  };
  return {
    buildIndex: buildIndex
  };
});

module.constant('STATUSES', [
            {name: 'Not Started'},
            {name: 'In Progress'},
            {name: 'Done'}
]);

module.service('AngularModel', function() {
    var service = this,
        tasks = [
            {
                title: 'First task',
                description: 'Work on something',
                status: 'In Progress',
            },
        ];

    service.getTasks = function () {
        return tasks;
    };
});

// we inject the service and helper functions here:
module.controller('MainCtrl', function(AngularModel, AngularHelper, STATUSES) {
    var main = this;

    main.statuses = STATUSES;
    main.tasks = AngularModel.getTasks();
    main.statusesIndex = AngularHelper.buildIndex(STATUSES, 'name');

    main.setCurrentTask = function (task) {
        main.currentStory = task;
        main.currentStatus = main.statusesIndex[task.status];
    };

    main.createTask = function() {
        main.tasks.push({
            title: 'New Task',
            description: 'Description...',
            status: 'Not Started',
        });
    };

    main.setCurrentStatus = function (status) {
        if (typeof main.currentTask !== 'undefined') {
            main.currentTask.status = status.name;
        }
    };

});

// Returns a Directive Definition Object (DDO) that defines how the directive is supposed
// to be configured.
module.directive('task', function() {
    return {
        scope: true,
        replace: true,
        // this template will replace the element that is was defined on.
        template: '<div><h4>{{task.title}}</h4><p>{{task.description}}</p></div>'
    }
});
