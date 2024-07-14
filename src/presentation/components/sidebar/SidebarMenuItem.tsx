import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  to: string;
  description: string;
  icon: string;
}

export function SidebarMenuItem({ title, description, icon, to }: Props) {
  return (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        isActive
          ? 'flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors'
          : 'flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors'
      }
    >
      <i className={`${icon} text-2xl mr-4 text-indigo-400`}></i>
      <div className="flex flex-col flex-grow">
        <span className="text-lg text-white font-semibold">
          {title}
        </span>
        <span className="text-gray-400 text-sm">
          {description}
        </span>
      </div>
    </NavLink>
  )
}