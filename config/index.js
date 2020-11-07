import _ from "lodash";

const ENV = process.env.SLICE_ENV;
let envConfig = {};

//Depending upon environment we can add different config 
if(ENV){
    envConfig = require(`./${ENV}.json`);
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
