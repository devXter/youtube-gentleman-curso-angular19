function mayus(targe: any, context: ClassAccessorDecoratorContext) {
    return {
        get(this: any) {
            return this[`_${String(context.name)}`].toUpperCase();
        },
        set(this: any, value: string) {
            this[`_${String(context.name)}`] = value.toUpperCase();
        }
    }
}


class Person {
    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    private _name: string;

    constructor(name: string) {
        this._name = name;
    }
}