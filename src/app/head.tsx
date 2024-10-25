import React from 'react'

import { type CustomHeadProps } from '@/types/global'

export default function CustomHead ({ title, description }: CustomHeadProps): JSX.Element {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <link
        rel="icon"
        href="../../public/logo-site/favicon.ico"
        type="image/png"
      />
      <link rel="apple-touch-icon" sizes="180x180" href="../../public/logo-site/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="../../public/logo-site/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="../../public/logo-site/favicon-16x16.png" />
      <link rel="manifest" href="../../public/logo-site/site.webmanifest"></link>
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={'https://viddrop.com.br/tik-tok-video'} />
      <meta property="og:image" content="../../public/logo-branco.png" />
      <meta property="og:type" content="website" />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="../../public/logo-branco.png" />
      {/* Google Analytics
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS}`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${process.env.GOOGLE_ANALYTICS});
              `}
      </Script> */}
    </>
  )
}
