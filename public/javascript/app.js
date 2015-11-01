(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider, $httpProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('SignUp',{
			url: '/signUp',
			templateUrl: 'views/signUp.html'
		}).state('Profile',{
			url: '/profile/:id',
			templateUrl: 'views/profile.html'
		}).state('root',{
			url: '',
			templateUrl: 'views/brainstorm.html',
			abstract: true
		}).state('root.Dashboard',{
			url: '/dashboard/:id',
			templateUrl: 'views/dashboard.html'
		}).state('root.ExecutiveSummary',{
			url: '/executiveSummary/:id',
			templateUrl: 'views/executiveSummary.html'
		}).state('root.GeneralDescription',{
			url: '/generalDescription/:id',
			templateUrl: 'views/generalDescription.html'
		}).state('root.Products_Services',{
			url: '/products_services/:id',
			templateUrl: 'views/products_services.html'
		}).state('root.MarketingPlan',{
			url: '/marketingPlan/:id',
			templateUrl: 'views/marketingPlan.html'
		}).state('root.OperationalPlan',{
			url: '/operationalPlan/:id',
			templateUrl: 'views/operationalPlan.html'
		}).state('root.Mgmt_Org',{
			url: '/management_organization/:id',
			templateUrl: 'views/management_organization.html'
		}).state('root.FinancialPlan',{
			url: '/financialPlan/:id',
			templateUrl: 'views/financialPlan.html'
		}).state('root.Appendices',{
			url: '/appendices/:id',
			templateUrl: 'views/appendices.html'
		}).state('Print',{
			url: '/print/:id',
			templateUrl: 'views/print.html'
		}).state('Review',{
			url: '/review/:id',
			templateUrl: 'views/review.html'
		});
		$urlRouterProvider.otherwise('/');
		// $httpProvider.interceptors.push("AI");
	}
})();
