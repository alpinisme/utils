utils / [Exports](modules.md)

# A Library of Utility Functions

Functions can be imported either directly from subdirectory or qualified by scope, so both of the following work:

```ts
import { arr } from 'utils';

arr.uniques([1, 2, 2, 1, 4, 1, 9]); // [1, 2, 4, 9]
```

```ts
import { uniques } from 'utils/pure-immutable';

uniques([1, 2, 2, 1, 4, 1, 9]); // [1, 2, 4, 9]
```

Check out the docs directory for auto generated documentation for all exports.
