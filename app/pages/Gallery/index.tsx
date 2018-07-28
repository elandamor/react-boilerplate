/**
 * Gallery
 */

import React, { PureComponent, SFC } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
// Styles
import Wrapper from './styles';

const IMAGES = [
  { id: 0, title: 'Dark Orchid', color: 'DarkOrchid' },
  { id: 1, title: 'Lime Green', color: 'LimeGreen' },
  { id: 2, title: 'Tomato', color: 'Tomato' },
  { id: 3, title: 'Seven Ate Nine', color: '#789' },
  { id: 4, title: 'Crimson', color: 'Crimson' },
];

const Thumbnail = ({ color }) => (
  <div
    style={{
      width: 50,
      height: 50,
      background: color,
    }}
  />
);

const Image = ({ color }) => (
  <div
    style={{
      width: '100%',
      height: 400,
      background: color,
    }}
  />
);

export const Viewer: SFC<{ match: any }> = ({ match }) => {
  const image = IMAGES[parseInt(match.params.id, 10)];

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <Wrapper>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </Wrapper>
  );
};

class Gallery extends PureComponent<{}, {}> {
  protected wrapper: any;

  public render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Gallery</title>
        </Helmet>
        {IMAGES.map((i) => (
          <Link
            key={i.id}
            to={{
              pathname: `/img/${i.id}`,
              state: { modal: true },
            }}
          >
            <Thumbnail color={i.color} />
            <p>{i.title}</p>
          </Link>
        ))}
      </Wrapper>
    );
  }
}

export default Gallery;
