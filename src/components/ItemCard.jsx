export default function ItemCard({ item, isInList, onToggle }) {
    return (
        <article className="bg-[#161722] border border-gray-800 rounded-xl overflow-hidden shadow-lg flex flex-col justify-between hover:border-[var(--color-violet-accent)] transition-all duration-300">
            <div className="relative h-44 overflow-hidden bg-gray-900">
                <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm text-yellow-400 font-bold text-xs px-2.5 py-1 rounded-full border border-yellow-500/30">
                    ★ {item.puntaje}
                </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                    <span className="text-xs font-semibold text-[var(--color-cyan-accent)] uppercase tracking-wider">
                        {item.genero}
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 line-clamp-1">
                        {item.nombre}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1 mb-4">
                        🎮 {item.plataforma}
                    </p>
                </div>

                {/* Botón de Toggle */}
                <button
                    type="button"
                    onClick={() => onToggle && onToggle(item)}
                    className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer ${isInList
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 hover:bg-rose-500/30'
                            : 'bg-[var(--color-violet-accent)] text-white hover:opacity-90 shadow-md shadow-violet-900/30'
                        }`}
                >
                    {isInList ? '✓ En mi lista' : '+ Agregar a mi lista'}
                </button>
            </div>
        </article>
    );
}