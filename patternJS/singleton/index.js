let instance;

class Counter {
  constructor(count) {

    if(instance) {
      throw Error('Cannot create more than one instance of Counter');
    }
    this.count = 0;
    instance = this

  }

  increment() {
   return this.count + 1;
  }

  getCount() {
    return this.count;
  }
}

 

export const counter1 =Object.freeze(new Counter());

 