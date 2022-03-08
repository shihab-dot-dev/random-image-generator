/**
 * Pubsub util
 *
 * A class that implements a publish (or 'emit') and subscribe logic.
 *
 * Instance Methods
 * - subscribe(eventName, func) -> subscribe a function to trigger when a specific event
 * is published. This returns an object with method "unsubscribe()" that allows us to
 * remove func from being triggered when the evt is published.
 *
 * - publish(eventName, ...args) ->  Publishes evt, and calls all functions associated with
 * the evt. Additionally, it passes all arguments supplied to publish into the functions
 * that are triggered.
 */

export default class Pubsub {
  constructor() {
    this.tracker = {
      // key: eventname, value: [ funcs ]
    };
  }

  subcribe(eventName, func) {
    if (this.tracker[eventName]) {
      this.tracker[eventName].push(func);
    } else {
      this.tracker[eventName] = [func];
    }
    return {
      unsubscribe: () => {
        const funcs = this.tracker[eventName];
        const idx = funcs.indexOf(func);
        if (idx > -1) {
          funcs.splice(idx, 1);
        }
      },
    };
  }

  publish(eventName, ...args) {
    const funcs = this.tracker[eventName];
    if (Array.isArray(funcs)) {
      funcs.forEach((func) => {
        func.apply(null, args);
      });
    }
  }
}

const plusOne = (x) => {
  console.log("plusOne", x + 1);
};
const logThree = (x, y, z) => {
  console.log("logThree", x, y, z);
};

const pubsub = new Pubsub();

const foo = pubsub.subcribe("fun", plusOne);
const bar = pubsub.subcribe("fun", logThree);

const baz = pubsub.subcribe("lame", plusOne);

pubsub.publish("fun", 1, 2, 3); // calls plusOne & logThree
pubsub.publish("lame", 4); // calls plusOne

foo.unsubscribe(); // removes plusOne from "fun"

pubsub.publish("fun", 5, 6); // calls logThree
