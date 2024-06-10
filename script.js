var i = 0;
var textlap = '. Hello, I am Shivam Golliwar...';
var speedlap = 130;

function typeWriterlap() {
  if (i < textlap.length) {
    document.getElementById("demolap").innerHTML += textlap.charAt(i);
    i++;
    setTimeout(typeWriterlap, speedlap);
  }
}



var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



// Hi there! I am a final year IT student with expertise in programming and web development. I am passionate about creating innovative solutions and love tackling coding challenges. I am eager to bring my skills to a dynamic team and contribute to exciting projects.

