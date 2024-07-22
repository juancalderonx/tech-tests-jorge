# Proyectos Finn The Human y Geppo Challenge

Proyectos para la prueba técnica requerida.

## Pasos para ejecutar el proyecto

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/juancalderonx/tech-tests-jorge.git
   ```

2. **Navegar a la carpeta del proyecto**

   Puede ser cualquiera de los dos proyectos, para el proyecto de Finn The Human:

   ```bash
   cd finn-the-human
   ```

   Para el proyecto de Geppo Challenge:

   ```bash
   cd geppo-challenge
   ```

3. **Instalar las dependencias**

   ```bash
   npm install
   ```

4. **Ejecutar el proyecto**

   ```bash
   npm run start
   ```

## Modificación de los datos de entrada

Para modificar los datos de entrada del problema (el número de villanos, los niveles de batalla de Finn y Jake, y los niveles de los villanos), debes editar la llamada a la función `canDefeatVillains` en el archivo `index.ts`. Algo así:

```typescript
console.log(canDefeatVillains(4, 3, 1, [2, 1, 9, 7])); // Output: "SI"
console.log(canDefeatVillains(1, 2, 1, [9])); // Output: "NO"
```

Y para el proyecto de Geppo Challenge, debes editar la llamada a la función `minGeppoMoves` en el archivo `index.ts`. Donde nuevamente lo que puedes hacer es modificar los console.log, algo así:

```typescript
console.log(minGeppoMoves(0, 0, 2, 1)); // 1
console.log(minGeppoMoves(-2, -1, 198, 99)); // 100
```
