exports.getallemployees = function (req, res, next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let tmp = {
        val: "heille",
        valid: true,
        name: "normand"
    };
    res.json(tmp);
}