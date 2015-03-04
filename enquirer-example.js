'use strict';

var Enquirer;
Enquirer = new Component('./enquirer-example.js');

Enquirer.extend('./enquirer.js');

Enquirer.install(function (done) {
  this.discover = function () {
    var isTheAnimal = true;
    var questions = this.knowledgeBase.retrieve("tiranossauro");
    var question;
    for (question in questions) {
        if (this.responder.ask(question) !== questions[question]) isTheAnimal = false;
    }
    if (isTheAnimal)
    	return "tiranossauro";
    else
        return false;
  }.bind(this);
  done();
});
