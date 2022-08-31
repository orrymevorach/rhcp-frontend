import globalStyles from '@styles/global.module.scss';
// import '@styles/fonts.scss';
import RhcpLogo from '@components/rhco-logo/rhcp-logo';
import Rankings from '@components/rankings/rankings';
import SongCount from '@components/song-count/song-count';
import useWindowSize from '../hooks/useWindowSize';

export default function Home() {
  const { isDesktop } = useWindowSize();
  return (
    <main className={globalStyles.body}>
      <RhcpLogo />
      <div className={`${isDesktop && globalStyles.row}`}>
        <Rankings />
        <SongCount />
      </div>
    </main>
  );
}
