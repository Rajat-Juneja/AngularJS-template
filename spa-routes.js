
app.config(function($routeProvider,$locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider.when("/home",{
        templateUrl:"home.html"
    }).when("/importance",
        {templateUrl:"importance.html"}).when("/products",
        {templateUrl:"products.html"}).when("/contact",
            {templateUrl:"contact.html"}).otherwise(
                {template:""}) ;
});