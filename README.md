#   mofron-comp-formitem
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

 base component for form item.

this component has some function for form item.

extending this class makes it easier to develop form item components.

## Attention
 - it needs to overwrite at extending class since some functions is an interface.

# Install
```
npm install mofron   mofron-comp-formitem
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| ◯  | label | mixed | string: label text |
| | | | mofron-comp-text: text component for label |
| | | | undefined: call as getter |
| | horizon | boolean | true: horizontal placing (form item is placed next to a label) |
| | | | false: normal placing (form item is placed under a label) |
| | | | undefined: call as getter |
| | required | boolean | true: required item (An error is detected if data is sent when empty this item data) |
| | | | false: not required item |
| | | | undefined: call as getter |
| | focus | boolean | true: focus this item |
| | | | false: defocus this item |
| | | | undefined: call as getter |
| | focusEvent | function | event function |
| | | | undefined: call as getter |
| | | mixed | function parameter |
| | status | boolean | true: change enable mode [default] |
| | | | false: change disable mode |
| | | | undefined: call as getter |
| | enabled | ||
| | disabled | ||
| | sendKey | string | send key |
| | | | undefined: call as getter |
| | height | string (size) | item height (if horizon function is false and visible function is true, height will be bisected.) |
| | | | undefined: call as getter |
| | | key-value | style option |

