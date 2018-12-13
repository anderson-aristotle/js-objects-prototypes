'use strict'

const User = function (name, email) {
  this.name = name
  this.email = email
  this.runs = []
}

const Run = function (date, distance, timeTaken) {
  this.date = date
  this.distance = distance
  this.timeTaken = timeTaken
}

module.exports = {
  Run: Run,
  User: User
}

// In node, use like so:
//
//    const runTracker = require('./lib/runs')
//    let christopherRobin = new runTracker.User('Christopher Robin', 'wdi@christopherRobin.com')
//
// You can even push new Run instances into the runs array with something like:
//
//    christopherRobin.runs.push(new runTracker.Run(date, distance, timeTaken))
