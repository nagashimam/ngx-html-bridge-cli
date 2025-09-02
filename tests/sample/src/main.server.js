"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const platform_browser_1 = require("@angular/platform-browser");
const app_1 = require("./app/app");
const app_config_server_1 = require("./app/app.config.server");
const bootstrap = () => (0, platform_browser_1.bootstrapApplication)(app_1.App, app_config_server_1.config);
exports.default = bootstrap;
