(function($){
    $.fn.dragdrag = function(options){
        
        var settings = $.extend({ handle: 0, exclude: 0 }, options);

        return this.each(function(){
            var dx, dy, el = $(this), handle = settings.handle ? $(settings.handle, el) : el;
            handle.on({
                mousedown: function(e){
                    if (settings.exclude && ~$.inArray(e.target, $(settings.exclude, el))) return;
                    e.preventDefault();
                    var os = el.offset(); dx = e.pageX-os.left, dy = e.pageY-os.top;
                    $(document).on('mousemove.drag', function(e){ el.offset({top: e.pageY-dy, left: e.pageX-dx}); });
                },
                mouseup: function(e){ $(document).off('mousemove.drag'); }
            });
        });
    }
}(jQuery));