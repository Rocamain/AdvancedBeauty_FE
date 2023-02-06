import { useEffect } from 'react';

export default function Scroll({ children, hash }) {
  useEffect(() => {
    let mounted = true;
    let scroll;

    if (mounted) {
      mounted = false;

      scroll = setTimeout(() => {
        const section = hash.split('#')[1];

        const sectionToNavigate = document.getElementById(section);
        const headerHeight =
          document.getElementById('header').scrollHeight * 1.3;

        if (sectionToNavigate) {
          window.scrollTo({
            top: sectionToNavigate.offsetTop - headerHeight,
          });
        }
      }, 600);
    }

    return () => scroll && clearTimeout(scroll);
  });

  return children;
}
