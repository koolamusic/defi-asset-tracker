/**
 * This Component will extend the Next/Head Element and also create props to setup SEO Functionality and other Dynamic
 * Head Meta Tags
 */

import Head from 'next/head'

const DocumentHead: React.FC<any> = ({ children }): JSX.Element => {
  return (
    <Head>
      <title>DeFi Asset | Portfolio Tracker</title>
      <meta name="" content="" />
      {/* ==== import the child nodes here === */}
      {children}
    </Head>
  )
}

export default DocumentHead
