import menuItems from "../data/menuData";
import MenuCard from "../components/MenuCard";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold mb-6"> Menu</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {menuItems.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}