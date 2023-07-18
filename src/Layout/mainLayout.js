import NavBar from '../components/NavBar/NavBar';

export default function mainLayout({ children }) {
  return (
    <div>
      <NavBar />
      <div>{children}</div>
    </div>
  );
}
