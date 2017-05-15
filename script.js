// var fs = require('fs');
var prompt = require('prompt');
var ncp = require("copy-paste");

var replaceText = function(input) {
    var template = input.template
    console.log(template);
    console.log('Contact Name: ' + input.client_name);
    console.log('Company Name: ' + input.company_name);
    console.log('Your Name: ' + input.who);
    console.log('====================================');
    template = template.replace(/[\[\]']+/g, input.client_name);
    template = template.replace(/{}/g, input.company_name);
    template = template.replace(/[\(\)']+/g, input.your_name);


    // ncp.copy(template, function () {
    //   console.log(template);
    //   console.log('====================================');
    //   console.log('Copied to clipboard!');
    // })

    function onErr(err) {
      console.log(err);
      return 1;
    }
    console.log(template);

    return template;
}

exports.replaceText = replaceText;