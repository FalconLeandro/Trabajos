$(function() {
    /**** INICIO ZONA EDITABLE ****/
    var sound_mp3 = "http://soundbible.com/mp3/A-Tone-His_Self-1266414414.mp3";
    var sound_ogg = "http://vignette2.wikia.nocookie.net/monchbox/images/0/01/Beep-sound.ogg/revision/latest?cb=20110628200153";
    /**** FIN ZONA EDITABLE ****/

    $('body').prepend('<audio><source src="' + sound_mp3 + '"></source><source src="' + sound_ogg + '"></source></audio>');
    var audio = $("audio")[0];
    $("a").mouseenter(function() {
        audio.play();
    });
});