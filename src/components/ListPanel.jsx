export default function ListPanel({ isOpen, onClose, list, onRemove, onClear }) {
    if (!isOpen) return null;

    const handleClear = () => {
        if (window.confirm('¿Estás seguro de que deseas vaciar toda tu lista por jugar?')) {
            onClear();
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm transition-opacity">
            <div className="w-full max-w-md bg-[#141420] border-l border-gray-800 h-full p-6 flex flex-col justify-between shadow-2xl animate-slide-in">

                <div>
                    <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-xl">📋</span>
                            <h2 className="text-xl font-bold text-white">
                                Mi Lista Por Jugar ({list.length})
                            </h2>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Cerrar panel"
                            className="text-gray-400 hover:text-white text-2xl font-bold p-1 cursor-pointer transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="mt-6">
                        {list.length === 0 ? (
                            <div className="text-center py-16 px-4 bg-[#161722]/50 border border-dashed border-gray-800 rounded-xl mt-4">
                                <span className="text-4xl block mb-2">🎮</span>
                                <p className="text-gray-300 font-medium">Tu lista está vacía</p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Agrega videojuegos desde el catálogo para armar tu backlog.
                                </p>
                            </div>
                        ) : (
                            <ul className="space-y-3 max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">
                                {list.map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex items-center justify-between bg-[#1c1d2b] p-3 rounded-xl border border-gray-800/80 hover:border-gray-700 transition-all gap-3"
                                    >
                                        <div className="flex items-center gap-3 overflow-hidden">
                                            <img
                                                src={item.imagen}
                                                alt={item.nombre}
                                                className="w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-gray-900"
                                            />
                                            <div className="min-w-0">
                                                <h4 className="font-semibold text-sm text-white truncate">
                                                    {item.nombre}
                                                </h4>
                                                <span className="text-xs text-[var(--color-cyan-accent)]">
                                                    {item.genero}
                                                </span>
                                            </div>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() => onRemove(item)}
                                            aria-label={`Quitar ${item.nombre} de mi lista`}
                                            className="px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg text-xs font-semibold transition-colors flex-shrink-0 cursor-pointer"
                                        >
                                            Quitar
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>


                {list.length > 0 && (
                    <div className="border-t border-gray-800 pt-4 mt-auto">
                        <button
                            type="button"
                            onClick={handleClear}
                            className="w-full py-2.5 px-4 bg-rose-900/20 hover:bg-rose-900/40 text-rose-400 border border-rose-800/50 rounded-xl font-semibold text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                        >
                            🗑️ Vaciar mi lista
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}