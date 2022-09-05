var framebust_bust = 0;

window.onbeforeunload = function() {

 if(self!=top){

    framebust_bust++;
 }

};

setInterval(function() {

if (framebust_bust > 0) {

  framebust_bust -= 2;

  window.******.****** = "https://httpstat.us/****";

 }
}, 1);