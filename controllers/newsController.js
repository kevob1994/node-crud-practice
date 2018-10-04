const NewsModel = require('../models/newsModel');

exports.news_list = (req, res, next) => {
    NewsModel.find({})
        .then(noveltys => {
            let status = 200;
            res.status(status).send(noveltys);
        })
        .catch(next);
};

exports.news_list_country = (req, res, next) => {

    NewsModel.find()
        .where('state')
        .in(['active'])
        .where('country')
        .in([req.params.country])
        .sort('-create_date')
        .then(novelty => {
            let status = 200;
            res.status(status).send(novelty);
        });

};

exports.news_list_country_channel = (req, res, next) => {

    NewsModel.find()
        .where('state')
        .in(['active'])
        .where('channel')
        .in(req.params.channel)
        .where('country')
        .in([req.params.country])
        .sort('-create_date')
        .then(novelty => {
            let status = 200;
            res.status(status).send(novelty);
        });
};

exports.news_select = (req, res, next) => {
    NewsModel.find({ _id: req.params.id })
        .then(novelty => {
            let status = 200;
            res.status(status).send(novelty);
        })
        .catch(next);
};

exports.news_create = (req, res, next) => {
    NewsModel.create(req.body)
        .then(novelty => {
            let status = 200;
            res.status(status).send(novelty);
        })
        .catch(next);
};

exports.news_update = (err, req, res, next) => {
    NewsModel.findByIdAndUpdate({ _id: req.params.id }, req.body) 
        .then(novelty => {
            let status = 200;
            res.status(status).send(novelty); 
        })
        .catch(next);
};

exports.news_delete = (err, req, res, next) => {
    NewsModel.findByIdAndRemove({ _id: req.params.id }) 
        .then(novelty => {
            let status = 200;
            res.status(status).send(novelty);
        })
        .catch(next);
};
























