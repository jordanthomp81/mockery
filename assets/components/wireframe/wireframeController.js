angular.module('mockery')

	.controller('wireframeController', [ '$scope', '$http', function($scope, $http) {
		var vm = this;
        
        vm.save = function () {
            
            var elementsArr = [];
            var startTime = Date.now();
            $('.drawing_board').children().each(function() {
                debugger;
                objectContruct = {}
                objectContruct.id = $(this).attr('id');
                objectContruct.text_content = 'none';
                objectContruct.shape = $(this).attr('id').substring(0, $(this).attr('id').length - 1);
                objectContruct.width = $(this).width();
                objectContruct.height = $(this).height();
                objectContruct.background_color = rgb2hex($(this).css('background-color'));
                objectContruct.top = $(this).position().top;
                objectContruct.top = $(this).position().left;
                elementsArr.push(objectContruct);
            });
       
            $('.app_navigation_last_saved').html("Last Save: " + timeNow());
            var endTime = Date.now();
            var totalTime = ( endTime - startTime ) / 100;
  
            
            $http.post('/mongo', elementsArr)
            .success(function(data){
                $scope.response = data;
                console.log('post yes ' + $scope.response);
            });
        };
	}]);
