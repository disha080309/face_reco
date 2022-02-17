Webcam.set({ 
    width:350,
     height:300,
      image_format : 'png', 
      png_quality:90 
  });

  camera = document.getElementById("camera");

  Webcam.attach( '#camera' );
  function take_snapshot(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
      })
  }
  classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9HD3W8G6g/model.json',modelLoded);
  function modelLoded(){
      console.log("model is loaded");
    }
 function check(){
     img=document.getElementById("capture_image");
     classifier.classify(img,gotresult);
 }
 function gotresult(error,results){
     if (error){
         console.log(error);
     }
     else {
         console.log(results);
            document.getElementById("result_object_name").innerHTML=results[0].label;
            document.getElementById("result_accuracy").innerHTML=(results[0].confidence.toFixed(3))*100+"%";
     }
 }

  