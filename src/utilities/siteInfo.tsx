import React from 'react'
import Highlight from '../components/atoms/Highlight'
import { StaticImage } from "gatsby-plugin-image";


/* Buttons */
export const BookText = 'Prenota un appuntamento'
export const Navigation = {
  "": { name: "Home", link: true },
  // approccio: { name: "Il mio approccio", link: false },
  analisitransazionale: { name: "Analisi Transazionale", link: true },
  servizi: { name: "Servizi", link: true },
  contatti: { name: "Contatti", link: false }
}

/* SU DI ME */
export const AboutMeTitle = 'Su di me'
export const AboutMeText = <>
  Sono <Highlight>Specialista in Psicoterapia</Highlight> a indirizzo Analitico Transazionale.
  <br /><br />

  Ho conseguito la <Highlight>laurea</Highlight> magistrale in <Highlight>Psicologia Clinica</Highlight> con lode presso l'Università degli Studi di Padova e, dopo l'abilitazione alla professione, la <Highlight>Specializzazione in Psicoterapia</Highlight> col massimo dei voti presso la Scuola di Specializzazione PerFormat, affiliata alla European Association Transactional Analysis (EATA). Ho perfezionato la diagnostica clinica e strumentale avanzata con il <Highlight>Master</Highlight> di II livello in <Highlight>Psicodiagnostica Clinica, Forense e Medico-legale</Highlight> presso l’Università Sapienza di Roma.
  <br /><br />

  Nel corso della mia formazione universitaria e specialistica ho maturato significativa <Highlight>esperienza clinica</Highlight> presso i <Highlight>Servizi di Psicologia</Highlight>, occupandomi di valutazione e trattamento anche in contesti ad elevata complessità.
  <br /><br />

  Ho lavorato presso l’Ospedale ARNAS Garibaldi, prestando servizio di consulenza specialistica nel trattamento dell'obesità, dei disturbi alimentari e della gestione psicologica di patologie croniche. Parallelamente, ho preso parte a <Highlight>progetti di ricerca in Psicologia</Highlight>, coniugando la pratica clinica con l’interesse per la ricerca scientifica.
  <br /><br />

  La scelta di dedicarmi alla psicologia nasce da un interesse profondo per il funzionamento della mente e per i processi attraverso cui l’esperienza umana si struttura, si trasforma e talvolta entra in sofferenza. Sono diventata psicoterapeuta per mettere questa comprensione al servizio della cura, attraverso un lavoro capace di incidere positivamente sulla vita delle persone.
  <br /><br />

  Mi dedico alla pratica psicoterapeutica e alla psicodiagnostica clinica, occupandomi di <Highlight>prevenzione, diagnosi e terapia</Highlight>.
  <br /><br />

  Credo fortemente nella <Highlight>relazione terapeutica</Highlight> e baso quindi il mio lavoro sulla creazione di un <Highlight>clima di fiducia e di alleanza</Highlight>, mettendo la massima cura e dedizione per il benessere dei miei pazienti.
</>

/* SERVIZI */
export const ServicesTitle = 'Servizi'
export const ServicesInfo = [
  {
    title: "Visita psicologica e consultazione",
    description: <>
      La <Highlight>consultazione psicologica</Highlight> è il primo e fondamentale passo per affrontare un disagio emotivo, relazionale o personale.
      <br />
      Attraverso una o più visite, dedicate all’ascolto e alla raccolta della storia clinica, è possibile:
      <ul>
        <li> Esplorare pensieri, emozioni e comportamenti </li>
        <li> Chiarire la natura del problema e, se necessario, avere un primo inquadramento diagnostico</li>
        <li> Ricevere l’indicazione terapeutica più appropriata: l'avvio di un percorso di psicoterapia, un intervento circoscritto, oppure un invio ad altro specialista. </li>
      </ul>
      <br />
      La valutazione iniziale fornisce un'<Highlight>opportunità</Highlight> strutturata per fare <Highlight>chiarezza</Highlight> sulla propria situazione e delineare le <Highlight>possibili vie d'intervento</Highlight>.
      <br />
      Si svolge in un <Highlight>contesto clinico protetto e riservato</Highlight>, finalizzato alla definizione congiunta del percorso più idoneo per il tuo benessere.
    </>,
    image: (
      <StaticImage
        src="../images/firstvisit.jpg"
        alt="Visita psicologica e consultazione"
        placeholder="blurred"
        layout="constrained"
        quality={100}
        width={200}
        height={200}
        className="rounded-full"
      />
    ),
  },
  {
    title: "Diagnostica clinica",
    description: <>
      Lo Studio offre il servizio di <Highlight>diagnosi</Highlight> e <Highlight>valutazione psicologica</Highlight> con <Highlight>finalità cliniche o medico-legali</Highlight>.
      Utilizzo un approccio clinico e strumentale per un'analisi approfondita.<br /><br />
      <Highlight bigger h4>Cosa include il servizio?</Highlight><br />
      Il processo psicodiagnostico si articola in diverse fasi, che possono includere:
      <ul>
        <li><Highlight>Colloquio clinico:</Highlight> un'analisi dettagliata della storia clinica, dei sintomi attuali e dell'impatto sulla vita quotidiana.</li>
        <li><Highlight>Strumenti diagnostici:</Highlight> la somministrazione di test psicologici e psicometrici validati. Questi strumenti supportano la diagnosi differenziale e offrono una misurazione oggettiva di specifici aspetti del funzionamento psicologico. Gli accertamenti testologici, uniti al colloquio clinico, consentono di ottenere un quadro diagnostico più preciso e completo.</li>
        <li><Highlight>Refertazione:</Highlight> rilascio di relazioni cliniche con restituzione degli esiti.</li>
      </ul>
    </>,
    description2: <>
      <Highlight bigger h4>Aree di diagnosi e servizi offerti:</Highlight><br />
      A seconda delle specifiche esigenze, il servizio di valutazione e diagnosi include:
      <ul>
        <li><Highlight>Certificazioni di idoneità:</Highlight> rilascio di attestati di idoneità psicologica per specifici scopi (es. porto d'armi, scuola, ecc.).</li>
        <li><Highlight>Valutazione psicologica per interventi chirurgici:</Highlight> accertamento dell'idoneità psichica necessaria per l'accesso a interventi di chirurgia bariatrica e chirurgia plastica.</li>
        <li><Highlight>Valutazione della personalità:</Highlight> utilizzo di test specifici per esplorare e comprendere le caratteristiche della personalità.</li>
        <li><Highlight>Valutazione per diagnosi differenziale:</Highlight> individuazione e distinzione tra diversi quadri sintomatologici per una diagnosi accurata.</li>
        <li><Highlight>Valutazione del quoziente intellettivo (QI):</Highlight> somministrazione di test di livello per misurare le abilità cognitive.</li>
        <li><Highlight>Screening neuropsicologico:</Highlight> esame neuropsicologico per valutare la memoria, l'attenzione e altre funzioni cognitive, utili ad esempio in caso di sospetto deterioramento cognitivo.</li>
        <li><Highlight>Consulenza Tecnica di Parte (CTP):</Highlight> valutazione psicodiagnostica, in ambito civile e penale, per tutelare gli interessi della parte assistita nel contesto di procedimenti giudiziari, come la valutazione della <i>capacità di intendere e di volere</i>, la definizione delle <i>conseguenze psicologiche di eventi traumatici</i> o l'accertamento del <i>danno psichico</i> (danni esistenziali e biologici di natura psichica). La perizia viene generalmente rilasciata in collaborazione o su richiesta dell'Avvocato della parte.</li>
      </ul>
    </>,
    image: (
      <StaticImage
        src="../images/diagnostic.jpg"
        alt="Diagnostica clinica"
        placeholder="blurred"
        layout="constrained"
        quality={100}
        width={200}
        height={200}
        className="rounded-full"
      />
    ),
  },
  {
    title: "Psicoterapia",
    description: <>
      La mia pratica clinica, che include la <Highlight>psicoterapia individuale e di coppia</Highlight>, si rivolge ad <Highlight>adolescenti</Highlight>, <Highlight>giovani adulti</Highlight> e <Highlight>adulti</Highlight>.
      <br />
      L'approccio <Highlight>analitico transazionale</Highlight> consente di personalizzare l'intervento sulla base dei bisogni specifici di ciascuno e di impostare una terapia strutturata, in grado di intervenire sia sui <Highlight>sintomi</Highlight> che generano disagio, utilizzando tecniche cognitivo-comportamentali, sia sugli aspetti più profondi che ne sono la <Highlight>causa</Highlight>. L'obiettivo è duplice: il <Highlight>ripristino del benessere</Highlight> e la successiva individuazione e risoluzione dei conflitti interni che hanno originato il malessere, favorendo un cambiamento radicato.
      <br /><br />
      <Highlight bigger h4>Come funziona la psicoterapia?</Highlight><br />
      Per un piano di trattamento personalizzato, la fase iniziale prevede un'<Highlight>accurata valutazione</Highlight> del funzionamento psicologico e della storia clinica della persona (che può includere l'impiego di reattivi psicodiagnostici). Questo processo di indagine consente di chiarire insieme gli <Highlight>obiettivi</Highlight> e delineare il percorso più indicato.
      <br />
      Pur basando il mio intervento su linee guida ed <Highlight>evidenze consolidate</Highlight>, ogni <Highlight>percorso</Highlight> terapeutico è <Highlight>costruito su misura</Highlight> e tiene conto della storia, delle risorse e degli obiettivi individuali. La terapia è una collaborazione attiva tra paziente e terapeuta, basata su un'alleanza solida, dove tu sei partecipe del processo clinico.
      <br />
      Ritengo che la <Highlight>psicoterapia</Highlight> sia un'arte complessa che si nutre di due dimensioni essenziali: il rigore della <Highlight>scienza</Highlight> e la profondità della <Highlight>connessione umana</Highlight>.
      <br />
      Penso alla cura come all'incontro tra il metodo, che guida l'intervento, e la relazione terapeutica, che lo rende possibile, per accompagnarti a ritrovare <Highlight>consapevolezza</Highlight>, <Highlight>spontaneità</Highlight>, <Highlight>intimità</Highlight> e <Highlight>autonomia</Highlight>.
    </>,
    description2: <>
      <Highlight bigger h4>Disturbi trattati</Highlight><br />
      Le mie aree principali di intervento includono:
      <ul>
        <li>Ansia e attacchi di panico</li>
        <li>Disturbi psicosomatici</li>
        <li>Stress e gestione emotiva</li>
        <li>Depressione e difficoltà legate all'umore</li>
        <li>Disturbi alimentari</li>
        <li>Disturbi ossessivo-compulsivi</li>
        <li>Disturbi di personalità</li>
        <li>Difficoltà relazionali e familiari</li>
        <li>Lutto e disturbi correlati</li>
        <li>Difficoltà legate alla salute fisica (es. patologie croniche)</li>
      </ul>
    </>,
    image: (
      <StaticImage
        src="../images/psicotherapy.jpg"
        alt="Psicoterapia"
        placeholder="blurred"
        layout="constrained"
        quality={100}
        width={200}
        height={200}
        className="rounded-full"
      />
    ),
  },
].map(service => ({ ...service, id: service.title.replace(/\s+/g, '-').toLowerCase() }));

export type ServiceBlockProps = {
  title: string;
  description: JSX.Element;
  description2?: JSX.Element;
  image: JSX.Element;
  reversed?: boolean;
  id: string;
};

/* ANALISI TRANSAZIONALE */
export const TransAnalysisTitle = "Analisi Transazionale"
export const TransAnalysisBook = "Per fissare una prima visita o richiedere informazioni, contatta lo studio."
export const TransAnalysisInfo = [
  {
    title: "Cos'è l'Analisi Transazionale?",
    content: (
      <>
        L’<Highlight>Analisi Transazionale</Highlight> è un <Highlight>orientamento specialistico</Highlight> della psicoterapia che si concentra sulle <Highlight>dinamiche interpersonali</Highlight> e sul modo in cui queste influenzano il nostro benessere. Il termine “transazionale” deriva proprio dal fatto che in uno scambio comunicativo e relazionale, ciascuno riceve e dona qualcosa all’altro. La qualità della nostra vita, quindi, non dipende solo da noi, ma da ciò che abbiamo vissuto – e che viviamo oggi – in famiglia, nella coppia, nelle amicizie e sul lavoro.
      </>
    ),
  },
  {
    title: "Schemi e Giochi Psicologici",
    content: (
      <>
        La terapia analitico transazionale offre strumenti potenti e concreti per comprendere i meccanismi che generano i propri comportamenti. A volte, senza volerlo, si cade in <Highlight>giochi psicologici</Highlight>, ovvero <Highlight>schemi relazionali</Highlight> che continuano a ripetersi sempre nello stesso modo, portando a esiti insoddisfacenti. La terapia consente di riconoscere questi schemi e di riprendere il controllo, in modo più libero e consapevole.
      </>
    ),
  },
  {
    title: "Il Lavoro Terapeutico",
    content: (
      <>
        Sul ponte che si crea tra il mondo interno (o intrapsichico) e quello esterno si inserisce il lavoro terapeutico, che mira a comprendere il passato della persona e a ricostruire ciò che fa parte del suo presente.
      </>
    ),
  },
  {
    title: "Contrattualità e Obiettivi",
    content: (
      <>
        La metodologia terapeutica dell’Analisi Transazionale si fonda sulla <Highlight>contrattualità</Highlight>: la relazione terapeutica è vista come un accordo in cui specialista e paziente hanno una <Highlight>responsabilità congiunta</Highlight> nel raggiungere <Highlight>obiettivi di terapia chiari</Highlight>.
      </>
    ),
  },
  {
    title: "Un Approccio Flessibile",
    content: (
      <>
        Questo approccio terapeutico agisce, su tutti i domini del funzionamento psichico: cognitivo, comportamentale, affettivo e relazionale, adattandosi in maniera flessibile a seconda delle caratteristiche del paziente e del suo problema. Questo consente di effettuare una terapia mirata, finalizzata alla <Highlight>remissione dei sintomi</Highlight>, ma anche di curare gli aspetti più profondi e intrapsichici attraverso una <Highlight>ristrutturazione</Highlight> del proprio modo di <Highlight>sentire, agire e pensare</Highlight>.
      </>
    ),
  },
]

/* APPROCCIO */
export const ApproachTitle = 'Il mio approccio'
export const ApproachSteps = [
  <><Highlight>La persona al centro:</Highlight> accoglienza, attenzione e cura.</>,
  <><Highlight>Intervento clinico specialistico</Highlight> e personalizzato.</>,
  <><Highlight>Utilizzo di tecniche integrate</Highlight> per l'efficacia clinica.</>,
  <><Highlight>Promozione dell'autonomia</Highlight> e del cambiamento.</>,
]

/* CONTATTI */
export const ContactsTitle = 'Contatti'
export const ContactsName = 'Dott.ssa Letizia Puglisi'
export const ContactsJobTitle = 'Psicoterapeuta'
export const ContactsInfo1 = 'Ordine degli Psicologi n. 10702'
export const ContactsInfo2 = 'Partita IVA: 06074890879'
export const ContactsLocations = [
  {
    id: 'catania',
    addressLocality: 'Catania',
    streetAddress: 'Piazza Cavour, 14, Palazzo Porto Sollima',
    postalCode: '95125',
    addressCountry: 'IT',
    mapsUrl: 'https://maps.google.com/?q=Piazza+Cavour+14+Catania',
  },
  {
    id: 'viagrande',
    addressLocality: 'Viagrande',
    streetAddress: 'Via Umberto, 56, Studio multidisciplinare LOTUS',
    postalCode: '95029',
    addressCountry: 'IT',
    mapsUrl: 'https://maps.google.com/?q=Via+Umberto+56+Viagrande',
  },
  {
    id: 'online',
    addressLocality: 'Online',
  },
] as {
  id: string;
  addressLocality: string;
  streetAddress?: string;
  postalCode?: string;
  addressCountry?: string;
  mapsUrl?: string;
}[]

export const ContactsCopyrightText = 'Questo sito internet rispetta la linea guida nazionale del CNOP in materia di pubblicità sanitaria, secondo gli artt. 39-40 del Codice Deontologico degli Psicologi.'

export const phoneNumber = '+39 3475777357'
export const email = 'studiopsicologiapuglisi@gmail.com'

export const filteredNumber = phoneNumber.replace(/\D/g, '')