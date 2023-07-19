function skillsMember() {
      return {
            name: 'skillsMember',
            restrict: 'E',
            templateUrl: 'app/views/skills-member.html',
            scope: {
                member: '='
            },
            controller: function($scope) {
                $scope.member = $scope.member;
            }
        };    
}