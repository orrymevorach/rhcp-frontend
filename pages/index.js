import Head from 'next/head';
import globalStyles from '@styles/global.module.scss';
import RhcpLogo from '@components/rhco-logo/rhcp-logo';
import Rankings from '@components/rankings/rankings';
import SongCount from '@components/song-count/song-count';
import useWindowSize from 'hooks/useWindowSize';
import Rules from 'components/rules/rules';

export default function Home() {
  const { isDesktop } = useWindowSize();
  return (
    <div>
      <Head>
        <title>RHCP Mock Draft</title>
        <link
          rel="icon"
          href="https://m.media-amazon.com/images/I/41VvATDmI3L._AC_SY450_.jpg"
        />
      </Head>
      <main className={globalStyles.body}>
        <RhcpLogo />
        <Rules />
        <div className={`${isDesktop && globalStyles.row}`}>
          <Rankings />
          <SongCount />
        </div>
      </main>
    </div>
  );
}
