# supernatural
Reactive Array and Object based on Proxy and Signal


## Arr Concept
```JavaScript

const arr = new Arr([1, 2, 3], {/*options*/});

arr.subscribe(v=>{
  console.log('signal notify!', v)
}, false); /* false means no initial notify */


console.log('Initial array:', arr);

console.log('\nTesting push...');
arr.push(4);

console.log('\nTesting index assignment...');
arr[0] = 10;

console.log('\nTesting reverse...');
arr.reverse();

console.log('\nTesting length modification...');
arr.length = 2;

console.log('\nFinal array:', arr);

```

## Obj Concept

```JavaScript

const obj = new Obj({ name: 'Test', value: 42 }, {/*options*/});
console.log('Initial object:', obj);

console.log('\nTesting property assignment...');
obj.name = 'Updated';

console.log('\nTesting new property...');
obj.newProp = 'Hello';

console.log('Final object:', obj)

```

## Str and Num Limitation

Unlike Arr and Obj, Str and Num Are Not Possible

The best we could do is:

const firstName = new Str('Alice');
firstName.subscribe(v => console.log('WOW!!!', v), false);
firstName.value = 'Alicia'; // Triggers: WOW!!! Alicia

Which is already covered by:

const firstName = new Signal('Alice');
firstName.subscribe(v => console.log('WOW!!!', v), false);
firstName.value = 'Alicia'; // Triggers: WOW!!! Alicia

Strings are primitives in JavaScript.

The problem is: firstName = 'Alicia'

This reassigns the variable itself, not the string's internal value.

In JavaScript, you can't intercept variable reassignment.
