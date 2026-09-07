import { useState, useEffect } from 'react';
import items from './data/items';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import ListPanel from './components/ListPanel';
import SearchBar from './components/SearchBar';

export default function App() {
  const [list, setList] = useState([]);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const total = list.length;

  useEffect(() => {
    if (total > 0) {
      document.title = `(${total}) Después Lo Juego | Mi Watchlist`;
    } else {
      document.title = 'Después Lo Juego | Mi Watchlist';
    }
  }, [total]);

  const catalogoFiltrado = items.filter((item) =>
    item.nombre.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const toggle = (item) => {
    setList((prevList) => {
      const exists = prevList.some((i) => i.id === item.id);
      if (exists) {
        return prevList.filter((i) => i.id !== item.id);
      }
      return [...prevList, item];
    });
  };

  const remove = (item) => {
    setList((prevList) => prevList.filter((i) => i.id !== item.id));
  };

  const clear = () => {
    setList([]);
  };

  const isInList = (item) => list.some((i) => i.id === item.id);

  return (
    <div className="min-h-screen bg-[#0f0f17] text-gray-100 font-sans">
      <Navbar
        total={total}
        onOpenPanel={() => setIsPanelOpen(true)}
      />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Catálogo de Videojuegos
            </h2>
            <p className="text-xs text-gray-400 mt-0.5">
              Explora y gestiona tus juegos pendientes
            </p>
          </div>

          <SearchBar
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        {catalogoFiltrado.length > 0 ? (
          <ItemList
            items={catalogoFiltrado}
            isInList={isInList}
            onToggle={toggle}
          />
        ) : (
          <div className="bg-[#161722] border border-gray-800 rounded-2xl p-12 text-center my-8 max-w-lg mx-auto">
            <span className="text-4xl">🔍</span>
            <h3 className="text-lg font-bold text-white mt-3">
              No se encontraron videojuegos
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              No hay coincidencias para "{searchTerm}". Intenta con otro nombre.
            </p>
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm text-cyan-400 font-medium rounded-lg transition-colors cursor-pointer"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </main>

      <ListPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        list={list}
        onRemove={remove}
        onClear={clear}
      />
    </div>
  );
}