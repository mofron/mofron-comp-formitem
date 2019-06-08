# mofron-comp-formitem
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

base component for form item.

This component has some function for form item.

Extending this class makes it easier to develop form item components.

## attention
It needs to overwrite at extending class since some functions is an interface.

# Install

```bash
npm install mofron mofron-comp-formitem
```

# Parameter

| Simple<br>Param | Parameter Name     | Type                           |    Description                     |
|:---------------:|:-------------------|:-------------------------------|:-----------------------------------|
|        ◯        | label              | string                         | label text                         |
|                 |                    | mofron-comp-text               | label text                         | 
|                 | horizon            | boolean                        | true: horizontal placing<br>(form item is placed next to a label) |
|                 |                    |                                | false: normal placing<br>(form item is placed under a label)      |
|                 | value              | mixed                          | item value                         |
|                 | focus              | boolean                        | focus this item                    |
|                 |                    |                                | defocus this item (default)        |
|                 | changeEvent        | function                       | change event                       |
|                 |                    | mixed                          | event parameter                    |
|                 | status             | boolean                        | true: change enable mode (default) |
|                 |                    |                                | false: change disable mode         |
|                 | sendKey            | string                         | send key of POST data              |

