CKFinder.define('plugins/excelPreview', function (require, exports, module) {
    'use strict';

    var $ = require('jquery');

    // Register the plugin
    CKFinder.addPlugin('excelPreview', function (api) {
        // Define the preview function
        function previewExcel(fileUrl) {
            // Generate the preview file URL
            var previewUrl = '/path/to/preview.php?file=' + encodeURIComponent(fileUrl);

            // Open the preview file in a new window or tab
            window.open(previewUrl);
        }

        // Register the preview function
        api.registerFilePreviewHandler(function (file) {
            // Check if the file is an Excel document
            if (file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                // Call the preview function
                previewExcel(file.getUrl());
            }
        });
    });
});