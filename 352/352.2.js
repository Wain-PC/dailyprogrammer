const solve = (cards, canYouMake) => {
    //Count the number of required resources of each type.
    const requiredResources = canYouMake.split('').reduce((obj, item) => {
        obj[item] ? obj[item]++ : obj[item] = 1;
        return obj;
    }, {});

    //Map each card to one or more resource type.
    const mapping = cards.reduce((obj, card) => {
        //Create an object with `used` flag for each card. Using object is important
        // as we're going to use its ability to be modified by link in multiple places.
        const cardObj = {
            card,
            used: false
        };
        getCardRes(card).forEach(res => {
            obj[res] ? obj[res].push(cardObj) : obj[res] = [cardObj];
        });
        return obj;
    }, {});

    //Sort cards inside each resourceToCardsMapping's key by their usefulness (number of resources to get from a single card).
    //This should significantly speed up the process, as we'll use least useful cards first.
    Object.keys(mapping).forEach(key => {
        mapping[key] = mapping[key].sort((cardA, cardB) => {
            return getCardRes(cardA.card).length - getCardRes(cardB.card).length;
        })
    });

    //Now recreate the query with the resToCard mapping in mind (sort by minimum amount of cards available).
    const query = Object.keys(mapping)
        .sort((resKeyA, resKeyB) => mapping[resKeyA].length - mapping[resKeyB].length)
        .map(resKey => resKey.repeat(requiredResources[resKey]))
        .join('');

    console.log(query);
    //Now we're ready to recursively traverse the query.
    return traverse(query, mapping);
};

const getCardRes = card => card.split('/');

const traverse = (query, mapping) => {
    //If there's no more query left, we won!
    if(!query.length) {
        return true;
    }
    //Get current key.
    const key = query[0];
    const availableCards = mapping[key];
    //Scroll through available cards for this resource.
    for(let i=0; i< availableCards.length; i++) {
        if(!availableCards[i].used) {
            //Mark the card as used. Due to JS's object usage by link, it'll be marked as used in every other mapping.
            availableCards[i].used = true;
            //If we've managed to recursively apply every other card, we won!
            if(traverse(query.slice(1), mapping)) {
                return true;
            }
            //Cannot proceed further with this card, try the next one from the list, if any.
            availableCards[i].used = false;
        }
    }
    //Scrolled through every card but didn't return true. It's a fail.
    return false;
};

module.exports = solve;