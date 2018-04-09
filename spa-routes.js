// app.constant("HOME","/home");
// app.constant("IMPORTANCE","/importance");
// app.constant("PRODUCTS","/products");
// app.constant("CONTACT","/contact");



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