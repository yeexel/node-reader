#!/usr/bin/env node
/*
*** node-reader --- command-line RSS reader
*** Developer: Oleksii Kulikov
*** Email: yeexel@gmail.com
*/
var argv = require('optimist').argv;
var request = require('request');
var colors = require('colors');
var fancyTimeStamp = require('fancy-timestamp');
var FeedParser = require('feedparser');
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;

var db = new Db('ReaderDB', new Server('localhost', 27017), { w: 1 });
var collection = db.collection('feeds', { w: 1 });

function Feed(name, url)
{
    this.name = name;
    this.url = url;
}

var Reader = function() {

    function add() {

        var name = process.argv[3],
            url = process.argv[4];

        var doc = new Feed(name, url);

        db.open(function(err, db) {

            if (err) { console.dir(err); }

            collection.insert(doc, function(err, result) {

                console.log(name.green + " added to the database.");
                db.close();

            });

        });

    }

    function purge() {

        var name = process.argv[3];

        db.open(function(err, db) {

            if (err) { console.dir(err); }

            collection.remove({ 'name': name }, function(err, doc) {

                console.log(name.red + " removed from the database.");
                db.close();

            });

        });

    }

    function list() {

        db.open(function(err, db) {

            if (err) { console.dir(err); }

            console.log('Your RSS feeds'.yellow.bold);

            collection.find().toArray(function(err, items) {

                if (err) { console.dir(err); }

                if (items.length === 0) { console.log('Empty here :('); }

                for (var i = 0, len = items.length; i < len; i++) {
                    console.log(items[i].name.cyan);
                }

                db.close();

            });

        });

    }

    function read() {

        var name = process.argv[3];

        db.open(function(err, db) {

            if (err) { console.dir(err); }

            collection.findOne({ 'name': name }, function(err, doc) {

                if (err) { console.dir(err); }

                request(doc.url).pipe(new FeedParser())
                    .on('error', function(error) {
                        db.close();
                    })
                    .on('data', function(item) {
                        console.log('- - - - - - - - - - - - - - - -');
                        console.log(item.title.bold);
                        console.log(fancyTimeStamp(item.pubdate, true).grey);
                        console.log(item.link.magenta);
                    });

                db.close();

            });

        });

    }

    function help() {
        console.log('node-reader (nr) / ver. 0.0.2');
        console.log('Usage:');
        console.log('$ nr --read "<alias>" // read RSS feed');
        console.log('$ nr --add "<alias>" "<url>" // add RSS feed');
        console.log('$ nr --purge "<alias>" // remove RSS feed');
        console.log('$ nr --list // list current feeds');
        console.log('$ nr --help // Nothing to explain :)');
        console.log('Have fun!'.rainbow);
    }

    return {
        add: add,
        purge: purge,
        list: list,
        read: read,
        help: help
    };

}();

if ( argv.add ) { Reader.add(); }
else if ( argv.purge ) { Reader.purge(); }
else if ( argv.list ) { Reader.list(); }
else if ( argv.read ) { Reader.read(); }
else if ( argv.help ) { Reader.help(); }
else { Reader.help(); }
