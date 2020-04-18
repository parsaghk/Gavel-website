var $r = $('input[type="range"]');
var $ruler = $('<div class="rangeslider__ruler" />');

// Initialize
$r.rangeslider({
    polyfill: false,
    onInit: function () {
        $ruler[0].innerHTML = getRulerRange(this.min, this.max, this.step);
        this.$range.prepend($ruler);
    }
});

function getRulerRange(min, max, step) {
    var range = '';
    var i = 0;

    while (i <= max) {
        range += i + ' ';
        i = i + step;
    }
    return range;
}








