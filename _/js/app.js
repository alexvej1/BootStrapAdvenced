angular.module("roux", ['ngRoute', 'ngSanitize', 'mgcrea.ngStrap'])

    .config(function($routeProvider, $locationProvider){

        $routeProvider
            .when('/', {

            templateUrl: '_/components/partials/start.html'
        })
            .when('/myCarousel', {

                templateUrl: '_/components/partials/start.html'
            })
            .when('/monday', {

                templateUrl: '_/components/partials/start.html'
            })
            .when('/tuesday', {

                templateUrl: '_/components/partials/start.html'
            })
            .when('/wednesday', {

                templateUrl: '_/components/partials/start.html'
            })

            .when('/thursday', {

                templateUrl: '_/components/partials/start.html'
            })
            .when('/friday', {

                templateUrl: '_/components/partials/start.html'
            })



            .when('/monday1', {

                templateUrl: '_/components/partials/schedule.html'
            })
            .when('/tuesday1', {

                templateUrl: '_/components/partials/schedule.html'
            })
            .when('/wednesday1', {

                templateUrl: '_/components/partials/schedule.html'
            })

            .when('/thursday1', {

                templateUrl: '_/components/partials/schedule.html'
            })
            .when('/friday1', {

                templateUrl: '_/components/partials/schedule.html'
            })

            .when('/artists', {

                templateUrl: '_/components/partials/artists.html'
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

            .when('/about', {

                templateUrl: '_/components/partials/about.html'
            })

            .when('/privacypolicy', {

                templateUrl: '_/components/partials/privacypolicy.html'
            })
            .when('/contact/:id', {

                templateUrl: '_/components/partials/contact.html'
            })

            .otherwise({
               // redirectTo: '/start.html'
            });



    });


