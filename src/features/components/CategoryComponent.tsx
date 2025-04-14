"use client";

interface ICategoryCard {
  img_url: string;
  name: string;
}

export function CategoryComponent({ img_url: icon, name }: ICategoryCard) {
  // const {getProductsByCategory, getProductsByCategoryData} =
  //   useGetProductsByCategory({ categoryId: 1, enabled: true });

  return (
    <div
      className="flex flex-col 
        hover:shadow-[var(--blue-shadow)] shadow-[var(--shadow)] border hover:border-(--border)
    justify-center items-center hover:cursor-pointer p-8 rounded-xl gap-4"
    >
      <img
        src={icon}
        className="text-[var(--button)] hover:text-[var(--buttonHover)]"
      />
      <p className="text-[var(--button)] hover:text-[var(--buttonHover)] text-2xl">
        {name}
      </p>
    </div>
  );
}
