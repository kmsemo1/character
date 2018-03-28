function Character(name, profession, gender, age, strength, lifeMeter) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.lifeMeter = lifeMeter;

    // methods
    this.printStats = function () {
        console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nGender: " + this.gender + "\nAge: " + this.age + "\nStrength: " + this.strength + "\nAttack: " + this.lifeMeter)
    };

    this.alive = function () {
        if (this.lifeMeter > 0) {
            console.log(this.name + " is still alive");
            return true;
        } else {
            console.log(this.name + " is dead!");
            return false;
        }
    }

    this.attack = function (character2) {
        character2.lifeMeter -= this.strength;
    }

    this.levelUp = function() {
        this.age += 1;
        this.strength += 5;
        this.lifeMeter += 25;
    }

}


var wizard = new Character("Gandalf", "Wizard", "Male", 300, 65, 200);
var dime = new Character("Tommy", "Dime", "Female", 28, 125, 200);

wizard.printStats();
console.log();
dime.printStats();

console.log();
dime.attack(wizard);
wizard.printStats();
wizard.alive();

