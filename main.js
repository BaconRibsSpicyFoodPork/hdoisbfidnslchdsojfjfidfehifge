var SpeechRecognition=window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML="";
recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    Content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=Content;
    if(Content == "selfie"){
    speak();
    }
}

function speak() {
    synth=window.speechSynthesis;
    speak_data="taking selfies in 3 seconds";
    utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot1();
        save1()
    },3000);
    setTimeout(function(){
        take_snapshot2();
        save2()
    },6000);
    setTimeout(function(){
        take_snapshot3();
        save3()
    },9000);
}

function take_snapshot1(){
    Webcam.snap(function (data_uri) {
    document.getElementById("result1").innerHTML='<img id="selfie_image1" src="' + data_uri + '">';
    })
}

function take_snapshot2(){
    Webcam.snap(function (data_uri) {
    document.getElementById("result2").innerHTML='<img id="selfie_image2" src="' + data_uri + '">';
    })
}
function take_snapshot3(){
    Webcam.snap(function (data_uri) {
    document.getElementById("result3").innerHTML='<img id="selfie_image3" src="' + data_uri + '">';
    })
}

function save1(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image1").src;
    link.href=image;
    link.click();
}
function save2(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image2").src;
    link.href=image;
    link.click();
}
function save3(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image3").src;
    link.href=image;
    link.click();
}

Webcam.set({
width:360,
height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");