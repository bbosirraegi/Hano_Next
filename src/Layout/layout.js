import NavBar from '../components/NavBar/NavBar';
import Seo from '../components/Seo';

export default function Layout({ children }) {
  return (
    <div>
      <Seo title="Home" />
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
