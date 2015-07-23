# Introduction


A todoApp for Angular 2 apps.

It is something similar to the AngularJS Quick Start but does the entire build with gulp.

**Note:** Angular 2.0 is not production ready yet! This seed project is perfect for playing around with the latest versions but do not start new projects with it since a lot of new changes are going to be introduced until the framework is officially released.

# How to start

```bash
git clone https://github.com/mgechev/angular2-seed.git
cd angular2-seed
npm install
# If you don't have gulp already installed
npm install -g gulp
# dev
gulp serve.dev

or npm install -g http-server and go to the directory dist/dev and use 'http-server'

Configure your app base if you serve the app from another directory than root in `gulpfile.js`.
Defaults to `var APP_BASE = '/'`

# Now to extend?

If you want to use your custom libraries:

```bash
npm install my-library --save
vim gulpfile.js
```
Add reference to the installed library in `PATH.src.lib`.


# License

MIT

#TODO

UPDATE / DELETE / USE HTTP / FORMAT / SEARCH
