const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
var shortid = require("shortid")
const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({ users: [],sessions:[],transfers:[] })
    .write()

module.exports = db;