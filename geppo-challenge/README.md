# Geppo Challenge

Sanji, el talentoso cocinero y luchador de la tripulación de los Piratas del Sombrero de Paja, está entrenando su habilidad en la técnica del Rokushiki, específicamente en el arte del Geppo. Esta técnica le permite realizar saltos extraordinarios. Este proyecto calcula el número mínimo de saltos de Geppo necesarios para que Sanji llegue a su destino en un espacio bidimensional.

## Descripción

El objetivo de este proyecto es determinar el número mínimo de movimientos necesarios para que Sanji llegue de una posición inicial (x1, y1) a una posición final (x2, y2) utilizando una técnica de salto llamada Geppo. Si no es posible llegar a la posición deseada, el programa devuelve "IMPOSSIBLE".

## Requisitos

- Node.js
- TypeScript

## Instalación

Sigue estos pasos para clonar y configurar el proyecto:

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Cambia al directorio del proyecto:
   ```bash
   cd geppo-challenge
   ```
3. Instala TypeScript si aún no lo tienes instalado:
   ```bash
   npm install typescript
   ```
4. Compila el proyecto:
   ```bash
   npm run build
   ```
5. Ejecuta el proyecto:
   ```bash
   npm start
   ```

## Uso

El archivo principal `index.ts` contiene la implementación de la función `minGeppoMoves` que calcula el número mínimo de movimientos necesarios. Aquí hay algunos ejemplos de cómo usar la función:

```typescript
console.log(minGeppoMoves(0, 0, 2, 1)); // 1
console.log(minGeppoMoves(-2, -1, 198, 99)); // 100
```
