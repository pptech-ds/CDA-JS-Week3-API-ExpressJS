import dotenv from 'dotenv';
dotenv.config();

const env = {
    app_port: process.env.APP_PORT || 8085
}

export default env;