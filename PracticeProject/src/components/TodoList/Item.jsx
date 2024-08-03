export default function Item({ item, onDeleteItem, toggleItem }) {
  return (
    <li className="flex items-center gap-4 bg-orange-300 rounded-sm p-2 pl-14">
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => toggleItem(item.id)}
        className="h-5 w-5 bg-red-700"
      />
      <span className={`${item.packed ? "line-through bg-red-700" : ""}`}>
        {item.quantity} {item.description}
      </span>
      <button
        className="text-red-600 text-xl font-bold"
        onClick={() => onDeleteItem(item.id)}
      >
        X
      </button>
    </li>
  );
}
