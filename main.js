$(document).ready(function () {
    $(function () {
        var flame = $("#flame");
        var txt = $("h1");
     
        flame.on({
            click: function () {
                flame.removeClass("burn").addClass("puff");
                $(".smoke").each(function () {
                    $(this).addClass("puff-bubble");
                });
                $("#glow").remove();
                txt.hide().html("I'm so glad I know you and you inspire me everyday,I hope your year is filled with laughs.Happy Birthday ^3^!!").delay(750).fadeIn(300);
                $("#candle").animate(
                    {
                        opacity: ".5"
                    },
                    100
                );
            }
        });
    });
});
