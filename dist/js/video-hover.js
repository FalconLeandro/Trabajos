const videos = document.querySelectorAll(".video-hover");

videos.forEach((video) => {
  video.addEventListener("mouseover", function () {
    this.play();
  });

  video.addEventListener("mouseout", function () {
    this.pause();
  });

  video.addEeventListener("touchend", function () {
    this.pause();
  });
});
