import React from 'react';
import Button from '@mui/material/Button';
// import { useGradientButtonStyles } from '@mui-treasury/styles/button/gradient';
// import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

export default function CustomButton({
  variant,
  onClick,
  children,
  coolColor = 'plum',
  coolBg = 'palegreen',
}) {
  //   const styles = useCustomButtonStyles();
  //   const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
  return (
    <Button variant={variant} onClick={onClick} sx={{ color: coolColor, background: coolBg }}>
      {children}
    </Button>
  );
}
