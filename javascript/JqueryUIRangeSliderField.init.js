/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    var jqueryuirangeslider_fldtype = 'select';
    $('.field.jqueryuirangeslider').each(function(){
        fld = $(this).find(jqueryuirangeslider_fldtype);
        fld_holder = $(this).find('.jqueryuirangeslider-fields');
        steps = $.parseJSON(fld_holder.attr('data-slider-values'));
        keymap = [];
        labelmap = [];
        fldval = 0;
        for(key in steps){
            keymap[keymap.length] = key;
            if(key==fld_holder.attr('data-slider-value')){
                fldval = keymap.length-1;
            }
            labelmap[labelmap.length] = steps[key];
        }
        fld_holder.attr('data-jqueryslider-keymap',JSON.stringify(keymap));
        el = $('<div></div>');
        $(this).find('.middleColumn').append(el);
        $(this).slider({
            'values' : [0,Object.keys(keymap).length-1],
            'max' : Object.keys(keymap).length-1,
            'range' : true
        })
        .slider("pips", {
            rest: false,
            'labels' : labelmap
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
            'padding-bottom' : tallest+6
        });
    });
});