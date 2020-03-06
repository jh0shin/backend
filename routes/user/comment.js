// api for getting specific user's comment list from DB server

var express = require('express');
var router = express.Router();

var mysqlDB = require('../../db_connector');

router.post('/', function (req, res, next) {
    var user = req.body.user;

    // return search result
    mysqlDB.query(
        'select * from academy_comment where binary user = ?',
        [user], function (err, result){
            res.send(result);
    });
});

module.exports = router;