"use client";

interface Category {
  id: string;
  label: string;
  count: number;
}

interface CategoryFilterProps {
  categories: Category[];
  active: string;
  onChange: (id: string) => void;
  accentColor: string;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
  accentColor,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const isActive = cat.id === active;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`
              inline-flex items-center gap-1.5 px-4 py-2 rounded-chip text-sm font-medium
              transition-all duration-200 cursor-pointer
              ${
                isActive
                  ? "text-white"
                  : "text-[#a3b8cc] hover:text-white bg-transparent hover:bg-white/5"
              }
            `}
            style={
              isActive
                ? { backgroundColor: `${accentColor}20`, color: accentColor }
                : undefined
            }
          >
            {cat.label}
            <span
              className={`text-xs ${isActive ? "opacity-70" : "opacity-40"}`}
            >
              {cat.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
