(function() {
    function config($locationProvider, $stateProvider) {
      $locationProvider
          .html5Mode({
              enabled: true,
              requireBase: false
           });

      $stateProvider
          .state('home', {
              url: '/',
              controller: 'HomeCtrl as home',
              templateUrl: '../templates/home.html'
          })
          .state('modal', {
              url: '/modal',
              controller: 'ModalCtrl as modal',
              templateUrl: '../templates/modal.html'
          });
    }

    angular
        .module('goodLooking', ['ui.router'])
        .config(config);
})();
