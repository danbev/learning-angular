## Learning Angular 
The sole purpose of this project is to learn Angular 2 and have it as a personal reference.


## Angular 1
The source for Angular 1 can be found in [angular1](./angular1)

## Installation/running

    $ npm install -g serve
    $ serve src/

### View
A view is what exists after Angular has compiled the DOM

### Compilation
This has two stages, the compilation phase and the linking phase.

#### Compilation phase
This is done by Angular after the full html has been loaded. Angular will parse the DOM and compile a list of all the Angular directives.

#### Linking phase
This phase is all about linking the the Angular parts to scope instances.

You can invoke the compilation process using:

    $compile(element.contents())(scope);

### Scope
Scope is what glues a view and a controller together. Its a JavaScript object with some events which enable/drive the digest cycle in Angular. This is what keeps the view and the controller synchronized.

Template ---> Compile ---> View

Model <---> View    // Digest cycle

So how does Angular detect a change?  
This is done using dirty checking.

### $digest
This is what controls the digest cycle mentioned above. This happens implicitely but can be driggered by using $apply which calls digest with additional error handling. This might be required if you make an API call and need to let Angular know about it.

After the compilation the $scope will have evaluated all its properties and created watch expressions for each of them. These expressions compare the value of the property with the previous value. During the digest cycle all these expressions are evaluted. A listener function is called if a property has changed.




## Angular 2

## JavaScript Decorators
A decorator is a function that takes another function and extends that functions behavior but 
without modifying the function itself.

The `@` sign indicates to the Parser that we are using a decorator and it is followed the name
of the new function. A decorator takes an argument which is the function being decorated. The 
return value is the same function but with the added functionality.

Example of decorating a property:

    function readonly(target, key, descriptor) {
      descriptor.writabe = false;
      return descriptor;
    }
    class Cat {
      @readonly
      meow() {
        return '${this.name}} says Meow!';
     }
    }

Example of decorating a class


## JavaScript classes
Are just syntaxtic suger to deal with prototypes, constructor functions, extends, super calls etc.

    class Cat {
      constructor(name) {
        this.name = name'
       }
    }

Would be the same as doing:

    function Cat(name) {
      this.name = name;
    }
    var cat = new Cat("Texas");

