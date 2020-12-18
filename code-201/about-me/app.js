'use strict';

var hungry = prompt('Are you hungry?').toLowerCase();
console.log('hungry?', hungry);

if ((hungry === 'y') || (hungry === 'yes')){
    alert('I always am!')
} else {
    alert('You must have enough money to survive!')
}

var dogs = prompt('Do you like dogs?').toLowerCase();
console.log('dogs', dogs);

if ((dogs === 'y') || (dogs === 'yes')){
    alert('I love dogs!')
} else {
    alert('You must be a horrible person and will grow up to be an old crazy cat person')
}

var queer = prompt('Are you queer?').toLowerCase();
console.log('queer?', queer);

if ((queer === 'y') || (queer === 'yes')){
    alert('I am too!')
} else {
    alert('We might still be able to be friends if you are an ally.')
}

var hamster = prompt('Did you know hamsters hibernate?').toLowerCase();
console.log('hamsters', hamster);

if ((hamster === 'y') || (hamster === 'yes')){
    alert('Thats great! Thought it would be random information to share if you didnt')
} else {
    alert("uh oh, I hope you didn't bury one alive!")
}

var corgi = prompt('Did you know that corgis are the best dogs?').toLowerCase();
console.log('corgi', corgi);

if ((corgi === 'y') || (corgi === 'yes')){
    alert('You are correct!')
} else {
    alert('well you are wrong then.')
}