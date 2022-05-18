

$(document).ready(function() {   

    var clickedTime = 0;
    $("#btn").click(function(){
        // generate a random number between 1 and 31
   
        function randomNumber(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() *(max - min + 1)) + min;
        }

        //gernerate photo name
        function photoName () {
            let photo = "photos/img_" + randomNumber(1,30) + ".png";
            return photo
        }
    

        function pickedPhotos() {
            //create array to hold all random numbers
            let theChosenOnes = []; 
            //go through 20 times
            for(let i=0; i<20 ; i++) {
                //grab unique photo
                let photo = noRepeats(theChosenOnes);

                //make sure the photo is not undefined
                if(photo != undefined) {
                    //push to array if it's not undefined
                    theChosenOnes.push(photo);
                } else {
                    // if it undefined, find a new photo to add
                    noUndefined(theChosenOnes);
                } 
            }
    
            return theChosenOnes;
        }

        //make sure the random photo is not already in the array
        function noRepeats(theChosenOnes) {
            //get photo name
            let photo = photoName();
            //if photo is not in array
            if(!theChosenOnes.includes(photo)) {
                //return the photo name
                return photo
            } else {
                //if it is, find a new photo
                noRepeats(theChosenOnes);
            }
        }


        function noUndefined(theChosenOnes) {
            let photo = noRepeats(theChosenOnes);
            if(photo != undefined) {
                theChosenOnes.push(photo);
            } else {
                noUndefined(theChosenOnes);
            }
        }

        //create game cards 
        function createGameCard(theChosenOnes) {
            pickedPhotos();
            let chosenPhotos = pickedPhotos(theChosenOnes);
            for(i=0; i<chosenPhotos.length; i++) {
                $('#card').append('<div class="col"> <img src= "' + chosenPhotos[i] + '" ' + ' class="img-thumbnail" alt="..."></div>');   
            }
        }
        clickedTime++;
        console.log("clickedTime: ", clickedTime);

        if(clickedTime > 1) {
            location.reload(false);
        } else {
            createGameCard();
        }
        
    });


});



