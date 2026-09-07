import { useLocalStorage } from './useLocalStorage';

const WATCHLIST_KEY = 'despues-lo-juego:watchlist';

/**
 * Custom Hook específico para la gestión de "Mi Lista Por Jugar".
 * Expone: { list, total, isInList, toggle, remove, clear }
 */
export function useMisJuegos() {
    const [list, setList] = useLocalStorage(WATCHLIST_KEY, []);

    const total = list.length;

    const isInList = (item) => list.some((i) => i.id === item.id);

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
        try {
            window.localStorage.removeItem(WATCHLIST_KEY);
        } catch (error) {
            console.error('Error al remover de localStorage:', error);
        }
    };

    return {
        list,
        total,
        isInList,
        toggle,
        remove,
        clear,
    };
}