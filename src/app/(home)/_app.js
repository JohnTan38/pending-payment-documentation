// _app.js
import './src/app/global.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="gradient-background">
      <Component {...pageProps} />
    </div>
  );
}


