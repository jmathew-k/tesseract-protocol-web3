import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
					<Html>
						<Head>
							<meta
								content='Decentralized Infrastructure for Digital Experiences'
								name='Tesseract XYZ'
							/>
							<meta
								content='Tesseract | Decentralized Infrastructure for Digital Experiences'
								property='og:title'
							/>
							<meta
								content='Tesseract | Decentralized Infrastructure for Digital Experiences'
								property='og:description'
							/>
							{/* <meta
                        content="%PUBLIC_URL%/fb-og-image.png"
                        property="og:image"
                    /> */}
							<meta property='og:url' content='https://tesseractxyz.com' />
							<meta
								property='og:site_name'
								content='Tesseract Blockchain Landing Page UI Design Kit'
							/>
							{/* <meta
                        content="Tesseract Blockchain Landing Page UI Design Kit"
                        property="twitter:title"
                    />
                    <meta
                        content="Epic landing page UI Design Kit for Blockchain, Crypto"
                        property="twitter:description"
                    />
                    <meta
                        content="%PUBLIC_URL%/twitter-card.png"
                        property="twitter:image"
                    />
                    <meta property="og:type" content="Article" />
                    <meta content="summary" name="twitter:card" />
                    <meta name="twitter:site" content="@tesseract_xyz" />
                    <meta name="twitter:creator" content="@tesseract_xyz" />
                    <meta property="fb:admins" content="132951670226590" /> */}
							<meta
								name='viewport'
								content='width=device-width, initial-scale=1'
							/>
							<meta name='theme-color' content='#000000' />
							<meta name='msapplication-TileColor' content='#da532c' />
							<meta name='theme-color' content='#ffffff' />
							<link
								href='https://fonts.googleapis.com/css2?family=Inter:wght@700;900&family=Karla:wght@400;500;800&display=swap'
								rel='stylesheet'
							/>
						</Head>
						<body className='app'>
							<Main />
							<NextScript />
						</body>
					</Html>
				)
    }
}

export default MyDocument;
