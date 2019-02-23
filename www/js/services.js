angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Mercedes AMG GTR',
    lastText: '4.0L AMG v8 biturbo, 577 Horsepower, 0-60mph in 3.5 seconds',
    face: 'img/gtr.jpg'
  }, {
    id: 1,
    name: 'Porsche GT2',
    lastText: '700 Horsepower, 0-60mph in 2.7 seconds, Rear wheel drive',
    face: 'img/porsche.jpg'
  }, {
    id: 2,
    name: 'Bugatti Chiron',
    lastText: '1500 Horsepower, Top speed: 261 mph, 8.0L 16 cylinder engine',
    face: 'img/bugatti.jpg'
  }, {
    id: 3,
    name: 'Laferrari',
    lastText: '0-60mph in 2.4 seconds, 949 Horsepower, Max speed: 217mph',
    face: 'img/ferrari.jpg'
  }, {
    id: 4,
    name: 'BMW M2',
    lastText: '0-60mph in 4.1 seconds, 365 Horsepower, 3.0L 6 cylinder engine',
    face: 'img/bmw.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
