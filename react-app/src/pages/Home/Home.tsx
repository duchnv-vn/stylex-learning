import React, { useState } from 'react';
import { create, keyframes, props, firstThatWorks } from '@stylexjs/stylex';

export default function Home() {
  const fadeIn = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  const styles = create({
    homeSection: {
      backgroundColor: 'gray',
      color: 'white',
      height: '100vh',
    },
    h1Wrapper: {
      position: 'relative',
      height: '50px',
    },
    title: {
      // eslint-disable-next-line @stylexjs/valid-styles
      animationName: fadeIn,
      animationDuration: '1s',
      // eslint-disable-next-line @stylexjs/valid-styles
      position: firstThatWorks('sticky', '-webkit-sticky', 'fixed'),
      top: '15px',
      left: '200px',
    },
    button: (width: string, height: string, color?: string) => ({
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
  });

  const [isActive, setIsActive] = useState(true);
  const [color, setColor] = useState('white');

  console.log('styles', styles);

  return (
    <section {...props(styles.homeSection)}>
      <div {...props(styles.h1Wrapper)}>
        <span {...props(styles.title)}>Home page</span>
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
  );
}
