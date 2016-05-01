$(document).ready(function(){
    $('.field.jqueryuislider').each(function(){
        sel = $(this).find('select');
        steps = $.parseJSON(sel.attr('data-slider-values'));
        keymap = [];
        for(key in steps){
            keymap[keymap.length] = key;
        }
        sel.attr('data-jqueryslider-keymap',JSON.stringify(keymap));
        el = $('<div></div>');
        $(this).find('.middleColumn').append(el);
        el.slider({
            'min' : 0,
            'max' : Object.keys(steps).length-1,
            'step' : 1,
            'slide' : function(event, ui){
                sel = $(this).parent().find('select');
                steps = $.parseJSON(sel.attr('data-jqueryslider-keymap'));
                sel.val(steps[ui.value]);
            }
        });
    });
});