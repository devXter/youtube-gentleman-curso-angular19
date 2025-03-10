# CursoBigoteAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

---
To start a local development server, run:

```bash
ng serve
```

## Configuraciones iniciales

---
Este caso es opcional en caso de querer configurar bun como predeterminado.
```bash
ng config -g cli.packageManager bun
```

## Agregar configuración en los archivos de configuración

> Archivo: **[app.config.ts](CursoBigoteAngular/src/app/app.config.ts)**

Se modifica la configuración inicial del proyecto.

```
export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(), => Reemplaza la config inicial con este método para no utilizar zoneJS
    provideRouter(routes, withComponentInputBinding()), => Se agrega el withComponentInputBinding() como segundo parámetro, con esto accedemos directamente a los parámetros en la url
    provideHttpClient(withFetch()), => Se agrega el provideHttpClient(withFetch()) para hacer peticiones con fetch
    provideClientHydration(withEventReplay())
  ]
};
```
> Archivo: **[angular.json](CursoBigoteAngular/angular.json)**

Después de modificar la configuración del ZoneJS del app.config.ts se debe modificar la configuración de este archivo.

```
"projects": {
  "CursoBigoteAngular": {
    "projectType": "application",
    "schematics": {
      "@schematics/angular:component": {
        "style": "scss",
        "changeDetection": "OnPush", => se agrega el changeDetection = OnPush
      }
    },
```

> Archivo: **[tsconfig.ts](CursoBigoteAngular/tsconfig.json)**

Se agregan configuraciones para el manejo de rutas de manera eficiente.

```
"baseUrl": "./", => agregamos la ruta por defecto
"paths": {
  "@app/*": [
    "src/app/*" => agregamos un path para las importaciones
  ]
}
```


## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
