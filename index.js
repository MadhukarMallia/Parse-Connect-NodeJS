'use strict';

const config = require('./config/config');

const app = require('./config/express')(config);

// Start the app by listening on <port>
app.listen(config.port);

// Expose app
exports = module.exports = app;

// Logging initialization
console.log(`Parse Connect Server started on port ${config.port}`);
