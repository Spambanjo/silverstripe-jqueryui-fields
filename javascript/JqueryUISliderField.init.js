$(document).ready(function(){
    var fldtype = 'select';
    $('.field.jqueryuislider').each(function(){
        fld = $(this).find(fldtype);
        fld.hide();
        steps = $.parseJSON(fld.attr('data-slider-values'));
        keymap = [];
        labelmap = [];
        fldval = 0;
        for(key in steps){
            keymap[keymap.length] = key;
            if(key==fld.attr('data-slider-value')){
                fldval = keymap.length-1;
            }
            labelmap[labelmap.length] = steps[key];
        }
        fld.attr('data-jqueryslider-keymap',JSON.stringify(keymap));
        el = $('<div></div>');
        $(this).find('.middleColumn').append(el);
        el.slider({
            'min' : 0,
            'max' : Object.keys(keymap).length-1,
            'step' : 1,
            'value' : fldval
        })
        .slider('pips',{
            'rest' : 'label',
            'labels' : labelmap
        })
        .on("slidechange", function(e,ui) {
            fld = $(this).parent().find(fldtype);
            steps = $.parseJSON(fld.attr('data-jqueryslider-keymap'));
            fld.val(keymap[ui.value]);
        });
    });
});
