import React from 'react';
import {Dimensions} from 'react-native';
import Svg, {G, Rect} from 'react-native-svg';

import {COLORS} from '../../constants';

const Divider = () => {
  const {width} = Dimensions.get('screen');
  const spacing = 16;

  const dashes = new Array(Math.floor(width / spacing)).fill(null);
  return (
    <Svg height="11" width="100%">
      <G>
        {dashes.map((_, index) => (
          <Rect
            key={index}
            x="11"
            y="10"
            width="10"
            height="1"
            fill={COLORS.primary}
            translateX={spacing * index}
          />
        ))}
      </G>
    </Svg>
  );
};

export default Divider;