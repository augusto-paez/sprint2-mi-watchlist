import { useState } from 'react';
import items from './data/items';
import ItemList from './components/ItemList';

export default function App() {
  const [list, setList] = useState([]);

  const toggle = (item) => {
    setList((prevList) => {
      const exists = prevList.some((i) => i.id === item.id);
      if (exists) {
        return prevList.filter((i) => i.id !== item.id);
      }
      return [...prevList, item];
    });
  };

  const isInList = (item) => list.some((i) => i.id === item.id);

  return (
    <div className="min-h-screen bg-[#0f0f17] text-gray-100 font-sans">
      <header className="border-b border-gray-800 bg-[#141420]/80 backdrop-blur-md sticky top-0 z-10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan-accent)] to-[var(--color-violet-accent)]">
            Después Lo Juego
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold text-white mb-4">
          Catálogo de Videojuegos ({items.length})
        </h2>

        <ItemList
          items={items}
          isInList={isInList}
          onToggle={toggle}
        />
      </main>
    </div>
  );
}