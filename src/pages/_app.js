import mainLayout from '@/Layout/MainLayout/mainLayout';
import categoryLayout from '@/Layout/CategoryLayout/categoryLayout';
import NavBar from '@/components/NavBar/NavBar';

export default function App({ Component, pageProps }) {
  return 1 === 2 ? (
    <mainLayout>
      <Component {...pageProps} />
    </mainLayout>
  ) : (
    <categoryLayout>
      <Component {...pageProps} />
    </categoryLayout>
  );
}
