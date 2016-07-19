(function () {
  'use strict';

  function exampleController($state){
      let self = this;

      self.click = (line) => {
          $state.go('details', {
              line: line
          });
      };


  }

  exampleController.$inject = ['$state'];

  angular.module('angular-mdl-skeleton').controller('ExampleController', exampleController);
}());
