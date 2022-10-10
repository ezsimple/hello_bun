// const express = require('express')
// const app = express();
// const path = require('path')

// // Use liquidjs
// const { Liquid } = require('liquidjs');
// const engine = new Liquid();

import express from 'express';
import path from 'path';
import { Liquid } from 'liquidjs';

const app = express();
const engine = new Liquid();
const __dirname = path.resolve();

// for Util
// const ip = require('ip')
// const _ = require('lodash')

// for static
// app.use('/static', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
// const serveStatic = require('serve-static')
// app.use(serveStatic(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'public')));

// var session = require('express-session');
// var FileStore = require('session-file-store')(session);
// new FileStore({
//   path:  require('path').join(require('os').tmpdir(), 'sessions')
// })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'liquid');
app.engine('html', engine.express())

require('./router/main')(app);
require('./router/hr_list')(app);
// import * as r1 from './router/main';
// import * as r2 from './router/hr_list';

const host = '0.0.0.0';
const port = process.env.PORT || 3000

// error: Cannot find package "child_process"
// const { exec } = require('child_process');
// const ips = require('child_process').execSync("ifconfig | grep 'inet ' | awk '{gsub(/addr:/,\"\");print $2}'").toString().trim().split("\n");

// var os = require('os');
// var networkInterfaces = os.networkInterfaces();
// console.log(networkInterfaces);

// const { spawn, exec } = require('bun-utilities/spawn')
// exec(['ls -al'], (error, stdout, stderr) => {
//   console.log(`exec ifconfig ${stdout} ${stderr}`)
// })

app.listen(port, host, () => {
  console.log(`Express server has started ${port}`);
});