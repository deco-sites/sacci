interface TechStackProps {
  technologies: string[];
  variant?: "grid" | "inline";
}

export default function TechStack({
  technologies,
  variant = "grid",
}: TechStackProps) {
  const baseClasses =
    "px-3 py-1 rounded-full text-sm font-medium transition-colors";
  const darkClasses =
    "bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700";

  if (variant === "inline") {
    return (
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className={`${baseClasses} ${darkClasses}`}
          >
            {tech}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className={`${baseClasses} ${darkClasses} text-center`}
        >
          {tech}
        </div>
      ))}
    </div>
  );
}
