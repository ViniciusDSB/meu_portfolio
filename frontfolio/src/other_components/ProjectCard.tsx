export type Project = {
  id: string;
  title: string;
  images: string[];
  tools: string[];
};

type ProjectCardProps = Project & {
  onClick?: () => void;
};

export default function ProjectCard({ id, title, images, tools, onClick }: ProjectCardProps) {
  return (
    <div
      id={id}
      onClick={onClick}
      className="
        group relative w-full min-h-50 overflow-hidden box-border
        transition-colors duration-100 
        border-3
        hover:border-white 
        cursor-pointer 
        shadow-lg shadow-black/50
      "
    >
      {/* background image */}
      <img
        src={images[0]}
        alt={title}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500 ease-out transform-gpu
        "
      />

      {/* dark readability gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/75 via-black/35 to-black/10
        "
      />

      {/* content */}
      <div className="project-content relative z-10 p-4 flex flex-col justify-end h-full">
        <h3 className="project-title text-white text-base md:text-lg font-semibold tracking-tight">
          {title}
        </h3>

        {/* tools */}
        <div className="project-tools mt-2 flex flex-wrap gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="
                px-2.5 py-0.5
                bg-white/10 backdrop-blur-md
                border border-white/10
                text-white text-xs
              "
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
