var Ajv = require('ajv');
var ajv = new Ajv({format: "full"});
var fs = require('fs');

var schema = JSON.parse(fs.readFileSync('schema.js', 'utf8'));

var data = {
    "title": "The title!",
    "date": "2018-12-29T10:08:00.904+00:00"
};
var data = {
    "title": "The title!",
    "date": "2018-12-29T10:08:00AAAA"
};

var validate = ajv.compile(schema);
var valid = validate(data);
console.log('start');
if (!valid) {
    console.log(validate.errors);
}
else
{
    console.log("Pass");
}