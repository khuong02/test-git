new WOW().init();
const listItem = document.querySelectorAll(".item");

const arrColor = [
  "red",
  "blue",
  "green",
  "yellow",
  "gray",
  "pink",
  "cyan",
  "white",
];
const str =
  "bounce,bounceIn,bounceInDown,bounceInLeft,bounceInRight,bounceInUp,bounceOut,bounceOutDown,bounceOutLeft,bounceOutRight,bounceOutUp,fadeIn,fadeInDown,fadeInDownBig,fadeInLeft,fadeInLeftBig,fadeInRight,fadeInRightBig,fadeInUp,fadeInUpBig,fadeOut,fadeOutDown,fadeOutDownBig,fadeOutLeft,fadeOutLeftBig,fadeOutRight,fadeOutRightBig,fadeOutUp,fadeOutUpBig,flash,flip,flipInX,flipInY,flipOutX,flipOutY,headShake,hinge,jello,lightSpeedIn,lightSpeedOut,pulse,rollIn,rollOut,rotateIn,rotateInDownLeft,rotateInDownRight,rotateInUpLeft,rotateInUpRight,rotateOut,rotateOutDownLeft,rotateOutDownRight,rotateOutUpLeft,rotateOutUpRight,rubberBand,shake,slideInDown,slideInLeft,slideInRight,slideInUp,slideOutDown,slideOutLeft,slideOutRight,slideOutUp,swing,tada,wobble,zoomIn,zoomInDown,zoomInLeft,zoomInRight,zoomInUp,zoomOut,zoomOutDown,zoomOutLeft,zoomOutRight,zoomOutUp";

const arrAnimate = str.split(",");
Array.from(listItem).map((i) => {
  i.classList.add(
    "wow",
    "" + arrAnimate[Math.floor(Math.random() * arrAnimate.length)] + ""
  );
  i.style.background =
    "linear-gradient(" +
    arrColor[Math.floor(Math.random() * arrColor.length)] +
    "," +
    arrColor[Math.floor(Math.random() * arrColor.length)] +
    " )";
});
