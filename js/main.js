const modal = document.getElementsByClassName("modal")[0];
const open = document.getElementsByClassName("open")[0];
const close = document.getElementsByClassName("close")[0];
const okay = document.getElementsByClassName("okay")[0];
const bg = document.getElementsByClassName("bg")[0];
open.addEventListener(
    "click",
    () => {
        modal.classList.add("show");
        bg.classList.add("show");
    }
);
close.addEventListener(
    "click",
    () => {
        modal.classList.remove("show");
        bg.classList.remove("show");
    }
);
okay.addEventListener(
    "click",
    () => {
        modal.classList.remove("show");
        bg.classList.remove("show");
    }
)

$(function () {
    $('#accordion').accordion({
        icons: {
            "header": "ui-icon-triangle-1-e",
            "activeHeader": "ui-icon-triangle-1-s"
        },
        animate: 2000,
        active: 2,
        header: "span",
        heightStyle: "content"
    });
    $('#myinput').autocomplete({
        source: ["c++", "java", "php", "coldfusion", "javascript", "asp", "ruby", "yaypan", "web", "Front-end"]
    });
    $("input[type='radio']").checkboxradio();
    $('.mydate').datepicker({
        buttonText: "Choose",
        changeMonth: true,
        changeYear: true,
        defaultDate: +5,
        dateFormat: "yy-mm-dd"
    });
    $('.ref').click(() => {
        $('.mydate').datepicker("setDate", "2022/07/15");
        console.log("ref")
    });
    $("#dialog").dialog({ autoOpen: false });
    $("#opener").click(function () {
        $("#dialog").dialog("open");
    });
    $('#tabs').tabs({
        active: 0
    });
});


$('.your-class').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
