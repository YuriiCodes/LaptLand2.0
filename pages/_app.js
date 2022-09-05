import '../styles/globals.css';
import "bootstrap/dist/css/bootstrap.css";
import {Layout} from "../components/Layout";
import {Amplify} from "aws-amplify";
import config from "../src/aws-exports"

import {AmplifyProvider} from "@aws-amplify/ui-react";

Amplify.configure(config)

function MyApp({Component, pageProps}) {
  return (
      <AmplifyProvider>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </AmplifyProvider>
      )
}

export default MyApp
