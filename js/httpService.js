var appModule = angular.module('ServiceApp', [])

appModule.factory('userListService', ['$http', 
	function($http){
		var doRequest = function () {
			return $http({
				method: 'GET',
				url: '../json/people.json'
			})
		}
		return {
			getUserList: function() {
				return doRequest()
			}
		}
	}
])

appModule.controller('httpCtrl', ['$scope', '$timeout', 'userListService', //服务由AngularJS实例化
	function($scope, $timeout, userListService){
		var timeout;
		// 监控一个ng-model的变化
		$scope.$watch('username', function(newUserName) {
			if (newUserName) {
				if (timeout) {
					$timeout.cancel(timeout)
				}
				timeout = $timeout(function() {
					userListService.getUserList() // 可直接调用，不需new
						.success(function(res, status) {
							$scope.people = res['data']['people']
						})
				}, 350)
			}
		})		
	}
])