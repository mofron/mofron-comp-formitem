/**
 * @file   mofron-comp-formitem/index.js
 * @brief  form item interface
 * @author simpart
 */
let mf   = require('mofron');
let Text = require('mofron-comp-text');
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
            this.addChild(new Text(''));
            this.label(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    label (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return this.child()[0];
            }
            /* setter */
            if ( !( ('string' === typeof prm) ||
                    (true     === mf.func.isInclude(prm, 'Text')) ) ) {
                throw new Error('invalid parameter');
            }
            if ('string' === typeof prm) {
                this.label().text(prm);
            } else {
                this.updChild(this.label(), prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    require (flg) {
        try {
            if (undefined === flg) {
                /* getter */
                return (undefined === this.m_req) ? false : this.m_req;
            }
            /* setter */
            if ('boolean' !== typeof flg) {
                throw new Error('invalid parameter');
            }
            this.m_req = flg;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
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
     *
     * @return (string) : error reason
     * @return (null) : no error
     */
    checkValue () {
        try {
            if (true === this.require()) {
                if (null === this.value()) {
                    return ('' === this.label().text()) ? 'empty value' : this.label().text() + ' is required';
                }
            }
            return null;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * forcus status getter/setter
     *
     */
     focus (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                if (document.activeElement.id === this.target().getId()) {
                    return true;
                }
                return false;
            }
            /* setter */
            if (true === prm) {
                this.target().getRawDom().focus();
            }
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
    
    disabled (prm) {
        if (undefined === prm) {
            /* getter */
            return ('disabled' === this.target().attr('disabled'))? true : false;
        }
        /* setter */
        if ('boolean' !== typeof prm) {
            throw new Error('invalid parameter');
        }
        this.target().attr({ 'disabled' : (true === prm)? 'disabled' : null });
    }
    
    sendKey (nm) {
        try {
            if (undefined === nm) {
                /* getter */
                return (undefined === this.m_send_key) ? null : this.m_send_key;
            }
            /* setter */
            if ('string' !== typeof nm) {
                throw new Error('invalid parameter');
            }
            this.m_send_key = nm;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.FormItem;
/* end of file */
