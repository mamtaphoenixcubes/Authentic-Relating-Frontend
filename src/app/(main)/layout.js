import MainLayoutShell from './MainLayoutShell';

export default function WithLayout({ children }) {
  return <MainLayoutShell>{children}</MainLayoutShell>;
}
