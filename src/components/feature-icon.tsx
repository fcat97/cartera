import {
  ArchiveRestore, ArrowLeftRight, BookOpen, CalendarDays,
  ChartNoAxesColumnIncreasing, ChartPie, Cloud, Coins, GitCompareArrows,
  Handshake, HardDrive, History, Languages, ListChecks, LockKeyhole,
  MessagesSquare, NotebookPen, ReceiptText, Scale, ScanLine, Search,
  Sparkles, Tags, Target, TextCursorInput, UserRoundCheck, Users, Wallet,
} from 'lucide-react';

const icons = {
  ArchiveRestore, ArrowLeftRight, BookOpen, CalendarDays,
  ChartNoAxesColumnIncreasing, ChartPie, Cloud, Coins, GitCompareArrows,
  Handshake, HardDrive, History, Languages, ListChecks, LockKeyhole,
  MessagesSquare, NotebookPen, ReceiptText, Scale, ScanLine, Search,
  Sparkles, Tags, Target, TextCursorInput, UserRoundCheck, Users, Wallet,
};

export function FeatureIcon({ name }: { name: string }) {
  const Icon = icons[name as keyof typeof icons];
  return <Icon size={26} strokeWidth={1.5} aria-hidden="true" />;
}
