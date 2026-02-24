import { useEffect, useState } from "react";
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
      <p
        className={`font-display ${active ? "text-primary" : "text-white/90"}`}
      >
        {label}
      </p>
    </div>
  );
}

type NavbarProps = React.ComponentProps<"nav">;

function Navbar({ className, ...props }: NavbarProps) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <nav
      className={`relative bg-primary-dark flex flex-col h-full md:border-r-[0.5px] border-white/15 ${className ?? ""}`.trim()}
      {...props}
    >
      <div className="fixed top-0 w-screen flex items-center justify-between border-b-[0.5px] border-white/15 bg-primary-dark/60 px-4 py-4 backdrop-blur-xl">
        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-lg p-2 hover:bg-white/10"
          type="button"
        >
          {open ? (
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
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
        <div className="z-50 w-3/4 md:w-1/3 lg:w-1/4 h-screen bg-primary-dark p-4 backdrop-blur-2xl border-r-[0.5px] border-green/15">
          <div className="flex items-center justify-between mb-18">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 p-1 rounded bg-primary text-background-dark" />
              <p className="font-display text-white font-bold text-2xl leading-none mr-5">
                FitTrack
              </p>
            </div>
            <X
              className=" cursor-pointer rounded-xl p-1 hover:bg-white/10 text-white size-8"
              onClick={handleClose}
            />
          </div>
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
            <span className="border-b-[0.5px] border-white/15 w-auto block mt-105 md:mt-150 lg:mt-115 lg:inline"></span>
          </div>
        </div>
      )}

      {/* Logo */}
      {/* <div className="hidden md:block">
        <div className="flex items-center gap-2 mb-10 ml-2 ">
          <Dumbbell className="w-8 h-8 p-1 rounded bg-primary text-background-dark" />
          <p className="font-display text-white font-bold text-2xl leading-none">
            FitTrack
          </p>
        </div> */}

      {/* Nav Items */}
      {/* <div className="flex-col gap-4 hidden md:block">
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
      </div> */}
    </nav>
  );
}

export default Navbar;
