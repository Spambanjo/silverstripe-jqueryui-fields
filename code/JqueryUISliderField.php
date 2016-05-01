<?php

/*
 * Test change
 */

class JqueryUISliderField extends DropdownField {
    
    function _construct($name,$title=null,$source=array(),$value='',$form=null,$emptyString=null){
        parent::__construct($name, $title, $value, $form, $rightTitle);
    }
    
    public function getAttributes(){
        Requirements::block(THIRDPARTY_DIR.'/jquery/jquery.js');
        Requirements::block(THIRDPARTY_DIR.'/jquery-ui/jquery-ui.min.js');
        // load the more recent version of jquery
        
        // add our own requirements
        Requirements::css(THIRDPARTY_DIR.'/jquery-ui-themes/smoothness/jquery-ui.min.css');
        Requirements::javascript(JQUERYUI_FIELDS_DIR.'/javascript/JqueryUISliderField.init.js');
        Requirements::css(JQUERYUI_FIELDS_DIR.'/css/JqueryUISliderField.css');
        // init
        $attributes = array(
            'data-slider-values' => json_encode($this->source)
        );
        var_dump($attributes['data-slider-values']);
        return array_merge(
            parent::getAttributes(),
            $attributes
        );
    }
    
}