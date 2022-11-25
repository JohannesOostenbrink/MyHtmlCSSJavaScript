// Task 1
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for (var dairy of dairy) {
        console.log(dairy)
    }

}
logDairy()

// Task 2

function birdCan() {
    
const animal = {

    canJump: true

};

const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;

for (prop of Object.keys(bird)) {
        console.log(prop + ": " + bird[prop]);
}
}
birdCan()

// Task 3

function animalCan() {

    const animal = {

    canJump: true

};

const bird = Object.create(animal);

    bird.canFly = true;

    bird.hasFeathers = true;

for (const property in bird) {
    console.log(property + ": " + bird[property])
}
    
}

animalCan()
