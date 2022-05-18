
function numberRange(start, end) {
    //fill an array with sequential numbers
    return new Array(end - start).fill().map((e, i) => i + start);
}
    
function pickedPhotos() {
    //create an array of images I can use
    let images = numberRange(1, 31).map((e) => "photos/img_" + e + ".png");
    
    //shuffle images
    let shuffledImages = shuffle(images);

    //pick first 20 
    return shuffledImages.slice(0, 20);
}

//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

$(document).ready(function() {
     //create game cards 
     function createGameCard() {
        let chosenPhotos = pickedPhotos();
        for(i=0; i<chosenPhotos.length; i++) {
            $('#card').append('<div class="col"> <img src= "' + chosenPhotos[i] + '" ' + ' class="img-thumbnail" alt="..."></div>');   
        }
    }

    $("#btn").click(function(){
       location.reload();
    });

    createGameCard();
});



