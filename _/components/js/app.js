angular.module("roux", ['ngRoute', 'ngSanitize', 'mgcrea.ngStrap'])

    .config(function($routeProvider, $locationProvider){

        $routeProvider.when('/', {

            templateUrl: '_/components/partials/start.html'
        })

            .when('/venuetravel', {

                templateUrl: '_/components/partials/venuetravel.html'
            })
            .when('/schedule', {

                templateUrl: '_/components/partials/schedule.html'
            })

            .when('/register', {

                templateUrl: '_/components/partials/register.html'
            })

            .when('/contact/:id', {

                templateUrl: '_/components/partials/contact.html'
            })

            .otherwise({
                redirectTo: '/start.html'
            });



    });


