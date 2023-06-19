// import '@/styles/globals.css'
//
// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


import '@/styles/globals.css'

import Layout from "@/components/layout";
// import '../styles/styles.css'



export default function MyApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}
