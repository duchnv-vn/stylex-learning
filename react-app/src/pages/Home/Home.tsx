/* eslint-disable @stylexjs/valid-styles */
import React, { useState } from 'react';
import {
  create,
  props,
  keyframes,
  firstThatWorks,
  StyleXStyles,
  StyleXStylesWithout,
} from '@stylexjs/stylex';
import { fadeInKeyFrame } from './keyframe.stylex';
import { colors, tokens } from '../../common/styles/tokens.stylex';
import { dracula } from '../../common/themes/theme_1';

interface Props {
  homeStyles: StyleXStyles<{
    backgroundColor: string;
    marginTop: 0 | 4 | 8 | 16;
  }>;
  titleStyles?: StyleXStylesWithout<{
    textAlign: unknown;
  }>;
}

export default function Home(homeProps: Props) {
  const [isActive, setIsActive] = useState(true);
  const [color, setColor] = useState('white');

  const fadeIn = keyframes(fadeInKeyFrame);

  const styles = create({
    homeSection: {
      backgroundColor: /* tokens.secondaryText */ 'yellow',
      color: 'white',
      height: '100vh',
    },
    h1Wrapper: {
      position: 'relative',
      height: '50px',
    },
    title: {
      animationName: fadeIn,
      animationDuration: '1s',
      position: firstThatWorks('sticky', '-webkit-sticky', 'fixed'),
      top: '15px',
      left: '200px',
    },
    button: (width: string, height: string, color: string | null = null) => ({
      width,
      height,
      cursor: 'pointer',
      backgroundColor: {
        default: 'lightblue',
        ':hover': 'blue',
        ':active': 'darkblue',
      },
      color: {
        default: color,
        ':hover': {
          default: null,
          '@media (hover: hover)': 'scale(1.5)',
        },
        ':active': 'scale(0.9)',
      },
    }),
    activeButton: {
      color: 'red',
    },
    input: {
      '::placeholder': {
        color: 'red',
      },
    },
    blog: {
      width: '200px',
      height: '300px',
      backgroundColor: 'white',
      color: 'black',
      borderColor: 'black',
      borderWidth: '1px',
      borderStyle: 'solid',
    },
    blogContainer: {
      display: 'grid',
      gridTemplateColumns: {
        '@media (min-width: 1025px)': 'auto auto auto auto',
        '@media (max-width: 1024px)': 'auto auto auto',
        '@media (max-width: 800px)': 'auto auto',
        '@media (max-width: 480px)': 'auto',
      },
    },
    /* container: {
      color: colors.primaryText,
      backgroundColor: colors.background,
    }, */
  });

  return (
    <div /* {...props(dracula, styles.container)} */>
      <section {...props(styles.homeSection, homeProps.homeStyles)}>
        <div {...props(styles.h1Wrapper)}>
          <span {...props(styles.title, homeProps.titleStyles)}>Home page</span>
        </div>
        <div className='basicStyles'>
          <input
            {...props(styles.input)}
            placeholder='Enter value here'
            onChange={(e) => setColor(e.target.value || 'yellow')}
          />
          <button
            {...props(styles.button('100px', '50px'))}
            onClick={() => setIsActive(!isActive)}
          >
            {String(isActive)}
          </button>
          <button
            {...props(
              styles.button('200px', '50px', color),
              isActive && styles.activeButton
            )}
          >
            Button
          </button>
        </div>
        <div className='mediaQuery' {...props(styles.blogContainer)}>
          <section {...props(styles.blog)}>Blog 1</section>
          <section {...props(styles.blog)}>Blog 2</section>
          <section {...props(styles.blog)}>Blog 3</section>
          <section {...props(styles.blog)}>Blog 4</section>
        </div>
      </section>
    </div>
  );
}
