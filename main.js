function startrecog(){
    navigator.mediaDevices.getUserMedia({ audio: true}); 
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bC2jyC8mf/model.json", modelReady);
}

function modelReady(){ 
    classifier.classify(gotResults);
 }

 function gotResults(error, results){
    if(error){
        console.log(error);
    }else{
        console.log(results);
    }
}