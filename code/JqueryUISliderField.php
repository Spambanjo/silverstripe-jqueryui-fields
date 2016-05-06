<?php

/*
 * Test change
 */

class JqueryUISliderField extends DropdownField {
    
    function _construct($name,$title=null,$source=array(),$value='',$form=null,$emptyString=null){
        parent::__construct($name, $title, $value, $form, $rightTitle);
    }
    
    public function getAttributes(){
        // load the more recent version of jquery and jquery UI
        Requirements::javascript('vendor/components/jquery/jquery.min.js');
        Requirements::javascript('vendor/components/jqueryui/jquery-ui.min.js');
        Requirements::javascript('vendor/bower_components/jquery-ui-slider-pips/dist/jquery-ui-slider-pips.min.js');
        Requirements::css('vendor/bower_components/jquery-ui-slider-pips/dist/jquery-ui-slider-pips.min.css');
        // add our own requirements
        Requirements::css(THIRDPARTY_DIR.'/jquery-ui-themes/smoothness/jquery-ui.min.css');
        Requirements::javascript(JQUERYUI_FIELDS_DIR.'/javascript/JqueryUISliderField.init.js');
        Requirements::css(JQUERYUI_FIELDS_DIR.'/css/JqueryUISliderField.css');
        // init
        $attributes = array(
            'data-slider-values' => json_encode($this->source),
            'data-slider-value' => $this->Value()?:$source[0]
        );
        return array_merge(
            parent::getAttributes(),
            $attributes
        );
    }
    
}