import * as React from "react";
import type { PageProps } from "gatsby";
import Hero from "../components/molecules/Hero";
import { ParallaxProvider } from "react-scroll-parallax";
import Footer from "../components/molecules/Footer";
import NavBar from "../components/molecules/NavBar";
import { email } from "../utilities/siteInfo";
import Seo from "../components/atoms/Seo";

const PrivacyPage: React.FC<PageProps> = () => {
  return (
    <ParallaxProvider>
      <NavBar />
      <Hero title={"Privacy Policy"} darker />
      <div className="mx-auto max-w-3xl px-4 py-12 text-gray-800">
        <h2 className="mb-6 text-3xl font-bold">Privacy Policy</h2>

        <p className="mb-4 text-sm text-gray-500">
          Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <section className="space-y-4">
          <p>
            Il presente sito web è un sito personale.
          </p>

          <h2 className="mt-6 text-xl font-semibold">
            Titolare del trattamento
          </h2>
          <p>
            Il titolare del trattamento dei dati è:
            <br />
            <strong>Letizia Puglisi</strong>
            <br />
            Email: <a className="text-blue-600 underline" href={`mailto:${email}`}>
              {email}
            </a>
          </p>

          <h2 className="mt-6 text-xl font-semibold">Dati trattati</h2>
          <p>
            Questo sito non raccoglie dati personali direttamente.
            Possono tuttavia essere trattati dati tecnici, come indirizzo IP
            anonimizzato, informazioni sul browser, dispositivo e pagine visitate.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Hosting</h2>
          <p>
            Il sito è ospitato su Vercel Inc., che può trattare dati tecnici
            necessari al funzionamento, alla sicurezza e alle prestazioni del sito.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Analytics</h2>
          <p>
            Il sito utilizza Vercel Analytics (piano gratuito), che non utilizza
            cookie, non effettua profilazione e raccoglie solo dati aggregati e
            anonimizzati. Non è richiesto alcun consenso ai cookie.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Base giuridica</h2>
          <p>
            Il trattamento dei dati si basa sul legittimo interesse del titolare
            (art. 6.1.f GDPR).
          </p>

          <h2 className="mt-6 text-xl font-semibold">Diritti dell’utente</h2>
          <p>
            L’utente può esercitare i diritti previsti dal GDPR contattando il
            titolare tramite email.
          </p>

          <h2 className="mt-6 text-xl font-semibold">Modifiche</h2>
          <p>
            La presente informativa può essere aggiornata in qualsiasi momento.
          </p>
        </section>
      </div>
      <Footer />
    </ParallaxProvider>
  );
};

export default PrivacyPage;

export const Head = () => {

  return (
    <Seo
      title={"Psicologia Letizia Puglisi - Privacy Policy"}
      pathname="/privacy"
      structuredData

    />
  );
};