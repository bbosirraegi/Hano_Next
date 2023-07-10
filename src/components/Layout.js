import NavBar from './NavBar/NavBar';
import Seo from './Seo';

export default function Layout({ children }) {
  return (
    <div>
      {/* <Seo title="test" /> */}
      <Seo />
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
