function component(config: {selector: string, template: string}) {
    return function(target: any) {
        target.prototype.selector = config.selector;
        target.prototype.template = config.template;
    }
}


@component({
    selector: 'app',
    template: '',
})
class MyComponent {

    selector!: string;
    template!: string;

    titulo: string = 'Soy un componente personalizado';
}