import _ from "lodash";

const ENV = process.env.SLICE_ENV;
let envConfig = {};
if (ENV === "development") {
    envConfig = require("./env/development.json");
} else if (ENV === "staging") {
    envConfig = require("./env/staging.json");
} else if (ENV === "production") {
    envConfig = require("./env/production.json");
}

const baseConfig = {
    ENV,
    MONGO: {
        URI: process.env.MONGO_URI
    },
	PORT: process.env.APP_PORT || 3003
};

const config = _.merge(baseConfig, envConfig);

export default config;
