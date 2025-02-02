import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ページが変わるたびに画面をトップへ移動
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;