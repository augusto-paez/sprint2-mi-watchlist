import ItemCard from './ItemCard';

export default function ItemList({ items, isInList, onToggle }) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-6">
            {items.map((item) => (
                <ItemCard
                    key={item.id}
                    item={item}
                    isInList={isInList ? isInList(item) : false}
                    onToggle={onToggle}
                />
            ))}
        </section>
    );
}