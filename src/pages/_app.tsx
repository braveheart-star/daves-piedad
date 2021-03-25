import { AppProps } from "next/app";
import { StoreProvider } from "easy-peasy";
import store from "../store";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <StoreProvider store={store}>
      <Component {...pageProps} />;
    </StoreProvider>
  );
}
