import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    console.log('ScrollToTop triggered for route:', pathname);
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
