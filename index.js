function writeCards(names, surprise) {
    let messages = []; 
    for (let i = 0; i < names.length; i++) {
       messages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }

return messages; 
}

function countDown(down) {
    let counter = 10
    while (counter > -1 ) {
        console.log(counter--)
    }
}