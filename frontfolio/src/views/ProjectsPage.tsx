import { projects } from "../content_data/Projects_info";
import ImageCarousel from "../other_components/ImageCarousel";

// Placeholder page: reuses the short description/image you already have in
// Project_info.tsx. Once you decide on the real design, this is the file to
// rework — the important part to keep is the `id={`project-${p.id}`}` on each
// section, since that's what "See more" on the featured card links to.
export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 lg:px-16 py-20">
      <h1 className="text-4xl font-bold mb-16">Projects</h1>

      <div className="flex flex-col gap-24">
        {projects.map((p) => (
          <section
            key={p.id}
            id={`project-${p.id}`}
            className="
              scroll-mt-20
              flex flex-col lg:flex-row gap-8
              border-t border-white/10 pt-10
            "
          >
            <ImageCarousel
              images={p.images}
              alt={p.title}
              className="w-full lg:w-1/2 h-96"
            />

            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">{p.title}</h2>

              <p className="text-white/70 mb-4">{p.long_description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tools.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-white/10 border border-white/10 text-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.repo ? (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm underline underline-offset-4 hover:text-white/80"
                >
                  Repository
                </a>
              ) : (
                <span className="text-sm text-white/40">
                  Repository: private or not uploaded
                </span>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
