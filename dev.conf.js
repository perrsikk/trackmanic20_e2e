exports.config = {

    directConnect: true,

    baseUrl: 'http://test20.trackmanic.com',

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'jasmine',

    suites: {
        sign_in: ['./test/sign_in/sign_in.spec.js']
    },

    allScriptsTimeout: 30000,

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        isVerbose: true
    },

    onPrepare: function() {
        const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
        const specReporter = require('jasmine-spec-reporter');

        jasmine.getEnv().addReporter(new specReporter());
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './reports/',
            screenshotsFolder: 'images',
            takeScreenshotsOnlyOnFailures: true
        }));

        browser.ignoreSynchronization = false;
        browser.driver.manage().window().setSize(1440, 900);
    }
};