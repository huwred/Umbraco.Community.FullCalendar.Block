angular.module('umbraco').requires.push('ui.calendar');

angular.module('umbraco').controller('fullCalendarController', 
    ['$scope', '$log', 'uiCalendarConfig', '$timeout','FullCalendarResource',
    function($scope, $log, uiCalendarConfig, $timeout,FullCalendarResource) {

        $scope.renderCalender = function(calendar) {
            console.log("render");
            uiCalendarConfig.calendars.myCalendar.fullCalendar('removeEventSource', $scope.eventSources);
        };

        $scope.uiCalendarConfig = uiCalendarConfig;

        $scope.events = [];
        $scope.eventSources = [];

        FullCalendarResource.getEventsFromApi($scope.block.data.dataSource).then(function(response) {
            $scope.eventSources.push(response.data);
        });

        $scope.calendarConfig = {
            selectable: true,
            selectHelper: true,
            editable: true,
            header:{
                left: $scope.block.data.left,
                center: $scope.block.data.center,
                right: $scope.block.data.right
            }
        };
      
        $scope.eventRender = function( event, element, view ) { 
            element.attr({'tooltip': event.title,
                'tooltip-append-to-body': true});
            $compile(element)($scope);
        };

        $scope.addEvent = function() {
            $scope.events.push({
                title: $scope.event.Title,
                start: $scope.event.startDate,
                end: $scope.event.endDate
            });
            console.log($scope.pendingRequests);
        };
        $scope.showIt = true;
        $scope.showCal = function() {
            $scope.showIt = !$scope.showIt;
            $scope.showIt && $timeout($scope.renderCalender);
        };

    }
]);