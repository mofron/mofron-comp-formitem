#   mofron-comp-formitem
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

 base component for form item.

This component has some function for form item.

Extending this class makes it easier to develop form item components.

## Attention
 - It needs to overwrite at extending class since some functions is an interface.

# Install
```
npm install mofron   mofron-comp-formitem
```

# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| | label | string/mofron-comp-text | label text |
| | horizon | boolean | true: horizontal placing [form item is placed next to a label] |
| | | | false: normal placing [form item is placed under a label] |
| | require | boolean | true: required item [An error is detected if data is sent when empty this item data] |
| | | | false: not required item |
| | value | mixed | item value |
| | focus | boolean | true: focus this item |
| | | | false: defocus this item |
| | status | boolean | true: change enable mode [default] |
| | | | false: change disable mode |
| | sendKey | string | send key |
| | height | string (size) | item height [ if horizon function is false and visible function is true, height will be bisected.] |
| | | option | style option |

