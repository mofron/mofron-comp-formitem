/**
 * @file   mofron-comp-formitem/index.js
 * @brief  form item interface
 * @author simpart
 */
const mf   = require('mofron');
const Text = require('mofron-comp-text');
mf.comp.FormItem = class extends mf.Component {
    /**
     * initialize component
     * 
     * @param p1 (object) option
     * @param p1 (string) label text
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
     * @note private method
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
     * @note private method
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
     * label component setter/getter
     *
     * @param p1 (string) label text
     * @param p1 (Text) label component
     * @return (Text) label component
     */
    label (prm) {
        try {
            if (true === mf.func.isInclude(prm, 'Text')) {
                prm.execOption({
                    text    : '',
                    visible : false
                });
            } else if ('string' === typeof prm) {
                let hei = this.height();
                this.label().execOption({
                    text    : prm,
                    visible : true
                });
                this.height(hei);
                return;
            }
            return this.innerComp('label', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * horizon position setter/getter
     *
     * @param p1 (true) horizon position
     * @param p1 (false) disable horizon position
     * @return (boolean) horizon status
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
     * require flag setter/getter
     * it become required item in form if this flag is true
     * 
     * @param p1 (boolean) require flag
     * @return (boolean) require flag
     */
    require (flg) {
        try { return this.member('require', 'boolean', flg, false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item value getter/setter
     *
     * @note interface method
     */
    value (prm) {
        console.warn('not implements');
    }
    
    /**
     * check item value about valid or invalid
     *
     * @return (string) error reason
     * @return (null) no error
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
     * focus status getter/setter
     * 
     * @param p1 (true) focus this form item
     * @param p1 (false) defocus this form item
     * @return (boolean) focus status
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
     * change event callback function setter/getter
     *
     * @param p1 (function) callback function
     * @param p1 (undefined) call as getter
     * @param p2 (mix) parameter of callback function
     * @return (array) [function, parameter]
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
     * form item status setter/getter
     * 
     * @param p1 (true) enable item
     * @param p1 (false) disable item
     * @return (boolean) item status
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
     */
    enabled () {
        try { return this.status(true); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * disable form item
     */
    disabled () {
        try { return this.status(false); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * key when sending post setter/getter
     * 
     * @param p1 (string) set key
     * @param p1 (undefined) call as getter
     * @return (string) send key
     */
    sendKey (nm) {
        try { return this.member('sendKey', 'string', nm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * clear item value
     *
     * @note interface method
     */
    clear () {
        console.warn('not implements');
    }
    
    /**
     * height setter/getter
     *
     * @param p1 (string) height size (css value)
     * @param p1 (undefined) call as getter
     * @return (string) height size (css value)
     */
    height (prm) {
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
                let siz_int = mf.func.flo2int(set_siz.value());
                set_siz = ((siz_int[0]/2) / siz_int[1]) + set_siz.type();
                super.height(set_siz);
            } else {
                super.height(set_siz);
            }
            this.label().execOption({ height : set_siz });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.FormItem;
/* end of file */
