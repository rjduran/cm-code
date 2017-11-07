'use strict';
const Alexa = require("alexa-sdk");

exports.handler = function(event, context, callback) {
    const alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('SayHello');
    },
    'HelloWorldIntent': function () {
        this.emit('SayHello')
    },
    'SayHello': function () {
        this.response.speak('Hello, Welcome to Critical Making!');
        this.emit(':responseReady');
    },
    'RJDuranIntent': function() {
        this.response.speak('RJ!');
        this.emit(':responseReady');
    },
    'JimMurphyIntent': function() {
        this.response.speak('Jim!');
        this.emit(':responseReady');
    },
    'MattIsolaIntent': function() {
        this.response.speak('Matt!');
        this.emit(':responseReady');
    },
    'MeredithFongIntent': function() {
        this.response.speak('Meredith!');
        this.emit(':responseReady');
    },
    'AaronMeyerhoffIntent': function() {
        this.response.speak('Aaron!');
        this.emit(':responseReady');
    },
    'JoshAdlerIntent': function() {
        this.response.speak('Josh!');
        this.emit(':responseReady');
    },
    'NikkiCavalierIntent': function() {
        this.response.speak('Nikki!');
        this.emit(':responseReady');
    },
    'ErinPfeiferIntent': function() {
        this.response.speak('Erin!');
        this.emit(':responseReady');
    },
    'NickBalderstonIntent': function() {
        this.response.speak('Nick!');
        this.emit(':responseReady');
    },
    'RebekahSosaIntent': function() {
        this.response.speak('Rebekah!');
        this.emit(':responseReady');
    },
    'SarahSafranskiIntent': function() {
        this.response.speak('Sarah!');
        this.emit(':responseReady');
    },
    'MichelleBlakeIntent': function() {
        this.response.speak('Michelle!');
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('Goodbye!');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('See you later!');
        this.emit(':responseReady');
    }
};