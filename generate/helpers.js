const faker = require('faker');

let dates = [];
for(let day = 0; day < 90; day++) {
  dates.push(faker.date.past(1).toISOString());
}

let urls = [];
for(let url = 0; url < 1000; url++) {
  urls.push(faker.image.imageUrl());
}

let createColumns = {
  
  song: function() {
    let title = `"${faker.random.words()}"`;
    let artist = getRandomInt(1, 999999);
    let hashtag = `"${faker.random.word()}"`;
    let timeElapsed = dates[getRandomInt(0, 89)];
    let startTime = 0;
    let songLength = getRandomInt(120, 500); // 120 <--> 620
    let decibel = getRandomInt(62, 18); // 62 <--> 80
    let songUrl = urls[0];
    let songImage = urls[getRandomInt(0, 1000)];

    return `${title},${artist},${hashtag},${timeElapsed},${startTime},${songLength},${decibel},${songUrl},${songImage}\n`
  },

  user: function() {
    let username = `"${faker.internet.userName()}"`;
    let user_image = urls[getRandomInt(0, 1000)];

    return `${username},${user_image}\n`;
  },

  comment: function() {
    let message = `"${faker.lorem.sentence()}"`;
    let user_id = getRandomInt(1, 999999);
    let song_id = getRandomInt(1, 9999999);
    
    return `${message},${user_id},${song_id}\n`;
  }

}

function calculateTime(start) {
  let millis = Date.now() - start;
  let seconds = Math.floor(millis/1000);
  console.log(`Finished in ${seconds} seconds.`);
}

function chunkNLines(n, tableName) {
  data = '';
  for(let i = 0; i < n; i++) {
    let row = createColumns[tableName]();
    data += row;
  }
  return [data, n];
}

function getRandomInt(min, range) {
  return min + Math.floor(Math.random() * range);
};

module.exports = {
  calculateTime,
  chunkNLines,
  getRandomInt
}