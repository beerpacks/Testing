const express = require('express');
const bodyParser = require('body-parser');
const authenticate = require('../authenticate');
const Favorites = require('../models/favorites');
const cors = require('./cors');

const favortieRouter = express.Router();

favortieRouter.use(bodyParser.json());

favortieRouter.route('/')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        Favorites.find({ user: req.user._id })
            .populate('dishes.dish')
            .then((favorite) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(favorite);
            }, (err) => next(err))
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Favorites.find({ user: req.user._id })
            .then((favorite) => {
                if (favorite === null) {
                    Favorites.create({ user: req.user._id })
                        .then((newFavorites) => {
                            console.log('favorite Created ', newFavorites);
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            favorite = newFavorites;
                        }, (err) => next(err))
                        .catch((err) => next(err));
                }
                favorite.dishes.find({ dish: req.body }).then((dishId) => {
                    if (dishId === null) {
                        favorite.dishes.push(req.body);
                        favorite.save()
                            .then((anotherFavorite) => {
                                Favorites.findById(anotherFavorite._id)
                                    .populate('dishes.dish')
                                    .then((favor) => {
                                        res.statusCode = 200;
                                        res.setHeader('Content-Type', 'application/json');
                                        res.json(favor);
                                    })
                            }, (err) => next(err));
                    }
                })
            });
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /favorites');
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Favorites.remove({ user: req.user._id })
            .then((resp) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(resp);
            }, (err) => next(err))
            .catch((err) => next(err));
    });

favortieRouter.route('/:dishId')
    .options(cors.corsWithOptions, (req, res) => {
        res.sendStatus(200);
    })
    .get(cors.cors, (req, res, next) => {
        res.statusCode = 403;
        res.end('Get operation not supported on /favorites/' + req.params.dishId);
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Favorites.find({ user: req.user._id })
            .then((favorite) => {
                if (favorite === null) {
                    next(new Error("Favorites not created"));
                }
                favorite.dishes.push(req.body);
                favorite.save()
                    .then((anotherFavorite) => {
                        Favorites.findById(anotherFavorite._id)
                            .populate('dishes.dish')
                            .then((favor) => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(favor);
                            })
                    }, (err) => next(err));
            });
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        res.statusCode = 403;
        res.end('Put operation not supported on /favorites/' + req.params.dishId);
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
        Favorites.find({ user: req.user._id })
            .then((favorite) => {
                if (favorite === null) {
                    next(new Error("Favorites not created"));
                }
                favorite.dishes.remove(req.body);
                favorite.save()
                    .then((anotherFavorite) => {
                        Favorites.findById(anotherFavorite._id)
                            .populate('dishes.dish')
                            .then((favor) => {
                                res.statusCode = 200;
                                res.setHeader('Content-Type', 'application/json');
                                res.json(favor);
                            })
                    }, (err) => next(err));
            });
    });


module.exports = favoriteRouter;