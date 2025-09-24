import {Signal} from './Signal.js';
import {Watcher} from './Watcher.js';

// Enhanced ReactiveArray example with before/after callbacks

export class SupernaturalArray extends Array {
  #signal;
  constructor(...a) {
    super(...a);
    this.#signal = new Signal(this);
    const members = [
      // RegExp for numeric indexes
      /^\d+$/,
      {
        name: (prop) => ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse', 'length'].includes(prop),
        after: () => this.#signal.notify()
      },
    ];
    return Watcher.watch(this, members /*, member => {} */);
  }
  subscribe(...etc){ return this.#signal.subscribe(...etc); }
}

// Example
// const arr = new ReactiveArray(1, 2, 3);
// arr.subscribe(v=>{
//   console.log('### signal notify!', v)
// }, false); /* false means no initial notify */






export class SupernaturalObject {
  #signal;
  constructor(...a) {
    super(...a);
    this.#signal = new Signal(this);
    const members = [
      // Watch all property assignments
      {
        name: (prop) => typeof prop === 'string' && !prop.startsWith('_'),
        after: () => this.#signal.notify()
      },
    ];
    return Watcher.watch(this, members /*, member => {} */);
  }
  subscribe(...etc){ return this.#signal.subscribe(...etc); }
}



// Enhanced ReactiveObject example
// class ReactiveObject2 {

//   #signal = new Signal();

//   subscribe(...etc){ return this.#signal.subscribe(...etc); }
//   get value(){ return this.#signal.value;}
//   set value(v){ return this.#signal.value = v;}

//   constructor(initialData = {}) {
//     // Copy initial data
//     Object.assign(this, initialData);

//     const members = [
//       // Watch all property assignments
//       {
//         name: (prop) => typeof prop === 'string' && !prop.startsWith('_'),
//         before: () => console.log('Before-callback: property about to change'),
//         after: () => console.log('After-callback: property has changed')
//       },

//       // Watch specific methods with different callbacks
//       {
//         name: 'toString',
//         before: () => console.log('Before-callback: converting to string')
//       },

//       // Watch computed properties
//       {
//         name: (prop) => prop.startsWith('computed'),
//         after: () => console.log('After-callback: computed property accessed')
//       }
//     ];

//     return Watcher.watch(this, members, member => {
//       console.log(`[ObjectWatcher] ${member} was accessed/modified`);


//     });
//   }

//   // Method that will be watched
//   updateData(key, value) {
//     this[key] = value;
//   }

//   // Computed property example
//   get computedValue() {
//     return Object.keys(this).length;
//   }
// }






// // Usage examples:
// console.log('=== ReactiveArray Example ===');
// const arr = new ReactiveArray(1, 2, 3);
// arr.subscribe(v=>{
//   console.log('### signal notify!', v)
// }, false); /* false means no initial notify */


// console.log('Initial array:', arr);

// console.log('\nTesting push...');
// arr.push(4);

// console.log('\nTesting index assignment...');
// arr[0] = 10;

// console.log('\nTesting reverse...');
// arr.reverse();

// console.log('\nTesting length modification...');
// arr.length = 2;

// console.log('\nTesting custom method...');
// arr.customMethod();

// console.log('\n=== ReactiveObject Example ===');
// const obj = new ReactiveObject({ name: 'Test', value: 42 });
// console.log('Initial object:', obj);

// console.log('\nTesting property assignment...');
// obj.name = 'Updated';

// console.log('\nTesting new property...');
// obj.newProp = 'Hello';

// console.log('\nTesting method call...');
// obj.updateData('key', 'value');

// console.log('\nTesting computed property...');
// console.log('Computed value:', obj.computedValue);

// console.log('\nFinal array:', arr);
// console.log('Final object:', obj)
