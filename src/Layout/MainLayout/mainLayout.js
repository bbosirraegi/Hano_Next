import NavBar from '@/components/NavBar/NavBar';
import Seo from '@/components/Seo';

export default function mainLayout({ children }) {
  return (
    <div>
      {/* <Seo title="test" /> */}
      <Seo />
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
