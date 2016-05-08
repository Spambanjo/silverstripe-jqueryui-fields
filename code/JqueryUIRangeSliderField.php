<?php

class JqueryUIRangeSliderField extends DropdownField {
    
    public function __construct($name, $title = null, $source = array(), $value = '', $form = null, $emptyString = null) {
        parent::__construct($name, $title, $source, $value, $form, $emptyString);
    }
    
    public function getAttributes(){
        // load the more recent version of jquery and jquery UI
        Requirements::javascript('vendor/components/jquery/jquery.min.js');
        Requirements::javascript('vendor/components/jqueryui/jquery-ui.min.js');
        Requirements::javascript('vendor/bower_components/jquery-ui-slider-pips/dist/jquery-ui-slider-pips.min.js');
        Requirements::css('vendor/bower_components/jquery-ui-slider-pips/dist/jquery-ui-slider-pips.min.css');
        // add our own requirements
        Requirements::css(THIRDPARTY_DIR.'/jquery-ui-themes/smoothness/jquery-ui.min.css');
        Requirements::javascript(JQUERYUI_FIELDS_DIR.'/javascript/JqueryUIRangeSliderField.init.js');
        Requirements::css(JQUERYUI_FIELDS_DIR.'/css/JqueryUIRangeSliderField.css');
        // init
        $attributes = array(
            'data-slider-values' => json_encode($this->source),
            'data-slider-value' => $this->Value()?:array_values($this->source)[0]
        );
        return array_merge(
            parent::getAttributes(),
            $attributes
        );
    }
    
    public function getFixedAttributesHTML(){
        $att = $this->getAttributes();
        $r = $this->getAttributesHTML();
        $r = str_replace('name="'.$att['name'].'"','',$r);
        $r = str_replace('id="'.$att['id'].'"','',$r);
        $r = str_replace('class="'.$att['class'].'"','',$r);
        return $r;
    }
    
    public function Field($properties = array()) {
        $f = parent::Field();
        return $f->renderWith('JqueryUIRangeSliderFieldHTML',array(
            'ID' => $this->ID(),
            'Name' => $this->getName(),
            'FixedAttributesHTML' => $this->getFixedAttributesHTML()
        ));
    }
    
}