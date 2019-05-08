var username = prompt('What is your username?');
var hp = prompt('What is your hp?');

localStorage.setItem("myHero", username);
localStorage.setItem("myHeroHp", hp);