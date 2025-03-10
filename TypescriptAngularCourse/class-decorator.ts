// Decorador es agregar funcionalidad extra a algo que no lo tiene

// Example 1: Add property to a class

function gentlemanApproves<T extends { new(...args: any[]): {} }>(constructor: T, _context: ClassDecoratorContext): T {
    return class extends constructor {
        gentleman = 'Yes';
    };
}

@gentlemanApproves
class MyClass {
    constructor() {
    }
}

const instance = new MyClass();

console.log((instance as any).gentleman); // MyClass