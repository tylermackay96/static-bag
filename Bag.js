class Bag {
    static MAX_WEIGHT = 23;

    constructor(weight) {
        if (!weight) {
            throw new Error('Bag weight is required');
        }
        if (weight > Bag.MAX_WEIGHT) {
            throw new Error(`Bag weight of ${weight}kg exceeds the maximum of ${Bag.MAX_WEIGHT}kg.`);
        }
        this.weight = weight;
    }
}

module.exports = Bag;

