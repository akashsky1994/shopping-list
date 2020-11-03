import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import router from "./routes";
import { handleError } from "./helpers/error";
import { handleOk } from "./helpers/util";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(compression());
app.use(cors());
app.use(helmet());
app.use(router);
app.response.sendError = handleError;
app.response.sendOk = handleOk;

export default app;
