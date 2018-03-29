var myModule = angular.module('HelloModule', [])

myModule
	.controller('Hello',['$scope', function($scope) {
		$scope.greeting = {
			text: 1221,
		}
		$scope.tip = function() {
			alert(111)
		}
	}])

	// 控制器基本用法1
	.controller('EventController', ['$scope', function($scope){
		$scope.count = 0
		$scope.$on('click', function() {
			$scope.count++
		})
	}])

	// 控制器基本用法2
	.controller('FormCtrl', ['$scope', function($scope){
		$scope.userInfo = {
			email: 'jinben@126.com',
			password: '123456',
			isRemember: true
		}
		$scope.resetPsw = function() {
			$scope.userInfo = {
				email: '',
				password: '',
				isRemember: false
			}
		}
	}])

	// 指令模版的缓存
	// .run(function($templateCache) {
	// 	$templateCache.put('hello1.html', '<p>1111<div ng-transclude></div></p>');
	// })
	.directive('hello', function (/* $templateCache */) {
		return {
			restrict: 'AEMC',
			transclude: true,
			template: '<div>hello<div ng-transclude></div></div>',
			// templateUrl: './template/hello.html',
			// template: $templateCache.get('hello1.html'),	
			replace: true,
		}
	})

	// 指令复用
	.controller('LinkCtrl', ['$scope', function($scope){
		$scope.tip = ''
		$scope.loadData = function() {
			$scope.tip = '正在加载数据'
		}
		$scope.stopLoad = function() {
			$scope.tip = ''
		}
	}])
	.controller('LinkCtrl2', ['$scope', function($scope){
		$scope.tip = ''
		$scope.loadData2 = function() {
			$scope.tip = '正在加载数据222'
		}
		$scope.stopLoad2 = function() {
			$scope.tip = ''
		}
	}])
	.directive('loader', function() {
		return {
			restrict: 'AE',
			link: function(scope, element, attrs) {
							element
								.bind('mouseenter', function() {
									// scope.loadData() // 不好用，无法控制scope，只能console.log
									// scope.$apply('loadData()') // 推荐
									scope.$apply(attrs.howtoload) // 小写属性名
								})
								.bind('mouseleave', function() {
									scope.$apply(attrs.howtostop)
								})
			}
		}
	})

	// 指令与指令通过（引用其他指令的）控制器交互
	.directive('superman', function() {
		return {
			scope: {}, // 独立scope
			restrict: 'AE',
			controller: function($scope) { // 对外暴露型controller，可被其他指令调用
				$scope.abilities = []
				this.addStrength = function() {
					$scope.abilities.push('strength')
				}
				this.addSpeed = function() {
					$scope.abilities.push('speed')
				}
				this.addLight = function() {
					$scope.abilities.push('light')
				}
			},
			link: function(scope, element, attrs) {
				element.addClass('btn btn-primary')
				element.bind('mouseenter', function() {
					console.log(scope.abilities.join(', '))
				})
			}
		}
	})
	.directive('strength', function() {
		return {
			require: '^superman',
			link: function(scope, element, attrs, requireModelCtrl) {
				requireModelCtrl.addStrength()
			}
		}
	})
	.directive('speed', function() {
		return {
			require: '^superman',
			link: function(scope, element, attrs, requireModelCtrl) {
				requireModelCtrl.addSpeed()
			}
		}
	})
	.directive('light', function() {
		return {
			require: '^superman',
			link: function(scope, element, attrs, requireModelCtrl) {
				requireModelCtrl.addLight()
			}
		}
	})

	// 独立scope中的@、=、&
	.controller('DrinkCtrl', ['$scope', function($scope){
		$scope.cheer = '青啤',
		$scope.sayHello = function(name) {
			console.log('hello ' + name)
		}
	}])
	.directive('drink', function() {
		return {
			restrict: 'AE',
			scope: {
				// choose: '@' // 传字符串（把"{{cheer}}"传给模板中的choose）
				choose: '=' // 传变量，与父scope的变量进行双向绑定（把cheer传给模板中的choose）
			},
			// template: '<div>{{choose}}</div>',
			template: '<input type="text" ng-model="choose" />'
			// 以下方式被@取代
			// link: function(scope, element, attrs) {
			// 	scope.choose = attrs.choose 
			// }
		}
	})
	.directive('greet', function() {
		return {
			restrict: 'AE',
			scope: {
				say: '&' // 传父scope的函数（把sayHello()传给模板中的say()，调用scope上的customerName来执行）
			},
			template: '<br /><input type="text" ng-model="customerName"> <br /> <button class="btn btn-default" ng-click="say({name: customerName})">欢迎</button>'
		}
	})

	// div模拟input
	.directive('contenteditable', function() {
		return {
			// restrict: 'AE',
			require: 'ngModel',
			link: function(scope, element, attrs, requireCtrl) {
				// view -> model
				element.bind('keyup', function() {
					scope.$apply(function() {
						requireCtrl.$setViewValue(element.text())
						console.log('requireCtrl.$viewValue: ' + requireCtrl.$viewValue)
					})
				})

				// // model -> view
				// requireCtrl.$render = function() {
				// 	element.html(requireCtrl.$viewValue)
				// }

				// // load init value from dom
				// requireCtrl.$setViewValue(element.html())
			}
		}
	})

	// $http依赖
	.controller('httpCtrl', ['$scope', '$http', function($scope, $http){
		$scope.people = []

		// GitHub原因先注释掉
		// $http({
		// 	method: 'GET',
		// 	url: '../json/people.json'
		// }).success(function(res) {
		// 	$scope.people = res['data']['people']
		// }).error(function(err) {
		// 	console.error(error)
		// })

		// new version of Angular
		// $http.get('../json/people.json').then(function(res) {
		// 	$scope.people = res['data']['people']
		// }, function(err) {
		// 	console.error(err)
		// })
	}])


	// 自定义filter
	.filter('greetFilter', function() {
		return function(item) {
			return 'hello ' + item
		}
	})