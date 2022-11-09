import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import '../styles.css';

function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider storageKey="preferred-theme" attribute="class">
			<DefaultSeo
				defaultTitle="Nytro Site"
				titleTemplate="%s | Nytro Site"
				description="An example Nytro-powered site."
			/>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default App;
