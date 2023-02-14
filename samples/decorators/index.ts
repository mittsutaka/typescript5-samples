// const classDecorator = (value: any, context: any) => {
//   console.log(value);
//   console.log(context);
//   context.addInitializer(() => console.log(`初期化:${context.kind}:${String(context.name)}`));
//   console.log(value, context);
// };

// const classMethodDecorator = (value: any, context: any) => {
//   console.log(value, context);
//   context.addInitializer(() => console.log(`初期化:${context.kind}:${String(context.name)}`));
//   return function (this: unknown, ...args: any[]) {
//     return `取得:${context.kind}:${String(context.name)} => ${value.apply(this, args)}`;
//   };
// };

// class Person {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }

//   @loggedMethod
//   greet() {
//     console.log('LOG: Entering method.');

//     console.log(`Hello, my name is ${this.name}.`);

//     console.log('LOG: Exiting method.');
//   }
// }

// function loggedMethod(originalMethod: any, context: ClassMethodDecoratorContext) {
//   const methodName = String(context.name);

//   function replacementMethod(this: any, ...args: any[]) {
//     console.log(`LOG: Entering method '${methodName}'.`);
//     const result = originalMethod.call(this, ...args);
//     console.log(`LOG: Exiting method '${methodName}'.`);
//     return result;
//   }

//   return replacementMethod;
// }
// const p = new Person('Ray');
// p.greet();
const BaseEntity = (ctr: Function) => {
  ctr.prototype.id = Math.random();
  ctr.prototype.created = new Date().toLocaleString('es-ES');
  console.log('test');
};

@BaseEntity
class Course {
  created: Date;
  id: number;
  constructor(public name: string) {}
}

const mathCourse = new Course('English');

console.log('id: ' + mathCourse.id);
console.log('id: ' + mathCourse.created);
