// var arreglo = [
//   "dist/img/6.mp4",
//   "dist/img/13.mp4",
//   "dist/img/10.mp4",
//   "dist/img/7.mp4",
//   "dist/img/11.mp4",
//   "dist/img/8.mp4",
// ];
// var i = 0;

// document.getElementById("sk").addEventListener(
//   "click",
//   function (event) {
//     document.getElementById("video").src = arreglo[i];
//     i++;
//     if (i == 6) {
//       i = 0;
//     }
//     document.body.style.overflowY = "hidden";
//     document.getElementById("header").style.visibility = "hidden";
//     window.location.href = "#soft-skills";
//     document.getElementById("iconBack").style.display = "block";
//   },
//   false
// );

// document.getElementById("iconBack").addEventListener(
//   "click",
//   function (event) {
//     document.getElementById("video").src = "/";

//     document.body.style.overflowY = "visible";
//     document.getElementById("header").style.visibility = "visible";
//     document.getElementById("iconBack").style.display = "none";
//   },
//   false
// );

document.getElementById("sk").addEventListener(
  "click",
  function (event) {
    document.body.style.overflowY = "hidden";
    document.getElementById("header").style.visibility = "hidden";
    window.location.href = "#soft-skills";
    document.getElementById("iconBack").style.display = "block";
    document.getElementById("soft-skills").style.background="black" ;
  },
  false
);

var mediaQ = window.matchMedia("(min-width: 625px)");

if (mediaQ.matches) {
  var v1 = "dist/img/11.mp4#t=1.2";
  var v2 = "dist/img/12.mp4#t=1";
  var v3 = "dist/img/10.mp4#t=1";
  var v4 = "dist/img/7.mp4#t=0.5";
  var v5 = "dist/img/6.mp4";
  var v6 = "dist/img/8.mp4";

  document.getElementById("1").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v1;
    },
    false
  );
  document.getElementById("2").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v2;
    },
    false
  );
  document.getElementById("3").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v3;
    },
    false
  );
  document.getElementById("4").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v4;
    },
    false
  );
  document.getElementById("5").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v5;
    },
    false
  );
  document.getElementById("6").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v6;
    },
    false
  );
} else {
  document.getElementById("video").style.width = "100%";

  v1 = "dist/img/1.mp4";
  v2 = "dist/img/2.mp4";
  v3 = "dist/img/3.mp4";
  v4 = "dist/img/4.mp4";
  v5 = "dist/img/5.mp4";
  v6 = "dist/img/0.mp4";

  document.getElementById("1").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v1;
    },
    false
  );
  document.getElementById("2").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v2;
    },
    false
  );
  document.getElementById("3").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v3;
    },
    false
  );
  document.getElementById("4").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v4;
    },
    false
  );
  document.getElementById("5").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v5;
    },
    false
  );
  document.getElementById("6").addEventListener(
    "click",
    function (event) {
      document.getElementById("video").src = v6;
    },
    false
  );
}

document.getElementById("iconBack").addEventListener(
  "click",
  function (event) {
    document.getElementById("video").src = "/";

    document.body.style.overflowY = "visible";
    document.getElementById("header").style.visibility = "visible";
    document.getElementById("iconBack").style.display = "none";
    document.getElementById("soft-skills").style.background="rgba(255, 255, 255, 0.05)" ;
  },
  false
);
