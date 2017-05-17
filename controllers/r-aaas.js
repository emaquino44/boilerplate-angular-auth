var express = require('express');
var R - aaa = require('../models/r-aaa');
var router = express.Router();

router.route('/')
    .get(function(req, res) {
        R - aaa.find(function(err, r - aaas) {
            if (err) return res.status(500).send(err);

            return res.send(r - aaas);
        });
    })
    .post(function(req, res) {
        R - aaa.create(req.body, function(err, r - aaa) {
            if (err) return res.status(500).send(err);

            return res.send(r - aaa);
        });
    });

router.route('/:id')
    .get(function(req, res) {
        R - aaa.findById(req.params.id, function(err, r - aaa) {
            if (err) return res.status(500).send(err);

            return res.send(r - aaa);
        });
    })
    .put(function(req, res) {
        R - aaa.findByIdAndUpdate(req.params.id, req.body, function(err) {
            if (err) return res.status(500).send(err);

            return res.send({ message: 'success' });
        });
    })
    .delete(function(req, res) {
        R - aaa.findByIdAndRemove(req.params.id, function(err) {
            if (err) return res.status(500).send(err);

            return res.send({ message: 'success' });
        });
    });

module.exports = router;
