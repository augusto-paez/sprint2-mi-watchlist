# 🕹️ Después Lo Juego — Mi Watchlist de Videojuegos

**Después Lo Juego** es una SPA (Single Page Application) desarrollada en React para la gestión y seguimiento del backlog personal de videojuegos pendientes por jugar.

Proyecto práctico realizado para el **Sprint 2** de la *Diplomatura en Desarrollo Web FullStack*.

---

## 🚀 Tecnologías Utilizadas

* **React 19** (Vite + JSX)
* **Tailwind CSS v4** (con `@theme` y variables de color personalizadas)
* **Space Grotesk** (Tipografía principal vía Google Fonts)

---

## 🛠️ Características Principales

1. **Catálogo completo:** Exploración de 25 videojuegos con información de género, plataforma, puntaje y badge condicional `🎮 Multijugador`.
2. **Buscador en vivo:** Filtrado instantáneo por nombre mediante input controlado.
3. **Gestión de Backlog:** Agregar y quitar juegos de la lista personal mediante un mecanismo de `toggle` inmutable.
4. **Panel Lateral (ListPanel):** Visualización del backlog guardado, remoción de ítems individuales y opción para vaciar la lista completa con confirmación.
5. **Título de pestaña reactivo:** Sincronización automática de `document.title` con la cantidad total de juegos guardados.
6. **Persistencia robusta:** Guardado automático en `localStorage` bajo la clave `despues-lo-juego:watchlist` con inicialización *lazy* y manejo de datos corruptos mediante `try/catch`.
7. **Custom Hooks:** Lógica modularizada y reutilizable en hooks propios (`useLocalStorage`, `useMisJuegos`, `useToggle`).

---

## 🧠 Custom Hooks Desarrollados

* **`useLocalStorage(key, initialValue)`:** Hook genérico independiente del dominio que encapsula la inicialización *lazy*, la lectura segura (`try/catch`) y la sincronización con `localStorage` mediante `useEffect`.
* **`useMisJuegos()`:** Hook específico del dominio de videojuegos que consume `useLocalStorage('despues-lo-juego:watchlist', [])` y expone las acciones del backlog (`list`, `total`, `isInList`, `toggle`, `remove`, `clear`).
* **`useToggle(initialValue)`:** Hook helper para simplificar el manejo de valores booleanos de la interfaz (`isPanelOpen`).

---

## 📦 Instrucciones para Ejecutar el Proyecto

1. Clonar el repositorio:
   ```bash
   git clone TU_URL_DE_GITHUB_AQUI
   cd sprint2-mi-watchlist
   pnpm install
   pnpm dev
   ```

2. Abrir el navegador en: `http://localhost:5173/` 
