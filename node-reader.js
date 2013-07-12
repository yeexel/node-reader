#!/usr/bin/env node
/**************************
--------node-reader--------
**************************/
var argv = require('optimist').argv;

var parser = require('rssparser'),
    options = {};

var Db = require('mongodb').Db,
    Server = require('mongodb').Server;
//**************************

var db = new Db('ReaderDB', new Server('localhost', 27017), {w:1});
var collection = db.collection('feeds', {w:1});

function Feed(alias, url)
{
    this.alias = alias;
    this.url = url;
}

// Reader module
var Reader = function() {

    function add() {

        var alias = process.argv[3],
            url = process.argv[4];

        var doc = {
            'name': alias,
            'url': url
        };

        db.open(function(err, db) {

            if (err) { console.dir(err); }

            collection.insert(doc, function(err, result) {

                console.log(alias + " added to the db");
                db.close();

            });

        });

    }

    function remove() {}

    function list() {

        db.open(function(err, db) {

            if (err) { console.dir(err); }

            collection.find().toArray(function(err, items) {
                console.log(items);
                db.close();
            });

        });

    }

    function read() {

        var name = process.argv[3];

        db.open(function(err, db) {

            if (err) { console.dir(err); }

            collection.findOne({'name': name}, function(err, doc) {

                parser.parseURL(doc.url, options, function(err, out) {

                    //console.log(out);
                    for (var i = 0, len = out.items.length; i < len; i++) {

                        console.log('----------------------');
                        console.log(out.items[i].title);
                        console.log(out.items[i].summary);

                    }

                    db.close();

                });

            });

        });

    }

    function help() {
        console.log("Help");
    }

    return {
        add: add,
        remove: remove,
        list: list,
        read: read,
        help: help
    };

}();
//DEBUG
console.log(process.argv);

if (argv.add) {
    Reader.add();
} else if (argv.list) {
    Reader.list();
} else if (argv.read) {
    Reader.read();
}
