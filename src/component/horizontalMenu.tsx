import "../App.css";
type MenuItem = {
  name: string;
  link: string;
};

interface HorizontalMenuProps {
  items: MenuItem[];
}

function HorizontalMenu({ items }: HorizontalMenuProps) {
  return (
    <nav className="horizontal-menu flex space-x-6">
      {items.map((item) => (
        <a
          key={item.link}
          href={item.link}
          className="hover:text-[#F5207C] font-700 text-[#757575]  pb-4 border-b-2 border-transparent hover:border-[#F5207C] transition-colors duration-300"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}

export default HorizontalMenu;
