import { useState } from 'react';
import items from './data/items';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import ListPanel from './components/ListPanel';

export default function App() {
  const [list, setList] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const total = list.length;

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
      <Navbar
        total={total}
        onOpenPanel={() => setIsPanelOpen(true)}
      />

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

      <ListPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        list={list}
      />
    </div>
  );
}