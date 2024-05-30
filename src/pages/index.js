import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="Facturador Drago.pe">
      <main className="container padding--lg margin-top--lg">
        <div className="row">
          <div className="col col--6">
            <img
              width="300px"
              alt="facturador.drago.pe"
              src="img/logo-text.png"
            />
            <p className="subtitle">
              Ofrecemos servicios de emisión de facturas electrónicas y
              consultas rápidas de RUC, DNI y CE.
            </p>
            <div>
              <Link
                className="button button--primary button--lg"
                to="/docs/inicio"
              >
                Comenzar ahora
              </Link>
            </div>
          </div>
          <div className="col col--6">
            <img width="100%" alt="facturador.drago.pe" src="img/capture.png" />
          </div>
        </div>
      </main>
    </Layout>
  );
}
