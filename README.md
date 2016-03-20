# Yahoo - todo list - app

A simple todo list app with features of adding and removing to-do items. I haven't concentrated on the UI part.

### Version
0.0.1

### Tech

* [AngularJS] - HTML enhanced for web apps
* [Node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [MongoDB] - Document driven database

### Installation

You need to have Node.js and MongodB installed.
Once done:

In C: directory, make a folder for MongodB to use as database.
```sh
$ mkdir data
$ mkdir data/db
```
Then run mongod.exe from the folder where MongodB is installed to bring up the dB.

Next go into the application code folder where app.js is:
```sh
$ npm install
$ node app.js
```

This will start the app. Go to http://localhost:8080/ in the browser to use the app.

**Cheers!**

[//]: #
   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [MongoDB]: <https://www.mongodb.org/> 