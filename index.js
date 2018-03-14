/**
 * @file   mofron-comp-formitem/index.js
 * @brief  form item interface
 * @author simpart
 */
let mf = require('mofron');
/**
 * @class mofron.comp.FormItem
 * @brief form item component for mofron
 */
mf.comp.FormItem = class extends mf.Component {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('FormItem');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    label (lbl) {
        console.warn('not implements');
    }
    
    /**
     * item value getter/setter
     * 
     */
    value (prm) {
        console.warn('not implements');
    }
    
    /**
     * check item value valid
     */
    checkValue () {
        console.warn('not implements');
    }
    
    /**
     * get forcus status
     *
     */
    isFocused () {
        try {
            let chk_id  = document.activeElement.id;
            if (chk_id === this.target().getId()) {
                return true;
            }
            false;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    changeEvent (fnc, prm) {
        try {
            if (undefined === fnc) {
                /* getter */
                return (undefined === this.m_chgevt) ? null : this.m_chgevt;
            }
            /* setter */
            if ('function' !== typeof fnc) {
                throw new Error('invalid parameter');
            }
            if (undefined === this.m_chgevt) {
                this.m_chgevt = new Array();
            }
            this.m_chgevt.push([fnc, prm]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.FormItem;
/* end of file */
