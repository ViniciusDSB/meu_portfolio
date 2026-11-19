import { useRef, useState } from "react";
import {
  profile,
  summary,
  contacts,
  skills,
  experience,
  education,
  formatRange,
} from "../content_data/Resume_info";

// Plain hex equivalents of the Tailwind colors used on the page, for the
// printMode render only. html2canvas (used by html2pdf.js) can't parse
// oklch(), which is what Tailwind v4's color utility classes compile to -
// so the captured subtree sticks to inline hex/rgba instead of those classes.
const PRINT_COLORS = {
  sidebarBg: "#1e1b4b", // indigo-950
  sidebarLabel: "rgba(255,255,255,0.5)",
  sidebarText: "#ffffff",
  heading: "#171717", // neutral-900
  bodyText: "#404040", // neutral-700
  mutedText: "#a3a3a3", // neutral-400
  divider: "#e5e5e5", // neutral-200
  pageBg: "#ffffff",
};

// Shared markup for both the on-page (responsive, Tailwind-colored) resume
// and the hidden fixed-size version used for PDF capture. `printMode` swaps
// in tighter document sizing AND plain hex colors instead of Tailwind's
// color classes (see PRINT_COLORS above).
function ResumeContent({ printMode = false }: { printMode?: boolean }) {
  return (
    <div
      className={
        printMode
          ? "flex flex-row"
          : "flex flex-col lg:flex-row bg-white text-neutral-900 min-h-screen"
      }
      style={
        printMode
          ? { width: "210mm", minHeight: "297mm", backgroundColor: PRINT_COLORS.pageBg }
          : undefined
      }
    >
      {/* Sidebar */}
      <aside
        className={
          printMode
            ? "p-6 flex flex-col gap-8 shrink-0"
            : "w-full lg:w-80 shrink-0 bg-indigo-950 text-white p-8 flex flex-col gap-10"
        }
        style={
          printMode
            ? { width: "70mm", backgroundColor: PRINT_COLORS.sidebarBg, color: PRINT_COLORS.sidebarText }
            : undefined
        }
      >
        <div>
          <h2
            className={printMode ? "text-xs uppercase tracking-wide mb-2" : "text-sm uppercase tracking-wide text-white/50 mb-3"}
            style={printMode ? { color: PRINT_COLORS.sidebarLabel } : undefined}
          >
            Contact
          </h2>
          <ul className={printMode ? "flex flex-col gap-1.5 text-xs" : "flex flex-col gap-2 text-sm"}>
            {contacts.map((c) => (
              <li key={c.label}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline break-all"
                >
                  {c.url.startsWith("mailto:") ? c.url.replace("mailto:", "") : c.url}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            className={printMode ? "text-xs uppercase tracking-wide mb-2" : "text-sm uppercase tracking-wide text-white/50 mb-3"}
            style={printMode ? { color: PRINT_COLORS.sidebarLabel } : undefined}
          >
            Top Skills
          </h2>
          <ul className={printMode ? "flex flex-col gap-1 text-xs" : "flex flex-col gap-1.5 text-sm"}>
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main content */}
      <main
        className={printMode ? "flex-1 p-6" : "flex-1 p-8 lg:p-16 max-w-3xl"}
        style={printMode ? { width: "140mm", color: PRINT_COLORS.heading } : undefined}
      >
        <h1 className={printMode ? "text-2xl font-bold" : "text-4xl font-bold"}>
          {profile.name}
        </h1>
        <p
          className={printMode ? "text-sm mt-1" : "text-lg text-neutral-700 mt-1"}
          style={printMode ? { color: PRINT_COLORS.bodyText } : undefined}
        >
          {profile.titles.join(" · ")}
        </p>
        <p
          className={printMode ? "text-xs mt-1" : "text-neutral-400 mt-1"}
          style={printMode ? { color: PRINT_COLORS.mutedText } : undefined}
        >
          {profile.location}
        </p>

        <hr
          className={printMode ? "my-4" : "my-8 border-neutral-200"}
          style={printMode ? { borderColor: PRINT_COLORS.divider } : undefined}
        />

        <section style={printMode ? { breakInside: "avoid" } : undefined}>
          <h2 className={printMode ? "text-sm font-semibold mb-2" : "text-xl font-semibold mb-3"}>
            Summary
          </h2>
          <p
            className={printMode ? "text-xs leading-relaxed" : "text-neutral-700 leading-relaxed"}
            style={printMode ? { color: PRINT_COLORS.bodyText } : undefined}
          >
            {summary}
          </p>
        </section>

        <hr
          className={printMode ? "my-4" : "my-8 border-neutral-200"}
          style={printMode ? { borderColor: PRINT_COLORS.divider } : undefined}
        />

        <section>
          <h2 className={printMode ? "text-sm font-semibold mb-3" : "text-xl font-semibold mb-5"}>
            Experience
          </h2>
          <div className={printMode ? "flex flex-col gap-3" : "flex flex-col gap-6"}>
            {experience.map((item, i) => (
              <div key={i} style={printMode ? { breakInside: "avoid" } : undefined}>
                <h3 className={printMode ? "text-xs font-medium" : "font-medium"}>
                  {item.place_name}
                </h3>
                <p
                  className={printMode ? "text-xs" : "text-neutral-700"}
                  style={printMode ? { color: PRINT_COLORS.bodyText } : undefined}
                >
                  {item.description}
                </p>
                <p
                  className={printMode ? "text-[10px] mt-0.5" : "text-sm text-neutral-400 mt-0.5"}
                  style={printMode ? { color: PRINT_COLORS.mutedText } : undefined}
                >
                  {formatRange(item.start_date, item.end_date)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr
          className={printMode ? "my-4" : "my-8 border-neutral-200"}
          style={printMode ? { borderColor: PRINT_COLORS.divider } : undefined}
        />

        <section>
          <h2 className={printMode ? "text-sm font-semibold mb-3" : "text-xl font-semibold mb-5"}>
            Education
          </h2>
          <div className={printMode ? "flex flex-col gap-3" : "flex flex-col gap-6"}>
            {education.map((item, i) => (
              <div key={i} style={printMode ? { breakInside: "avoid" } : undefined}>
                <h3 className={printMode ? "text-xs font-medium" : "font-medium"}>
                  {item.place_name}
                </h3>
                <p
                  className={printMode ? "text-xs" : "text-neutral-700"}
                  style={printMode ? { color: PRINT_COLORS.bodyText } : undefined}
                >
                  {item.description}
                </p>
                <p
                  className={printMode ? "text-[10px] mt-0.5" : "text-sm text-neutral-400 mt-0.5"}
                  style={printMode ? { color: PRINT_COLORS.mutedText } : undefined}
                >
                  {formatRange(item.start_date, item.end_date)}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default function Resume() {
  const printRef = useRef<HTMLDivElement>(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!printRef.current) return;
    setDownloading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;
      await html2pdf()
        .set({
          margin: 0,
          filename: `${profile.name.replace(/\s+/g, "_")}_Resume.pdf`,
          image: { type: "jpeg", quality: 0.98 },
          html2canvas: { scale: 2, useCORS: true },
          jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
        })
        .from(printRef.current)
        .save();
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Visible, responsive resume people browsing the site see */}
      <ResumeContent />

      {/* Download button - only shown on the live page, not captured in the PDF */}
      <div  className="flex justify-center px-3 lg:px-16 py-3 bg-black">
        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="
            px-4 py-2 text-sm font-medium
            bg-white text-black
            hover:cursor-pointer transition-colors
            disabled:opacity-50
          "
        >
          {downloading ? "Generating PDF..." : "Download PDF"}
        </button>
      </div>

      {/* Hidden fixed-size A4 version, used only as the PDF capture source */}
      <div style={{ position: "absolute", top: 0, left: "-9999px" }} aria-hidden="true">
        <div ref={printRef}>
          <ResumeContent printMode />
        </div>
      </div>
    </div>
  );
}
