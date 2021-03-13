import React from 'react';
import {XView} from 'core';

const FlexView = ({
  children,
  style,
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  width,
  height,
  padding,
  paddingLeft,
  paddingRight,
  paddingTop,
  paddingBottom,
  margin,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  ...rest
}) => {
  const flexValue = flex || 1;
  const flexDirectionValue = flexDirection || 'column';
  const currentStyle = {...style};
  const newStyle = {
    flex: flexValue,
    flexDirection: flexDirectionValue,
    ...currentStyle,
  };
  const definitions = {
    justifyContent,
    alignItems,
    width,
    height,
    padding,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    margin,
    marginLeft,
    marginRight,
    marginTop,
    marginBottom,
  };

  //this block sets newStyle if any of fields in definitions is set
  Object.keys(definitions).forEach((d) => {
    if (definitions[d]) {
      newStyle[d] = definitions[d];
    }
  });

  return (
    <XView style={newStyle} {...rest}>
      {children}
    </XView>
  );
};

export default FlexView;
