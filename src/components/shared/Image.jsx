import { Image as StyledImg } from 'components/shared/styled/index.js';
import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Image({ height, ...props }) {
  const [imgHeight, setImgHeight] = useState(null);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'), {
    noSsr: true,
  });
  const pad = useMediaQuery(theme.breakpoints.between('sm', 'md'), {
    noSsr: true,
  });
  const smallLaptop = useMediaQuery(theme.breakpoints.between('md', 'lg'), {
    noSsr: true,
  });
  const laptop = useMediaQuery(theme.breakpoints.between('lg', 'xxl'), {
    noSsr: true,
  });
  const deskTop = useMediaQuery(theme.breakpoints.up('xxl'), {
    noSsr: true,
  });
  useEffect(() => {
    if (mobile) {
      setImgHeight(height[0]);
    }
    if (pad) {
      setImgHeight(height[1]);
    }
    if (smallLaptop) {
      setImgHeight(height[2]);
    }
    if (laptop) {
      setImgHeight(height[3]);
    }
    if (deskTop) {
      setImgHeight(height[4]);
    }
  }, [mobile, pad, smallLaptop, laptop, deskTop, height]);

  return imgHeight && <StyledImg height={imgHeight + 'px'} {...props} />;
}
