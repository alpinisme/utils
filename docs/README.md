utils / [Exports](modules.md)

# A Library of Utility Functions

Functions can be imported either directly or qualified by scope, so both of the following work:

```ts
import { arr } from 'utils';

arr.unique([1, 2, 2, 1, 4, 1, 9]); // [1, 2, 4, 9]
```

```ts
import { unique } from 'utils';

unique([1, 2, 2, 1, 4, 1, 9]); // [1, 2, 4, 9]
```
