jQuery(document).ready(function($){
    if(  $('.quote-loop').length){
        (function loop(){
            $('.quote-loop').each(function(){
                var $self = $(this);
                $self.parent().queue(function(n){
                    $self.fadeIn(1000).delay(10009).fadeOut(1000, n);

                });
            }).parent().promise().done(loop);
        }());
    }
});


