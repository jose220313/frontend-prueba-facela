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

- **/components**: Contiene los componentes reutilizables de la aplicación.
    - **/ui**: Componentes de la interfaz de usuario, como botones.
    - **/layout/Navbar.tsx**: Componente de navegació de página.
    - **/layout/Footer.tsx**: Componente del pie de página.
- **/pages**: Contiene las páginas de la aplicación.
    - **_app.tsx**: Archivo de configuración de la aplicación.
    - **index.tsx**: Página principal de la aplicación.
- **/public**: Contiene archivos estáticos como imágenes y el favicon.
- **/styles**: Contiene los archivos de estilos globales.
- **tailwind.config.ts**: Archivo de configuración de Tailwind CSS.
- **components.json**: Archivo de configuración de componentes.
- **README.md**: Archivo de documentación del proyecto.
- **package.json**: Archivo de configuración de npm.
- **tsconfig.json**: Archivo de configuración de TypeScript.

### Gestor de Estado

Para el proyecto se esta utilizando **Zustand** para el manejo de estados globales. [Ver documentación de zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)

### Ejecución del Proyecto

Para ejecutar el proyecto en modo de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

Luego, abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Despliegue

El despliegue de la aplicación se puede realizar fácilmente en la plataforma **Vercel**. Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para más detalles.


Esta documentación proporciona una visión general de las partes más importantes del proyecto y cómo empezar a trabajar con él.