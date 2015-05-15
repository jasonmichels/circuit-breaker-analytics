var express = require('express');
var router = express.Router();
var EventRepository = require('../repositories/eventRepository');

/* Create a new event item */
router.post('/', function(req, res, next) {
    var json = req.body;
    var collectionKey = json.commandName;

    res.json({ message: "Processing circuit breaker event", status: "success" });

    var eventRepo = new EventRepository();

    eventRepo.on('success', function (result) {
        // had a good insert. Nothing to do here. This could even be deleted
    }).on('error', function (err) {
        // had a problem inserting, may need to log error somewhere
    });

    eventRepo.insertOrUpdateIfExists(collectionKey, json);
});


/**
 * Get all events for a specific command
 */
router.get('/:collectionKey', function(req, res, next) {

    var collectionKey = req.params.collectionKey;

    var eventRepo = new EventRepository();

    eventRepo.on('success', function (result) {
        res.json({ message: "success", status: "success", data: result });
    }).on('error', function (err) {
        res.json({message: "Error processing request", status: "error", error: err});
    });

    eventRepo.getAllForKey(collectionKey);
});

module.exports = router;
