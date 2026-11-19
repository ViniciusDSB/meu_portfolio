import { Link } from "react-router";

export type Project = {
  id: string;
  title: string;
  description: string;
  long_description?: string;
  images: string[];
  tools: string[];
  repo: string;
};

export default function FeaturedProject({ id, title, description, images, tools, repo }: Project) {
  return (
    <div
      id={id}
      className="
        group relative overflow-hidden box-border 
        transition-colors duration-300 
        hover:border-white/20 
        w-full h-full flex flex-col lg:flex-row overflow-hidden 
        shadow-lg shadow-black/100
      "
    >
      {/* background image */}
      <img
        src={images[0]}
        alt={title}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500 ease-out transform-gpu
          group-hover:scale-105
        "
      />

      {/* readability gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/75 via-black/40 to-black/10
        "
      />

      {/* repo button */}
        {repo ? (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="
              absolute top-4 left-4 z-20
              text-sm text-white font-medium
              px-4 py-1.5
              backdrop-blur-md
              border border-white/15
              hover:bg-white/20
              transition-colors
            "
          >
            See repository
          </a>
        ) : (
          <span
            className="
              absolute top-4 left-4 z-20
              text-sm text-white/60 font-medium
              px-4 py-1.5
              backdrop-blur-md
              border border-white/10
            "
          >
            Repository is private or not uploaded
          </span>
        )}

      {/* content */}
      <div className="relative z-10 p-5 flex flex-col justify-end h-full w-half">
        <h3 className="text-white text-lg md:text-xl font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-2 text-white/80 text-sm line-clamp-3">
          {description}
        </p>

        {/* tools */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tools.map((t) => (
            <span
              key={t}
              className="
                px-2.5 py-1
                bg-white/10 backdrop-blur-md
                border border-white/10
                text-white text-xs
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* see more -> jumps to this project's section on /projects */}
        <Link
          to={`/projects#project-${id}`}
          className="
            mt-4 w-fit
            text-sm text-white/90
            underline underline-offset-4
            hover:text-white
            transition-colors
          "
        >
          See more →
        </Link>
      </div>
    </div>
  );
}
