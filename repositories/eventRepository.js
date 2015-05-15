var util         = require("util");
var EventEmitter = require("events").EventEmitter;
var Mongo = require('../lib/mongodb');
var io = require('../lib/io');

function EventRepository () {
    EventEmitter.call(this);
}

util.inherits(EventRepository, EventEmitter);

/**
 * Get all for key
 *
 * @param collectionKey
 */
EventRepository.prototype.getAllForKey = function (collectionKey) {
    var self = this;

    var database = new Mongo();

    database.on('success', function(collection) {

        collection.find().toArray(function(err, result) {
            self.respond(err, result);
        });

    }).on('error', function (err) {
        self.respond(err, null);
    });

    database.execute(collectionKey);
};

/**
 * Insert or update if exits
 *
 * @param collectionKey
 * @param json
 */
EventRepository.prototype.insertOrUpdateIfExists = function (collectionKey, json) {
    var self = this;

    var database = new Mongo();

    database.on('success', function(collection) {

        collection.updateOne(json, json, {upsert:true}, function(err, result) {
            if (!err) {
                io.sockets.emit('eventWasCreated', json);
            }
            self.respond(err, result);
        });

    }).on('error', function (err) {
        self.respond(err, null);
    });

    database.execute(collectionKey);
};

/**
 * Respond to the database request by throwing events
 *
 * @param err
 * @param result
 */
EventRepository.prototype.respond = function (err, result) {
    var self = this;

    if (err) {
        self.emit('error', err);
    } else {
        self.emit('success', result);
    }
};

module.exports = EventRepository;