export default function SearchBar({ value, onChange }) {
    return (
        <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                🔍
            </div>
            <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Buscar por nombre (ej: Witcher, Elden)..."
                aria-label="Buscar juegos por nombre"
                className="w-full pl-10 pr-10 py-2.5 bg-[#161722] border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-cyan-accent)] focus:ring-1 focus:ring-[var(--color-cyan-accent)] transition-all text-sm"
            />
            {value && (
                <button
                    type="button"
                    onClick={() => onChange('')}
                    aria-label="Limpiar búsqueda"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white cursor-pointer text-sm"
                >
                    ✕
                </button>
            )}
        </div>
    );
}