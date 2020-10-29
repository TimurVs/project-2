/* var video = document.querySelector("#pres_vid"),
    button = document.querySelector(".video_play_btn");

button.addEventListener("click", function () {
    video.play()
    video.setAttribute("controls", "controls");
}, false);

$(".video_play_btn").click(function () {
    $(".video_play_btn").addClass('video_play_btn--hide');
})
*/

$(".video_play_btn").click(function () {
    $(".video_play_btn").addClass('video_play_btn--hide');
    $("#pres_vid").attr("controls", "controls");
    $("#pres_vid")[0].play();
})
