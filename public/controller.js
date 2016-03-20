angular.module('angmodule', ['todoController', 'todoService']);

//adding services
angular.module('todoService', [])
	.factory('Todos', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/listoftodos');
			},
			create : function(todoData) {
				return $http.post('/addtodo', todoData);
			},
			delete : function(id) {
				return $http.delete('/deletetodo/' + id);
			},
			reset  : function(){
				return $http.post('/reset');
			}
		}
	}]);


//adding controllers for each
angular.module('todoController', [])
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};

		Todos.get()
			.success(function(data) {
				$scope.todos = data;
			});


$scope.createTodo = function() {
				Todos.create($scope.formData)
					.success(function(data) {
						$scope.formData = {}; // clearing form
						$scope.todos = data; // refresh the list
					});
			
};

$scope.resetTodo = function(){
	Todos.reset()
		.success(function(data){
			$scope.todos = data; //refreshing the list
		})
}


$scope.deleteTodo = function(id) {

			Todos.delete(id)
				.success(function(data) {
					$scope.todos = data; // refreshing the list
				});
		};
	}]);
