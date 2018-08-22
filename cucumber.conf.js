exports.config = {
    specs: ['features/spec.js'],
    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },

    capabilities: {
        browserName: 'chrome'
    },

    onPrepare: function () {
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'xmloutput',
            savePath: 'EDFtestresults',
            takeScreenshots: true,
            takeScreenshotsOnlyOnFailures: true,
            showPassed: true,
            cleanDestination: false,
            fileNamePrefix: 'Prefix',
            fixedScreenshotName: true

        }));


    }
}