$(document).ready(function(){
    var jqueryuislider_fldtype = 'select';
    $('.field.jqueryuislider').each(function(){
        fld = $(this).find(jqueryuislider_fldtype);
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
            'max' : Object.keys(keymap).length-1,
            'value' : fldval
        })
        .slider('pips',{
            'rest' : 'label',
            'labels' : labelmap
        })
        .on("slidechange", function(e,ui) {
            fld = $(this).parent().find(jqueryuislider_fldtype);
            steps = $.parseJSON(fld.attr('data-jqueryslider-keymap'));
            fld.val(keymap[ui.value]);
        });
        // fix middle labels
        $(this).find('.ui-slider-pip:not(.ui-slider-pip-first):not(.ui-slider-pip-last) .ui-slider-label').each(function(){
            $(this).css({
                'margin-left' : 0-($(this).width()/2)
            });
        });
        // add bottom-padding to middlecol
        var tallest = 0;
        $(this).find('.ui-slider-pip .ui-slider-label').each(function(){
            if($(this).height()>tallest){
                tallest = parseFloat($(this).height());
            }
        });
        //alert(tallest);
        $(this).find('.middleColumn').css({
            'padding-bottom' : tallest-6
        });
    });
});
