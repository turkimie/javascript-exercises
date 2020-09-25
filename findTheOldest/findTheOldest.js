let findTheOldest = function(people) {
    return people.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        return oldestAge < currentAge ? currentPerson : oldest;
    });

    function getAge(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    }
}
module.exports = findTheOldest
