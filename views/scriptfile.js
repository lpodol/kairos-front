var body = document.querySelector("body");
var first = document.getElementById("name");
var container = document.getElementById("container");
var h3 = document.querySelector("h3");

first.addEventListener("keydown", function(e){
  if (e.keyCode === 13){
    var user_name = first.value;
    h3.innerHTML = "Hello, " + user_name + ". <br> Please enter your email.";
    container.removeChild(first);
    var email = document.createElement("email");
    container.appendChild(email);
    email.innerHTML = "<input type='text' id = 'email' name='email' autocomplete = 'off'>";
    email.id = "second"
    var second = document.getElementById("second");
    second.addEventListener("keydown", function(e){
      if (e.keyCode === 13){
        var user_email = email.value;
        container.removeChild(email);
        h3.innerHTML = "Some music lovers say vinyl is coming back. Do you agree?"
        var yes = document.getElementById("button_one");
        var no = document.getElementById("button_two");
        yes.style.visibility = "visible";
        no.style.visibility = "visible";
        yes.innerText = "Yes";
        no.innerText = "No";
        var video = document.getElementById("bgvid");
        video.src = "images/dj-vinyl.mp4";
        video.type = "video/mp4";
        video.defaultMuted = "true";

        var first_click = function(){
          var points = document.getElementById("points");
          points.innerText = "+5"
          setTimeout(function(){
            img.src="images/watch.png";
            setTimeout(function(){
              body.removeChild(video)}, 50);
            h3.innerHTML = "Is the Apple Watch a fashion statement or a tech device?";
            yes.innerHTML = "Fashion";
            no.innerHTML = "Tech";
          }, 3000);
        }

        var second_click = function(){
          points.innerText = "+10";
          setTimeout(function(){
            img.src = "images/polit.png";
            h3.innerText = "TheRepublican Primary is underway. Will you be voting in a Republican Primary?";
            yes.innerHTML = "Yes";
            no.innerHTML = "No";
          }, 3000);
        }

        yes.addEventListener("click", function(){
          first_click();
          yes.addEventListener("click", function(){
            second_click();
          })
          no.addEventListener("click", function(){
            second_click();
          })
        });

        no.addEventListener("click", function(){
          first_click();
          no.addEventListener("click", function(){
            second_click();
          })
          yes.addEventListener("click", function(){
            second_click();
          })
        });

      }
    })
  }
})

$(document).ready(function(){
   $(".button").click(function() {
       $("#points").fadeIn(1500, function(){
         setTimeout(function(){
           $("#points").fadeOut(1000);
         }, 2000);
       });
     });
  });
