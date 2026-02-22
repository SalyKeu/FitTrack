import { useState } from "react";
import {
  Dumbbell,
  LayoutDashboard,
  CalendarDays,
  Settings,
} from "lucide-react";
import ExerciseIcon from "../../assets/ExerciseIcon";

type IconComponent = React.ComponentType<{ className?: string }>;

function NavItem({
  icon: Icon,
  label,
  active = false,
  onClick,
}: {
  icon: IconComponent;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${active ? "bg-primary/20" : "hover:bg-primary/20 text-black"} transition-colors`}
    >
      <Icon
        className={`w-6 h-6 ${active ? "text-primary" : "text-gray-500"}`}
      />
      <p className={`font-display ${active ? "text-primary" : "text-white"}`}>
        {label}
      </p>
    </div>
  );
}
function Navbar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <nav className="relative bg-primary-dark p-6 flex flex-col h-full md:border-r-[0.5px] border-white/15 ">
      {/* Logo */}
      <div className="hidden md:block">
        <div className="flex items-center gap-2 mb-10 ml-2 ">
          <Dumbbell className="w-8 h-8 p-1 rounded bg-primary text-background-dark" />
          <p className="font-display text-white font-bold text-2xl leading-none">
            FitTrack
          </p>
        </div>
        {/* Nav Items */}
        <div className="flex-col gap-4 hidden md:block">
          <NavItem
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeItem === "Dashboard"}
            onClick={() => setActiveItem("Dashboard")}
          />
          <NavItem
            icon={ExerciseIcon}
            label="Workouts"
            active={activeItem === "Workouts"}
            onClick={() => setActiveItem("Workouts")}
          />
          <NavItem
            icon={CalendarDays}
            label="Calendar"
            active={activeItem === "Calendar"}
            onClick={() => setActiveItem("Calendar")}
          />
          <NavItem
            icon={Settings}
            label="Settings"
            active={activeItem === "Settings"}
            onClick={() => setActiveItem("Settings")}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
