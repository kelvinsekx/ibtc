import React, { useState } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

import HomepageFeatures from '../components/HomepageFeatures';
import SignUpForm from "../components/HomePageForm"
import {encode} from '../utils'


type IUser = string
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [userMail, setUserMail] = useState<IUser>('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e)=> {
    e.preventDefault();
    setUserMail('')
    const form = e.target
    fetch('/', {
      method: "POST",
      headers: {"Content-Type": 'application/x-www-form-urlencoded'},
      body: encode(
          {
          'form-name': form.getAttribute('name'),
          'email': userMail
          }
      )
  })
    .then(()=>setSubmitted(true))
    .catch(e=>console.log(e)) 
  }
  return (
    <header className={clsx('hero hero--primary flex flex-col items-center', styles.heroBanner)}>
      <div className="flex flex-col items-center">
        <h1 className="hero__title space-y-2">{siteConfig.title}</h1>
        <p className="hero__subtitle lg:w-2/3 space-y-2 text-base">{siteConfig.tagline}.</p>
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
