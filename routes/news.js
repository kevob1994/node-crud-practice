const express = require('express');
const router = express.Router();

var news_controller = require('../controllers/newsController');

router.get('/news', news_controller.news_list);

router.get(
    '/news/search/:country/:channel',
    news_controller.news_list_country_channel,
);

router.get('/news/country/:country', news_controller.news_list_country);

router.get('/news/:id', news_controller.news_select);

router.post('/news', news_controller.news_create);

router.put('/news/:id', news_controller.news_update);

router.delete('/news/:id', news_controller.news_delete);

module.exports = router;
