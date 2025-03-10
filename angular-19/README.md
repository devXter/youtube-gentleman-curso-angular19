# Angular 19

## Configuración para Hidratación incremental

> [app.config.ts](./src/app/app.config.ts)

```typescript
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withIncrementalHydration(), withEventReplay()), // Se agrega el parámetro withIncrementalHydratation() en el provider providerClientHydratation()
  ],
};
```
