// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts); 



// function writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"){
//     for (let i = 0; i < writeCards.length; 1++){
//         const cards = [
//             "Thank you, Guadalupe, for the wonderful birthday gift!",
//             "Thank you, Ollie, for the wonderful birthday gift!",
//             "Thank you, Aki, for the wonderful birthday gift!",
//         ];
//     }
//     return cards;
// }



const names = ["Guadalupe", "Ollie", "Aki"];


const writeCards = (names, event) => {
    let giftMsgs = [];
    for (let i = 0; i < names.length; i++){
        let giftMsg = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        giftMsgs.push(giftMsg)
    }

    return giftMsgs;
}
writeCards(names, "surprise");


const countDown = (n) => {
    let i = n;
    while(i >= 0){
        console.log(i);
        i--
    }

}

countDown(10)