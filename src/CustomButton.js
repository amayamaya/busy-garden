import React from 'react';
import Button from '@mui/material/Button';
// import { useGradientButtonStyles } from '@mui-treasury/styles/button/gradient';
// import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';

const CustomButton = ({ variant, onClick, children }) => {
  //   const styles = useCustomButtonStyles();
  //   const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
  return (
    <div>
      <div>
        <Button variant={variant} onClick={onClick}>{children}</Button>
      </div>
    </div>
  );
};

export default CustomButton;
