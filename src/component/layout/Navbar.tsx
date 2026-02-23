import { useState } from "react";
import {
  Dumbbell,
  LayoutDashboard,
  CalendarDays,
  Settings,
  X,
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
      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer ${active ? "bg-primary/20" : "hover:bg-primary/20"} transition-colors`}
    >
      <Icon
        className={`w-6 h-6 ${active ? "text-primary" : "text-white/70"}`}
      />
      <p className={`font-display ${active ? "text-primary" : "text-white/90"}`}>
        {label}
      </p>
    </div>
  );
}

type NavbarProps = React.ComponentProps<"nav">;

function Navbar({ className, ...props }: NavbarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`relative bg-primary-dark p-6 flex flex-col h-full md:border-r-[0.5px] border-white/15 ${className ?? ""}`.trim()}
      {...props}
    >
      <div className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b-[0.5px] border-white/15 bg-primary-dark/60 px-4 py-3 backdrop-blur-xl md:hidden">
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 hover:bg-white/10"
          type="button"
        >
          {open ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          )}
        </button>
        <div className="flex items-center gap-2">
          <Dumbbell className="w-8 h-8 p-1 rounded bg-primary text-background-dark" />
          <p className="font-display text-white font-bold text-2xl leading-none">
            FitTrack
          </p>
        </div>
        <div className="w-10" />
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[68px] z-40 border-b-[0.5px] border-white/15 bg-primary-dark/95 p-4 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-2">
            <NavItem
              icon={LayoutDashboard}
              label="Dashboard"
              active={activeItem === "Dashboard"}
              onClick={() => {
                setActiveItem("Dashboard");
                setOpen(false);
              }}
            />
            <NavItem
              icon={ExerciseIcon}
              label="Workouts"
              active={activeItem === "Workouts"}
              onClick={() => {
                setActiveItem("Workouts");
                setOpen(false);
              }}
            />
            <NavItem
              icon={CalendarDays}
              label="Calendar"
              active={activeItem === "Calendar"}
              onClick={() => {
                setActiveItem("Calendar");
                setOpen(false);
              }}
            />
            <NavItem
              icon={Settings}
              label="Settings"
              active={activeItem === "Settings"}
              onClick={() => {
                setActiveItem("Settings");
                setOpen(false);
              }}
            />
          </div>
        </div>
      )}

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
