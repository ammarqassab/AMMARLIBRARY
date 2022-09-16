function hideshow(idd) {
  var x = document.getElementById(idd);
  if (x.className.indexOf("show") == -1) {
    x.className += " show";
    x.previousElementSibling.className = x.previousElementSibling.className.replace("bgc-1", "bgc-3");
  }
  else {
    x.className = x.className.replace(" show", "");
    x.previousElementSibling.className = x.previousElementSibling.className.replace("bgc-3", "bgc-1");
  }
}
/////////////////////////////////////
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}

function open() {
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("sidebar").style.width = "100%";
}

function close() {
  document.getElementById("sidebar").style.display = "none";
}

/////////////////////////////////////////////////////////////////////////////////////////////
var slideIndex = 1;
function plusDivs(n, myslides, city, colordiv) {
  showDivs(slideIndex += n, myslides, city, colordiv);
}

function currentDiv(n, myslides, city, colordiv) {
  showDivs(slideIndex = n, myslides, city, colordiv);
}

function showDivs(n, myslides, city, colordiv) {
  var i;
  var x = document.getElementsByClassName(city);
  var dots = document.getElementsByClassName(myslides);
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(colordiv, "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += colordiv;
}

////////////////////////////////////////////////////////////////////////////////////

// var myIndex = 0;
// carousel();
// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
//////////////////////////////////////////////////////////////////////

function move(width, name, value) {
  var elem = document.getElementById(name);
  var id = setInterval(frame, 30);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
      document.getElementById(value).innerHTML = width * 1 + '%';
    }
  }
}
/////////////////////////////////////////////////////////////////////
function modalimg(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
/////////////////////////////////////////////////////////////////////
function filtertable(nameinput, nametable) {
  var input, filter, table, tr, td, i;
  input = document.getElementById(nameinput);
  filter = input.value.toUpperCase();
  table = document.getElementById(nametable);
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0]; //يمكن تغيير عامود البحث من خلال تغيير الرقم 0
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
/////////////////////////////////////////////////////////////////////
function filterul(nameinput, nameul) {
  var input, filter, ul, li, a, i;
  input = document.getElementById(nameinput);
  filter = input.value.toUpperCase();
  ul = document.getElementById(nameul);
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    txtValue = li[i].textContent || li[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
/////////////////////////////////////////////////////////////////////
function filterdropdown(nameinput, namedrop) {
  var input, filter, ul, li, a, i;
  input = document.getElementById(nameinput);
  filter = input.value.toUpperCase();
  div = document.getElementById(namedrop);
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

