var username = prompt('What is your username?');
var hp = prompt('What is your hp?');

var hero = localStorage.setItem("myHero", username);
var hero = localStorage.setItem("myHeroHp", hp);