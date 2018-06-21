// Karma configuration
// Generated on Thu Jun 21 2018 21:00:49 GMT+0300 (Финляндия (лето))

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '../',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine'],

		// list of files / patterns to load in the browser
		files: [
			'assets/bower_components/angular/angular.js',
			'assets/bower_components/angular-mocks/angular-mocks.js',
			'assets/bower_components/angular-modal-service/dst/angular-modal-service.min.js',
			'assets/bower_components/angular-ui-router/release/angular-ui-router.min.js',
			'assets/bower_components/angular-base64-upload/dist/angular-base64-upload.min.js',
			'assets/bower_components/angular-toastr/dist/angular-toastr.tpls.js',

			'assets/js/app.js',
			'assets/js/config/config.js',
			'assets/js/services/popup.service.js',
			'assets/js/services/task.service.js',
			'assets/js/services/user.service.js',
			'assets/js/services/helper.service.js',
			'assets/js/services/session.service.js',
			'assets/js/controllers/testController.js',
			'assets/js/components/menu/menu.component.js',
			'assets/js/components/registration/registration.component.js',
			'assets/js/components/todo/todo.component.js',
			'assets/js/components/registration-form/registrationForm.component.js',
			'assets/js/components/login-form/loginForm.component.js',
			'assets/js/components/homePage/homePage.component.js',
			'assets/js/components/userProfile/userProfile.component.js',
			'assets/js/components/task/task.component.js',
			'assets/js/components/popup/popup.component.js',
			'assets/js/filters/filters.js',

			'test/*.js'
		],

		// list of files / patterns to exclude
		exclude: [],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {},

		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress'],

		// web server port
		port: 9876,

		// enable / disable colors in the output (reporters and logs)
		colors: true,

		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,

		// enable / disable watching file and executing test whenever any file changes
		autoWatch: true,

		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['Chrome'],

		// Continuous Integration mode
		// if true, Karma captures browsers, runs the test and exits
		singleRun: false,

		// Concurrency level
		// how many browser should be started simultaneous
		concurrency: Infinity
	})
}
