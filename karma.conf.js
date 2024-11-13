module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'projects/billing/src/**/*.ts',
      'projects/billing/src/**/*.spec.ts',
      'projects/billing-host/src/**/*.ts',
      'projects/billing-host/src/**/*.spec.ts',
    ],
    exclude: [
    ],

    preprocessors: {
      '**/*.ts': ['karma-typescript'],
    },


    reporters: ['progress', 'junit'],

    junitReporter: {
      outputDir: 'coverage',
      outputFile: 'unit-test-report.xml',
      useBrowserName: false
    },
    port: 9876,
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,  // Rodar os testes uma vez e finalizar
    concurrency: Infinity  // Para rodar os testes simultaneamente, se necessário
  })
}
