'use strict'

// Dev Dependencies
const gulp = require('gulp'),
      plugins = require('gulp-load-plugins')(),
      config = require('./config.json')

// BrowserSync Task
require(config.tasksPath + '/browser-sync')(gulp, plugins, config)

// Stylus Task
require(config.tasksPath + '/stylus')(gulp, plugins, config)

// Pug Task
// require(config.tasksPath + '/pug')(gulp, plugins, config)

// JS Task
// require(config.tasksPath + '/js-compile')(gulp, plugins, config)

// Imagemin Task
// require(config.tasksPath + '/imagemin')(gulp, plugins, config)

// Watch Task
// require(config.tasksPath + '/watch')(gulp, plugins, config)

// Default Task
require(config.tasksPath + '/default')(gulp, plugins, config)
