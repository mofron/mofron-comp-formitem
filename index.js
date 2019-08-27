/**
 * @file   mofron-comp-formitem/index.js
 * @brief  base component for form item.
 *         This component has some function for form item.
 *         Extending this class makes it easier to develop form item components.
 * @attention It needs to overwrite at extending class since some functions is an interface.
 * @author simpart
 */
const mf   = require('mofron');
const Text = require('mofron-comp-text');
mf.comp.FormItem = class extends mf.Component {
    /**
     * constructor
     * 
     * @param (mixed) label parameter
     *                object: component option
     * @pmap label
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('FormItem');
            this.prmMap('label');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
            super.initDomConts();
            /* label */
            this.addChild(this.label());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * set focus status
     *
     * @type private 
     */
    afterRender () {
        try {
            super.afterRender();
            this.focus(this.focus());
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * form item label
     *
     * @param (mixed) string/mofron-comp-text: label text
     * @return (mofron-comp-text) text component for label
     * @type parameter
     */
    label (prm) {
        try {
            if (true === mf.func.isInclude(prm, 'Text')) {
                prm.option({ text: '', visible : false });
            } else if ('string' === typeof prm) {
                this.label().option({ text: prm, visible: true });
                return;
            }
            return this.innerComp('label', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * horizontal config
     * 
     * @param (boolean) true: horizontal placing (form item is placed next to a label)
     *                  false: normal placing (form item is placed under a label)
     * @return (boolean) placing config
     * @type parameter
     */
    horizon (prm) {
        try {
            if (undefined === prm) {
                let val = this.adom().child()[0].style('display');
                return ('flex' === val) ? true : false;
            }
            /* setter */
            if ('boolean' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.adom().child()[0].style(
                { 'display' : (true === prm) ? 'flex' : null },
                true
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * config for require flag
     * it become required item in form if this flag is true
     * 
     * @param (boolean) true: required item (An error is detected if data is sent when empty this item data)
     *                  false: not required item
     * @return (boolean) require flag
     * @type parameter
     */
    require (flg) {
        try { return this.member('require', 'boolean', flg, false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item value
     * interface for getter/setter of formitem
     * 
     * @param (mixed) item value
     * @return (mixed) item value
     * @type private
     */
    value (prm) {
        console.warn('not implements');
    }
    
    /**
     * check item value about valid or invalid
     * 
     * @return (string) error reason
     * @return (null) no error
     * @type private
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
     * focus status
     * 
     * @param (boolean) true: focus this item
     *                  false: defocus this item
     * @return (boolean) focus status
     * @type parameter
     */
    focus (prm) {
        try {
            if ( (undefined === prm) && (true === this.target().isPushed()) ) {
                if (document.activeElement.id === this.target().getId()) {
                    return true;
                }
                return false;
            } else if ( (undefined !== prm) && (true === this.target().isPushed()) ) {
                if (true === prm) {
                    this.target().getRawDom().focus();
                } else {
                    this.target().getRawDom().blur();
                }
            }
            return this.member('focus', 'boolean', prm, false);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * change event function
     *
     * @param (function) change event
     * @param (mix) event parameter
     * @return (array) [[function,parameter], ...]
     * @type private
     */
    changeEvent (fnc, prm) {
        try {
            if ( (undefined !== fnc) && ('function' !== typeof fnc)) {
                throw new Error('invalid parameter');
            }
            return this.arrayMember(
                'changeEvent',
                'object',
                (undefined !== fnc) ? [fnc, prm] : undefined
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item status
     * 
     * @param (boolean) true: change enable mode [default]
     *                  false: change disable mode
     * @return (boolean) current item status
     * @type parameter
     */
    status (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return ('disabled' === this.target().attr('disabled'))? true : false;
            }
            /* setter */
            if ('boolean' !== typeof prm) {
                throw new Error('invalid parameter');
            }
            this.target().attr({ 'disabled' : (true === prm)? 'disabled' : null });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * enable form item
     * 
     * @type private
     */
    enabled () {
        try { return this.status(true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * disable form item
     *
     * @type private
     */
    disabled () {
        try { return this.status(false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * a key of POST data
     * 
     * @param (string) send key
     * @return (string) send key
     * @type tag parameter
     */
    sendKey (prm) {
        try { return this.member('sendKey', 'string', prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * clear item value
     *
     * @type private
     */
    clear () {
        console.warn('not implements');
    }
    
    /**
     * item height
     * 
     * @param (string (size)) item height [ if horizon function is false and visible function is true, height will be bisected.]
     * @param (option) style option
     * @return (string (size)) item height
     * @type tag parameter
     */
    height (prm, opt) {
        try {
            if (undefined === prm) {
                /* getter */
                if ( (false === this.horizon()) && (true === this.label().visible()) ) {
                    return mf.func.sizeSum(this.label().height(), super.height());
                }
                return super.height();
            }
            /* setter */
            let set_siz = mf.func.getSize(prm);
            if (null == set_siz) {
                return;
            }
            if ( (false === this.horizon()) && (true === this.label().visible()) ) {
                super.height(mf.func.roundUp(set_siz.value()/2) + set_siz.type(), opt);
            } else {
                super.height(set_siz, opt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.FormItem;
/* end of file */
