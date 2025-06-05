import React from "react";
import verify from "../assets/images/verify.svg";
interface ListWithIconProps {
  items: string[];
  icon?: React.ReactNode; // Optional: allow custom icon
}

const DefaultIcon = () => <img src={verify} alt="Verify" className="w-4 h-4" />;

const ListWithIcon: React.FC<ListWithIconProps> = ({ items, icon }) => (
  <ul className="space-y-3">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-center gap-2 text-black text-sm">
        <span>{icon || <DefaultIcon />}</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export default ListWithIcon;
