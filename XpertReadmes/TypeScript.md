# TypeScript

[Volver a Inicio](../README.md)

## Tipo Personalizado
```ts
type User = {
  id: number;
  name: string;
  age: number;
  email?: string; // Propiedad opcional
};
```

## Interfaz
```ts
interface Person {
  id: number;
  name: string;
  age: number;
  email?: string; // Propiedad opcional
}
```

## Atajos
```ts
// Omitir la propiedad 'id':
let homer: Omit <User, 'id'> = {
  name: 'Homero',
  age: 40,
};

// Tomar interfaz/tipo parcial:
let homer: Partial <User> = {
  name: 'Homero',
}

// Agregar propiedad:
let homer: User & { address: string } = {
  id: 1,
  name: 'Homero',
  age: 40,
  address: 'Siempreviva 123',
}
```