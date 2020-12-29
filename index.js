/**
 * @file   mofron-comp-formitem/index.js
 * @brief  base component for form item.
 *         this component has some function for form item.
 *         extending this class makes it easier to develop form item components.
 * @attention it needs to overwrite at extending class since some functions is an interface.
 * @license MIT
 */
const Text = require('mofron-comp-text');
const onCommon = require('mofron-event-oncommon');
const comutl = mofron.util.common;
const ConfArg = mofron.class.ConfArg;

module.exports = class extends mofron.class.Component {
    /**
     * initialize component
     * 
     * @param (mixed) short-form parameter
     *                key-value: component config
     * @short label
     * @type private
     */
    constructor (prm) {
        try {
            super();
            this.modname('FormItem');
            this.shortForm('label');
            /* init config */
	    this.confmng().add('required', { type: 'boolean', init: false });
	    this.confmng().add("focusEvent", { type: 'event', list: true });
            this.confmng().add('changeEvent', { type: 'event', list: true });
            this.confmng().add('sendKey', { type: 'string' });
	    /* set config */
	    if (undefined !== prm) {
                this.config(prm);
	    }
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
            this.child(this.label());
            
	    /* set focus event */
	    let itm = this;
            this.event([
	        new onCommon(
		    () => {
                        let evt = itm.focusEvent();
			for (let eidx in evt) {
                            evt[eidx][0](itm,true,evt[eidx][1]);
			}
		    },
		    "onfocus"
		),
                new onCommon(
                    () => {
                        let evt = itm.focusEvent();
                        for (let eidx in evt) {
                            evt[eidx][0](itm,false,evt[eidx][1]);
                        }
                    },
                    "onblur"
                ),
		{ private: true }
            ]);
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
     * form item label setter/getter
     *
     * @param (mixed) string: label text
     *                mofron-comp-text: text component for label
     *                undefined: call as getter
     * @return (mofron-comp-text) text component for label
     * @type parameter
     */
    label (prm) {
        try {
            if (true === comutl.isinc(prm, 'Text')) {
                prm.config({
		    text: '', visible: false,
		    style: new ConfArg({ 'margin-right': '0.05rem' })
		});
            } else if ('string' === typeof prm) {
                this.label().config({
		    text: prm,
		    style: new ConfArg({ 'display': null })
		});
                return;
            }
            return this.innerComp('label', prm, Text);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * horizontal config setter/getter
     * 
     * @param (boolean) true: horizontal placing (form item is placed next to a label)
     *                  false: normal placing (form item is placed under a label)
     *                  undefined: call as getter
     * @return (boolean) placing config
     * @type parameter
     */
    horizon (prm) {
        try {
            if (undefined === prm) {
                return ('flex' === this.rootDom()[0].style('display')) ? true : false;
            }
            /* setter */
            this.rootDom()[0].style(
                { 'display' : (true === prm) ? 'flex' : null },
                true
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * config for required flag setter/getter
     * it become required item in form if this flag is true
     * 
     * @param (boolean) true: required item (An error is detected if data is sent when empty this item data)
     *                  false: not required item
     *                  undefined: call as getter
     * @return (boolean) required flag
     * @type parameter
     */
    required (flg) {
        try {
	    return this.confmng('required', flg);
	} catch (e) {
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
     * @return (mixed) string: error reason
     *                 null: no error
     * @type private
     */
    checkValue () {
        try {
            if (true === this.required()) {
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
     * focus status setter/getter
     * 
     * @param (boolean) true: focus this item
     *                  false: defocus this item
     *                  undefined: call as getter
     * @return (boolean) focus status
     * @type parameter
     */
    focus (prm) {
        try {
            if (undefined === prm) {
                /* getter */
		return (document.activeElement === this.childDom().id()) ? true : false;
	    }
            /* setter */
            if (true === this.isExists()) {
                if (true === prm) {
                    this.childDom().getRawDom().focus();
                } else {
                    this.childDom().getRawDom().blur();
                }
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * focus event function setter/getter
     * 
     * @param (function) event function
     *                   undefined: call as getter
     * @param (mixed) function parameter
     * @return (array) event list
     * @type parameter
     */
    focusEvent (fnc, prm) {
        try {
	    return this.confmng(
	        "focusEvent", (undefined === fnc) ? undefined : [fnc,prm]
            );
	} catch (e) {
            console.error(e.stack);
            throw e;
	}
    }
    
    /**
     * change event function setter/getter
     *
     * @param (function) change event
     *                   undefined: call as getter
     * @param (mix) event parameter
     * @return (array) event list
     * @type private
     */
    changeEvent (fnc, prm) {
        try {
	    return this.confmng(
	        'changeEvent', (undefined === fnc) ? undefined : [fnc,prm]
            );
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * item status setter/getter
     * 
     * @param (boolean) true: change enable mode [default]
     *                  false: change disable mode
     *                  undefined: call as getter
     * @return (boolean) current item status
     * @type parameter
     */
    status (prm) {
        try {
            if (undefined === prm) {
                /* getter */
                return ('disabled' === this.childDom().attrs('disabled'))? true : false;
            }
            /* setter */
            this.childDom().attrs({ 'disabled' : (true === prm) ? 'disabled' : null });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * enable form item
     * 
     * @type function
     */
    enabled () {
        try {
	    return this.status(true);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * disable form item
     *
     * @type function
     */
    disabled () {
        try {
	    return this.status(false);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * a key of POST data setter/getter
     * 
     * @param (string) send key
     *                 undefined: call as getter
     * @return (string) send key
     * @type parameter
     */
    sendKey (prm) {
        try {
	    return this.confmng('sendKey', prm);
	} catch (e) {
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
     * item height setter/getter
     * 
     * @param (string (size)) item height (if horizon function is false and visible function is true, height will be bisected.)
     *                        undefined: call as getter
     * @param (key-value) style option
     * @return (mixed) string(size): item height
     *                 null: not set
     * @type parameter
     */
    height (prm, opt) {
        try {
            if (undefined === prm) {
                /* getter */
                if ( (false === this.horizon()) &&
		     ( (true === this.label().visible()) ||
		       (false === this.childDom().isPushed() && ("none" !== this.label().style("display"))) ) ) {
                    return comutl.sizesum(this.label().height(), super.height());
                }
                return super.height();
            }
            /* setter */
            let set_siz = comutl.getsize(prm);
            if (null == set_siz) {
                return;
            }
            if ( (false === this.horizon()) && (true === this.label().visible()) ) {
                super.height(comutl.roundup(set_siz.value()/2) + set_siz.type(), opt);
            } else {
                super.height(set_siz, opt);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
