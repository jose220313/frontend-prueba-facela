### Descripción del Proyecto

Este proyecto es una aplicación web desarrollada con **Next.js** y **React**. Utiliza **TypeScript** para el tipado estático y **Tailwind CSS** para el diseño de la interfaz de usuario. El proyecto está configurado para ser ejecutado y desplegado fácilmente utilizando **npm**.

### Tecnologías Utilizadas

- **Next.js**: Framework de React para aplicaciones web con renderizado del lado del servidor y generación de sitios estáticos.
- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Tailwind CSS**: Framework de CSS para diseño de interfaces de usuario.
- **npm**: Gestor de paquetes para JavaScript.
- **Lucide Icons**: Biblioteca de iconos utilizada en el proyecto.

### Estructura del Proyecto

La estructura del proyecto es la siguiente:

```
/components
  /ui
    button.tsx
    ...
  /layout
    Navbar.tsx
    Footer.tsx
/pages
  _app.tsx
  index.tsx
/public
  /images
  favicon.ico
/styles
  globals.css
/tailwind.config.ts
/components.json
/README.md
/package.json
/tsconfig.json
```

### Gestor de Estado

Para el proyecto se esta utilizando **Zustand** para el manejo de estados globales. [Ver documentación de zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)

### Ejecución del Proyecto

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```bash
npm install
```

```bash
npm run dev
```

Luego, abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

Esta documentación proporciona una visión general de las partes más importantes del proyecto y cómo empezar a trabajar con él.
