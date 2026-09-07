export default function ListPanel({ isOpen, onClose, list }) {
    // Renderizado condicional: si no está abierto, no renderiza nada en el DOM
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-md bg-[#141420] border-l border-gray-800 h-full p-6 flex flex-col justify-between shadow-2xl">
                <div>
                    <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            📋 Mi Lista Por Jugar ({list.length})
                        </h2>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Cerrar panel"
                            className="text-gray-400 hover:text-white text-2xl font-bold p-1 cursor-pointer"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="mt-6">
                        {list.length === 0 ? (
                            <p className="text-gray-400 text-center py-10">
                                Tu lista está vacía. ¡Agrega algunos juegos del catálogo!
                            </p>
                        ) : (
                            <ul className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
                                {list.map((item) => (
                                    <li
                                        key={item.id}
                                        className="flex justify-between items-center bg-[#1c1d2b] p-3 rounded-lg border border-gray-800"
                                    >
                                        <div>
                                            <h4 className="font-semibold text-sm text-white">{item.nombre}</h4>
                                            <span className="text-xs text-gray-400">{item.genero}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}