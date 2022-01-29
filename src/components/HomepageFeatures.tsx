import useBaseUrl from '@docusaurus/useBaseUrl';
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open and Supportive',
    image: '/img/undraw_air_support_re_nybl.svg',
    description: (
      <>
        IBTC-JS is designed to be open and transparent in its members dealing and every other general activities.
      </>
    ),
  },
  {
    title: 'Inclusion and Knowledge',
    image: '/img/undraw_connection_re_lcud.svg',
    description: (
      <>
        The community is inclusive without any discrimination for colours, background, tribe, religion or sex. However, as a community we take a keen interest in knowledge and openness to share them.
      </>
    ),
  },
  {
    title: 'Opportunities and Growth',
    image: '/img/undraw_gardening_eaf3.svg',
    description: (
      <>
        The community is a place that foster every member for growth and a pipeline of opportunities for all community members at large.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className='flex flex-col items-center lg:w-1/3'>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="font-bold text-xl">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="flex">
        <div className="flex flex-row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
