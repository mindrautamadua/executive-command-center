import {
  BarChart3,
  CalendarCheck,
  Database,
  GraduationCap,
  HeartHandshake,
  Network,
  Target,
  UserRoundSearch,
  Users,
  UsersRound,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export interface SdmMenuItem {
  label: string;
  icon: LucideIcon;
  href?: string;
}

export const SDM_MENU: SdmMenuItem[] = [
  { label: "Overview SDM", icon: UsersRound, href: "/sdm-talenta" },
  { label: "Talent Analytics", icon: Target, href: "/talent-analytics" },
  { label: "Organisasi & Jabatan", icon: Network, href: "/organisasi-jabatan" },
  { label: "Kinerja Karyawan", icon: BarChart3, href: "/kinerja-karyawan" },
  { label: "Rekrutmen", icon: UserRoundSearch, href: "/rekrutmen" },
  { label: "Learning & Development", icon: GraduationCap, href: "/learning-development" },
  { label: "Succession Planning", icon: Users, href: "/succession-planning" },
  { label: "Compensation & Benefits", icon: Wallet, href: "/compensation-benefits" },
  { label: "Employee Engagement", icon: HeartHandshake, href: "/employee-engagement" },
  { label: "Diversity & Inclusion", icon: UsersRound, href: "/diversity-inclusion" },
  { label: "Absensi & Kehadiran", icon: CalendarCheck, href: "/absensi-kehadiran" },
  { label: "Data & Analytics", icon: Database, href: "/data-analytics" },
];
