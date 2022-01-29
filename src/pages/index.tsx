import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import HomepageFeatures from '../components/HomepageFeatures';
import SignUpForm from "../components/HomePageForm"

type IUser = string
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [userMail, setUserMail] = useState<IUser>('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = ()=> {
    console.log(userMail)
    setUserMail('')
    return setSubmitted(true)
  }
  return (
    <header className={clsx('hero hero--primary flex flex-col items-center', styles.heroBanner)}>
      <div className="flex flex-col items-center">
        <h1 className="hero__title space-y-2">{siteConfig.title}</h1>
        <p className="hero__subtitle lg:w-2/3 space-y-2">{siteConfig.tagline}.</p>
        <SignUpForm onSubmit={onSubmit} setUserMail={setUserMail} ifSubmitted={submitted} userMail={userMail}/>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
