jQuery(document).ready(function($) {
    $("html,body").click(function(e) {
        var chars = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'];
        var $i = $("<b/>").text(chars[Math.ceil(Math.random() * 12)]);
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 99999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "color": "rgb(" + parseInt(Math.random() * 255, 10) + "," + parseInt(Math.random() * 255, 10) + "," + parseInt(Math.random() * 255, 10) + ")"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
        e.stopPropagation();
    });
});