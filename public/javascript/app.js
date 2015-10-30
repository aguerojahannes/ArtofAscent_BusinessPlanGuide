(function() {
	'use strict';
	angular.module('app', ['ui.router', 'ngMaterial'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).state('SignUp',{
			url: '/signUp',
			templateUrl: 'views/signUp.html'
		}).state('root',{
			url: '',
			templateUrl: 'views/brainstorm.html',
			abstract: true
		}).state('root.Create',{
			url: '/createYourPlan',
			templateUrl: 'views/createYourPlan.html'
		}).state('root.ExecutiveSummary',{
			url: '/executiveSummary',
			templateUrl: 'views/executiveSummary.html'
		}).state('GeneralDescription',{
			url: '/generalDescription',
			templateUrl: 'views/generalDescription.html'
		}).state('Products_Services',{
			url: '/products_services',
			templateUrl: 'views/products_services.html'
		}).state('MarketingPlan',{
			url: '/marketingPlan',
			templateUrl: 'views/marketingPlan.html'
		}).state('OperationalPlan',{
			url: '/operationalPlan',
			templateUrl: 'views/operationalPlan.html'
		}).state('Mgmt_Org',{
			url: '/management_organization',
			templateUrl: 'views/management_organization.html'
		}).state('FinancialPlan',{
			url: '/financialPlan',
			templateUrl: 'views/financialPlan.html'
		}).state('Apendices',{
			url: '/apendices',
			templateUrl: 'views/apendices.html'
		}).state('Print',{
			url: '/print',
			templateUrl: 'views/print.html'
		}).state('Review',{
			url: '/review',
			templateUrl: 'views/review.html'
		});
		$urlRouterProvider.otherwise('/');
	}
})();
