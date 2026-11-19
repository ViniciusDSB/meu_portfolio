// ---- Types ----

// Array to stack multiple levels later (Undergraduate, Graduate,
// Technician, Master, Doctor, ...) — joined into one line when rendered.
export interface Profile {
  name: string;
  titles: string[];
  location: string;
}

export interface ContactLink {
  label: string;
  url: string;
}

export interface DateStamp {
  month: string; // e.g. "March"
  year: number;
}

export interface Experience {
  place_name: string;
  description: string;
  start_date: DateStamp;
  end_date: DateStamp | false; // false = still ongoing ("Present")
}

// Education uses the exact same shape as Experience
export type Education = Experience;

// ---- Data ----

export const profile: Profile = {
  name: "Vinicius Boldan",
  titles: ["Computer Engineering Undergraduate"],
  location: "Mato Grosso do Sul, Brazil",
};

export const summary: string =
  "Computer Engineering undergraduate at UFMS. Currently involved in undergraduate research in Deep Learning and Neutron Imaging. I spent two years in Physics Engineering before switching to Computer Engineering.";

export const contacts: ContactLink[] = [
  { label: "GitHub", url: "https://github.com/ViniciusDSB" },
  { label: "Email", url: "mailto:boldan.vinicius@ufms.br" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/vinicius-boldan-734439260" },
];

export const skills: string[] = [
  "Programação",
  "Artificial Intelligence",
  "Web Developer",
];

export const experience: Experience[] = [
  {
    place_name: "IPEN",
    description:
      "Iniciação Científica — construção e validação de modelos de CNN (AlexNet, VGG16, U-Net) em Python/TensorFlow para um sistema híbrido de tomografia de nêutrons e PGNAA voltado ao mapeamento elementar.",
    start_date: { month: "March", year: 2025 },
    end_date: false,
  },
  {
    place_name: "Hackathon LivingLab — Semana da Física, UFMS",
    description:
      "Desenvolvimento de protótipo em equipe durante a Semana da Física da UFMS, em parceria com o LivingLab.",
    // Only "setembro/2025" was given, treated as a short single-month event
    start_date: { month: "September", year: 2025 },
    end_date: { month: "September", year: 2025 },
  },
  {
    place_name: "Oficina de Robótica — Disciplina Optativa, UFMS",
    description:
      "Desenvolvimento de oficina de robótica para alunos de escola estadual, como parte de disciplina optativa de robótica da graduação.",
    // "primeiro semestre de 2025" assumed as March-July; adjust if your
    // university's actual semester dates differ
    start_date: { month: "March", year: 2025 },
    end_date: { month: "July", year: 2025 },
  },
  {
    place_name: "Projeto para Empresa Júnior, UFMS",
    description:
      "Desenvolvimento de projeto em equipe como parte de processo seletivo de empresa júnior, com maior contato com Docker e Git; stack: Node, Vue e PostgreSQL.",
    start_date: { month: "July", year: 2024 },
    end_date: { month: "July", year: 2024 },
  },
  {
    place_name: "Hackathon — Semana da Física, UFMS",
    description:
      "Formação de equipe para participação em hackathon, apresentando projeto com Arduino para a Embrapa.",
    // Only "segundo semestre de 2023" was given, September used as a placeholder month
    start_date: { month: "September", year: 2023 },
    end_date: { month: "September", year: 2023 },
  },
];

export const education: Education[] = [
  {
    place_name: "Universidade Federal de Mato Grosso do Sul (UFMS)",
    description: "Bacharelado, Engenharia da Computação",
    start_date: { month: "March", year: 2024 },
    end_date: false,
  },
  {
    place_name: "Universidade Federal de Mato Grosso do Sul (UFMS)",
    description: "Bacharelado em Engenharia Física",
    start_date: { month: "March", year: 2022 },
    end_date: { month: "November", year: 2023 },
  },
  {
    // TODO: replace with the real school name — kept as a placeholder
    // since the source image had it blacked out
    place_name: "Escola Estadual Waldemir Barros da Silva",
    description: "Ensino médio integrado a curso técnico, Tecnologia da Informação",
    start_date: { month: "February", year: 2019 },
    end_date: { month: "December", year: 2021 },
  },
];

// ---- Helpers ----

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function monthIndex(month: string): number {
  const idx = MONTH_NAMES.findIndex(
    (m) => m.toLowerCase() === month.toLowerCase()
  );
  return idx === -1 ? 0 : idx;
}

// Computes "X years Y months" the same way LinkedIn does, using the current
// date for ongoing entries instead of a hardcoded string that goes stale.
export function formatDuration(start: DateStamp, end: DateStamp | false): string {
  const now = new Date();
  const startDate = new Date(start.year, monthIndex(start.month));
  const endDate = end ? new Date(end.year, monthIndex(end.month)) : now;

  let totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  if (totalMonths < 0) totalMonths = 0;

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years !== 1 ? "s" : ""}`);
  if (months > 0) parts.push(`${months} month${months !== 1 ? "s" : ""}`);
  if (parts.length === 0) parts.push("Less than a month");

  return parts.join(" ");
}

// e.g. "March 2022 - Present (4 years 5 months)"
export function formatRange(start: DateStamp, end: DateStamp | false): string {
  const endLabel = end ? `${end.month} ${end.year}` : "Present";
  return `${start.month} ${start.year} - ${endLabel} (${formatDuration(start, end)})`;
}
