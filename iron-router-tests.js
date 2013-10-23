Router.configure({

    template: 'RouterContent',
    layoutTemplate: 'RouterLayout',
    notFoundTemplate: 'RouterNotFound',
    loadingTemplate: 'RouterLoading',
    yieldTemplates: {
        'RouterSidebar': { to: 'sidebar' }
    },
    action: function () {
        console.log("Router's action called");
        console.dir(this);
        this.render();
    }

});

Router.map(function () {
    
    this.route('home', {
        path: '/',
        action: function () {
            this.redirect('RouterDefaults', null, {
                replaceState: true
            });
        }
    });

    this.route('RouterDefaults', {
        path: '/RouterDefaults'
    });

    this.route('routeOverrides', {
        path: '/routeOverrides',
        template: 'routeContent',
        layoutTemplate: 'routeLayout',
        notFoundTemplate: 'routeNotFound',
        loadingTemplate: 'routeLoading',
        yieldTemplates: {
            'routeSidebar': { to: 'sidebar' }
        },
        action: function () {
            console.log("route's action called");
            console.dir(this);
            this.render();
        }
    });

    this.route('controllerOverrides', {
        path: '/controllerOverrides',
        controller: 'SomeController',
        // route parameters are specified just to show, that they are overridden
        template: 'routeContent',
        layoutTemplate: 'routeLayout',
        notFoundTemplate: 'routeNotFound',
        loadingTemplate: 'routeLoading',
        yieldTemplates: {
            'routeSidebar': { to: 'sidebar' }
        },
        action: function () {
            console.log("route's action called");
            console.dir(this);
            this.render();
        }
    });

});

SomeController = RouteController.extend({
    template: 'SomeControllerContent',
    layoutTemplate: 'SomeControllerLayout',
    notFoundTemplate: 'SomeControllerNotFound',
    loadingTemplate: 'SomeControllerLoading',
    yieldTemplates: {
        'SomeControllerSidebar': { to: 'sidebar' }
    },
    action: function () {
        console.log("controller's action called");
        console.dir(this);
        this.render();
    }
});