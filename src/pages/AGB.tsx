import { motion } from "framer-motion";
import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "@/seo/SEO";
import { routeMeta } from "@/seo/routes";

const AGB = () => {
  const meta = routeMeta["/agb"];
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SEO
        title={meta.title}
        description={meta.description}
        path="/agb"
        robots={meta.robots}
      />
      {/* Background - matching main site */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, hsl(220 20% 97%) 0%, hsl(220 25% 94%) 50%, hsl(220 20% 96%) 100%)',
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(220 15% 70%) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(220 15% 70%) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Organic blur shapes */}
        <div className="absolute inset-0 max-w-[1920px] mx-auto overflow-hidden">
          <div 
            className="absolute -top-1/4 -right-1/4 w-[60%] h-[60%]"
            style={{
              background: 'radial-gradient(ellipse at center, hsla(216, 100%, 70%, 0.12) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
            }}
          />
          <div 
            className="absolute bottom-0 -left-1/4 w-[50%] h-[50%]"
            style={{
              background: 'radial-gradient(ellipse at center, hsla(216, 100%, 70%, 0.08) 0%, transparent 65%)',
              borderRadius: '50%',
              filter: 'blur(80px)',
            }}
          />
        </div>
      </div>

      <div className="container relative mx-auto px-6 lg:px-8 py-12 lg:py-20">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Zurück zur Startseite
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6">
            <FileText className="h-4 w-4 text-primary fill-primary" />
            <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wider">
              Rechtliches
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Allgemeine Geschäftsbedingungen
          </h1>
          
          <p className="text-muted-foreground">
            Stand: 11. April 2026
          </p>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div
            className="relative rounded-3xl p-8 lg:p-12 overflow-hidden"
            style={{
              background: "linear-gradient(145deg, hsl(var(--card) / 0.22) 0%, hsl(var(--card) / 0.08) 50%, hsl(var(--card) / 0.16) 100%)",
              backdropFilter: "blur(40px) saturate(180%)",
              WebkitBackdropFilter: "blur(40px) saturate(180%)",
              border: "1.5px solid hsl(var(--card) / 0.50)",
              boxShadow: `
                0 24px 64px hsl(var(--foreground) / 0.12),
                0 8px 24px hsl(var(--foreground) / 0.08),
                0 0 0 1px hsl(var(--card) / 0.3),
                inset 0 1px 0 hsl(var(--card) / 0.9),
                inset 0 -1px 0 hsl(var(--foreground) / 0.08)
              `,
            }}
          >
            {/* Top edge highlight */}
            <div
              className="absolute top-0 left-0 right-0 z-20 h-[2px]"
              style={{
                background: "linear-gradient(90deg, transparent 5%, hsl(var(--card) / 0.8) 30%, hsl(var(--card) / 1) 50%, hsl(var(--card) / 0.8) 70%, transparent 95%)",
              }}
            />

            <div className="relative z-10 space-y-10">
              {/* Intro */}
              <section>
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">der Spalevic Consulting Kft.</strong><br />
                  für die Nutzung der Angebote der KI-Schule (ki-hochschule.de)
                </p>
              </section>

              {/* § 1 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 1 Geltungsbereich und Vertragspartner</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für sämtliche Verträge, die zwischen der</p>
                  <div className="pl-4 border-l-2 border-primary/20">
                    <p className="font-semibold text-foreground">Spalevic Consulting Kft.</p>
                    <p>1147 Budapest, Locsei ut 9/A, Ungarn</p>
                    <p>Handelsregisternummer: 01-09-446084</p>
                    <p>Steuernummer: 32852954-2-42</p>
                    <p>USt-IdNr.: HU32852954</p>
                    <p>E-Mail: info@aleksa.ai</p>
                    <p>Website: ki-hochschule.de</p>
                  </div>
                  <p>(nachfolgend "Anbieter", "wir" oder "KI-Schule") und ihren Kundinnen und Kunden (nachfolgend "Kunde" oder "Teilnehmer") über die auf der Website ki-hochschule.de oder im Rahmen individueller Angebote angebotenen Leistungen geschlossen werden.</p>
                  <p>(2) Die Leistungen des Anbieters richten sich sowohl an Unternehmer im Sinne des § 14 BGB bzw. vergleichbarer Regelungen des ungarischen Rechts (B2B) als auch an Verbraucher im Sinne des § 13 BGB (B2C). Ein Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Ein Unternehmer ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.</p>
                  <p>(3) Abweichende, entgegenstehende oder ergänzende Geschäftsbedingungen des Kunden werden nur dann und insoweit Vertragsbestandteil, als der Anbieter ihrer Geltung ausdrücklich schriftlich zugestimmt hat.</p>
                  <p>(4) Es gilt jeweils die zum Zeitpunkt des Vertragsschlusses gültige Fassung dieser AGB.</p>
                </div>
              </section>

              {/* § 2 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 2 Leistungsgegenstand</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Die KI-Schule bietet verschiedene Bildungs-, Coaching- und Beratungsleistungen rund um den Einsatz Künstlicher Intelligenz (KI) an. Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen individuellen Angebot des Anbieters, der Leistungsbeschreibung auf der Website oder aus einem separat geschlossenen Coaching- bzw. Beratungsvertrag.</p>
                  <p>(2) Die Leistungen umfassen je nach vereinbartem Programm unter anderem:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>persönliche 1:1-Coaching-Calls (online),</li>
                    <li>Zugang zur privaten Community der KI-Schule inklusive Chat, Feed, Events und Aufzeichnungen,</li>
                    <li>Teilnahme an Live-Calls und Frage-Antwort-Runden,</li>
                    <li>Zugriff auf digitale Kurse, Videos, Masterclasses und Schulungsmaterialien,</li>
                    <li>Templates, Blueprints, Präsentationen und sonstige Arbeitsmaterialien,</li>
                    <li>fachlichen Support über Community-Chat oder Messenger-Dienste innerhalb der üblichen Geschäftszeiten,</li>
                    <li>optional: Zertifizierung nach erfolgreichem Abschluss bestimmter Kurse und Projekte.</li>
                  </ul>
                  <p>(3) Der exakte Umfang der gebuchten Leistungen, die Laufzeit und die Vergütung werden im individuellen Angebot des Anbieters geregelt. Das Angebot ist Bestandteil des Vertrags und geht im Zweifel diesen AGB vor, soweit keine zwingenden gesetzlichen Regelungen entgegenstehen.</p>
                  <p>(4) Der Anbieter ist berechtigt, die Form und den Ablauf der Leistungserbringung (insbesondere Termine, Inhalte, eingesetzte Tools, Plattformen und Referenten) im Rahmen des Zumutbaren anzupassen, soweit dies den vereinbarten Leistungszweck nicht wesentlich beeinträchtigt.</p>
                  <p>(5) Der Anbieter schuldet eine sorgfältige Leistungserbringung im Rahmen eines Dienstvertrags. Ein bestimmter wirtschaftlicher Erfolg (etwa das Erreichen bestimmter Umsätze, Kundenzahlen oder Geschäftserfolge des Kunden) ist ausdrücklich nicht geschuldet.</p>
                </div>
              </section>

              {/* § 3 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 3 Zustandekommen des Vertrags</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Die Darstellung der Leistungen auf der Website ki-hochschule.de oder in Social-Media-Beiträgen stellt noch kein rechtlich bindendes Angebot des Anbieters dar, sondern eine unverbindliche Aufforderung an den Kunden, seinerseits ein Angebot abzugeben.</p>
                  <p>(2) Individuelle schriftliche Angebote (beispielsweise als PDF-Dokument) des Anbieters an den Kunden sind rechtlich bindende Angebote im Sinne des § 145 BGB. Sie sind, sofern nicht anders angegeben, bis zu dem im Angebot genannten "Gültig bis"-Datum annehmbar.</p>
                  <p>(3) Der Vertrag kommt zustande, indem der Kunde das individuelle Angebot innerhalb der Annahmefrist annimmt. Die Annahme kann schriftlich per E-Mail, durch elektronische Signatur (eIDAS), durch Bezahlung der ersten Rate oder durch eine andere ausdrückliche Willenserklärung erfolgen.</p>
                  <p>(4) Bei Buchungen direkt über die Website ki-hochschule.de oder ein dort verlinktes Bestell-System kommt der Vertrag mit dem erfolgreichen Abschluss des Bezahlvorgangs und der anschließenden Bestätigung durch den Anbieter zustande.</p>
                  <p>(5) Eine elektronische Signatur gemäß der Verordnung (EU) Nr. 910/2014 (eIDAS-Verordnung) ist rechtlich der handschriftlichen Unterschrift gleichgestellt und erfüllt die gesetzlichen Anforderungen an die Schriftform innerhalb der Europäischen Union.</p>
                </div>
              </section>

              {/* § 4 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 4 Preise, Umsatzsteuer und Reverse-Charge-Verfahren</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Alle vom Anbieter angegebenen Preise verstehen sich, sofern nicht ausdrücklich anders ausgewiesen, als Nettobeträge zuzüglich der jeweils gesetzlich geschuldeten Umsatzsteuer.</p>
                  <p>(2) <strong className="text-foreground">Kunden mit gültiger Umsatzsteuer-Identifikationsnummer (B2B):</strong> Ist der Kunde Unternehmer mit Sitz innerhalb der Europäischen Union und verfügt er über eine gültige Umsatzsteuer-Identifikationsnummer (USt-IdNr.), erfolgt die Rechnungsstellung ohne Umsatzsteuer im sogenannten Reverse-Charge-Verfahren gemäß Art. 196 der Richtlinie 2006/112/EG (Mehrwertsteuer-Systemrichtlinie). Die Steuerschuld geht in diesem Fall auf den Leistungsempfänger über. Der Kunde ist verpflichtet, seine gültige USt-IdNr. vor Vertragsschluss anzugeben und deren Gültigkeit für die gesamte Vertragslaufzeit sicherzustellen.</p>
                  <p>(3) <strong className="text-foreground">Kunden ohne gültige Umsatzsteuer-Identifikationsnummer (insbesondere Verbraucher und Kleinunternehmer):</strong> Da der Anbieter in Ungarn ansässig ist, unterliegen Leistungen an Kunden ohne gültige USt-IdNr. der ungarischen Umsatzsteuer in Höhe von derzeit <strong className="text-foreground">27 %</strong>. Diese Umsatzsteuer wird zusätzlich zum im Angebot genannten Nettopreis erhoben und auf der Rechnung gesondert ausgewiesen.</p>
                  <p>(4) Sollten sich steuerliche Rahmenbedingungen (Umsatzsteuersätze, OSS-Regelungen, Leistungsortregeln) während der Vertragslaufzeit ändern, ist der Anbieter berechtigt, die Bruttopreise entsprechend anzupassen.</p>
                  <p>(5) Etwaige Bankgebühren, Transaktionskosten oder Wechselkursgebühren, die bei der Zahlung anfallen, trägt der Kunde.</p>
                </div>
              </section>

              {/* § 5 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 5 Zahlungsbedingungen</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Die Zahlung erfolgt grundsätzlich per Kreditkarte oder Debitkarte über den Zahlungsdienstleister Stripe. Der Kunde akzeptiert die jeweils geltenden Nutzungsbedingungen und Datenschutzbestimmungen von Stripe (verfügbar unter stripe.com).</p>
                  <p>(2) Zahlungsfällig sind die im Angebot genannten Beträge zu den dort festgelegten Zeitpunkten. Wird im Angebot ein Ratenzahlungsplan vereinbart, sind die einzelnen Raten zu den dort festgelegten Fälligkeitsterminen ohne weitere Aufforderung zu entrichten.</p>
                  <p>(3) Der Anbieter ist berechtigt, die weitere Leistungserbringung einschließlich des Zugangs zu Community, Kursen und Materialien auszusetzen, solange der Kunde mit einer fälligen Zahlung in Verzug ist. Bereits gewährte Zugänge können für die Dauer des Zahlungsverzugs gesperrt werden.</p>
                  <p>(4) Bei Zahlungsverzug ist der Anbieter berechtigt, Verzugszinsen in gesetzlicher Höhe sowie angemessene Mahngebühren geltend zu machen. Gegenüber Verbrauchern gelten die gesetzlichen Regelungen des anwendbaren Rechts.</p>
                  <p>(5) Eine Aufrechnung mit Gegenforderungen des Kunden ist nur zulässig, wenn diese Gegenforderungen rechtskräftig festgestellt, unbestritten oder vom Anbieter anerkannt sind. Ein Zurückbehaltungsrecht des Kunden setzt voraus, dass der Gegenanspruch aus demselben Vertragsverhältnis stammt.</p>
                </div>
              </section>

              {/* § 6 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 6 Laufzeit und Kündigung</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Die Laufzeit des jeweiligen Programms ergibt sich aus dem individuellen Angebot. Typische Laufzeiten betragen je nach gewähltem Modell zwischen drei und zwölf Monaten.</p>
                  <p>(2) Nach Ablauf der ursprünglich vereinbarten Laufzeit kann der Vertrag einvernehmlich um weitere, im Angebot oder in einer Verlängerungsvereinbarung zu definierende Zeiträume verlängert werden. Eine automatische Vertragsverlängerung erfolgt nicht, es sei denn, dies wurde im individuellen Angebot ausdrücklich vereinbart und den Regelungen des § 309 Nr. 9 BGB entsprochen.</p>
                  <p>(3) Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt für beide Vertragsparteien unberührt. Ein wichtiger Grund liegt insbesondere dann vor, wenn eine Partei gegen wesentliche Pflichten des Vertrags verstößt und diesen Verstoß trotz Abmahnung nicht innerhalb einer angemessenen Frist beseitigt.</p>
                  <p>(4) Der Anbieter ist zur außerordentlichen Kündigung insbesondere dann berechtigt, wenn der Kunde:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>trotz Mahnung mit der Zahlung einer Rate länger als 14 Tage in Verzug ist,</li>
                    <li>gegen die Regeln der Community (§ 9) wiederholt oder erheblich verstößt,</li>
                    <li>bereitgestellte Inhalte oder Zugangsdaten unberechtigt weitergibt oder veröffentlicht,</li>
                    <li>falsche Angaben zu seiner Unternehmer- oder Verbrauchereigenschaft macht.</li>
                  </ul>
                  <p>(5) Kündigungen bedürfen der Textform (E-Mail genügt).</p>
                  <p>(6) Im Fall einer wirksamen außerordentlichen Kündigung durch den Anbieter aus einem vom Kunden zu vertretenden Grund bleibt der Anspruch auf die vertraglich vereinbarte Vergütung bestehen, soweit dies nach dem anwendbaren Recht zulässig ist. Bereits gezahlte Beträge werden in diesem Fall nicht erstattet.</p>
                </div>
              </section>

              {/* § 7 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 7 Widerrufsrecht für Verbraucher</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) <strong className="text-foreground">Widerrufsbelehrung</strong></p>
                  <p>Verbrauchern steht bei Fernabsatzverträgen grundsätzlich ein gesetzliches Widerrufsrecht zu. Ein Verbraucher ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können.</p>
                  <p><strong className="text-foreground">Widerrufsrecht</strong></p>
                  <p>Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.</p>
                  <p>Um Ihr Widerrufsrecht auszuüben, müssen Sie uns</p>
                  <div className="pl-4 border-l-2 border-primary/20">
                    <p>Spalevic Consulting Kft.</p>
                    <p>1147 Budapest, Locsei ut 9/A, Ungarn</p>
                    <p>E-Mail: info@aleksa.ai</p>
                  </div>
                  <p>mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür das Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben ist.</p>
                  <p>Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.</p>
                  <p><strong className="text-foreground">Folgen des Widerrufs</strong></p>
                  <p>Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser Rückzahlung Entgelte berechnet.</p>
                  <p>Haben Sie verlangt, dass die Dienstleistungen während der Widerrufsfrist beginnen sollen, so haben Sie uns einen angemessenen Betrag zu zahlen, der dem Anteil der bis zu dem Zeitpunkt, zu dem Sie uns von der Ausübung des Widerrufsrechts hinsichtlich dieses Vertrags unterrichten, bereits erbrachten Dienstleistungen im Vergleich zum Gesamtumfang der im Vertrag vorgesehenen Dienstleistungen entspricht.</p>

                  <p>(2) <strong className="text-foreground">Vorzeitiges Erlöschen des Widerrufsrechts bei digitalen Inhalten</strong></p>
                  <p>Das Widerrufsrecht erlischt bei einem Vertrag zur Lieferung von nicht auf einem körperlichen Datenträger befindlichen digitalen Inhalten (z. B. Videokurse, Masterclasses, Aufzeichnungen, Templates, Blueprints zum Download), wenn der Anbieter mit der Ausführung des Vertrags begonnen hat, nachdem der Kunde:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>ausdrücklich zugestimmt hat, dass der Anbieter mit der Ausführung des Vertrags vor Ablauf der Widerrufsfrist beginnt, und</li>
                    <li>seine Kenntnis davon bestätigt hat, dass er durch diese Zustimmung mit Beginn der Ausführung sein Widerrufsrecht verliert.</li>
                  </ul>
                  <p>Diese Zustimmung wird im Bestell- bzw. Buchungsprozess ausdrücklich abgefragt.</p>

                  <p>(3) <strong className="text-foreground">Vorzeitiges Erlöschen des Widerrufsrechts bei vollständig erbrachten Dienstleistungen</strong></p>
                  <p>Bei Dienstleistungsverträgen (insbesondere Live-Coaching-Calls) erlischt das Widerrufsrecht, wenn der Anbieter die Dienstleistung vollständig erbracht hat und mit der Ausführung der Dienstleistung erst begonnen hat, nachdem der Kunde dazu seine ausdrückliche Zustimmung gegeben und gleichzeitig seine Kenntnis davon bestätigt hat, dass er sein Widerrufsrecht bei vollständiger Vertragserfüllung verliert.</p>

                  <p>(4) <strong className="text-foreground">Muster-Widerrufsformular</strong></p>
                  <p>(Wenn Sie den Vertrag widerrufen wollen, dann füllen Sie bitte dieses Formular aus und senden Sie es zurück.)</p>
                  <div className="pl-4 border-l-2 border-primary/20 space-y-2">
                    <p>An: Spalevic Consulting Kft., 1147 Budapest, Locsei ut 9/A, Ungarn, info@aleksa.ai</p>
                    <p>Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*):</p>
                    <p>Bestellt am (*) / erhalten am (*):</p>
                    <p>Name des/der Verbraucher(s):</p>
                    <p>Anschrift des/der Verbraucher(s):</p>
                    <p>Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier):</p>
                    <p>Datum:</p>
                    <p className="text-xs">(*) Unzutreffendes streichen.</p>
                  </div>
                </div>
              </section>

              {/* § 8 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 8 Mitwirkungspflichten des Kunden</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Der Kunde verpflichtet sich, alle für die Leistungserbringung erforderlichen Mitwirkungshandlungen rechtzeitig, vollständig und in geeigneter Form zu erbringen. Dies umfasst insbesondere:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>die pünktliche Teilnahme an vereinbarten Coaching-Calls und Live-Terminen,</li>
                    <li>die rechtzeitige Bereitstellung aller für die Beratung erforderlichen Informationen, Unterlagen und Zugangsdaten,</li>
                    <li>die Einhaltung der Community-Regeln,</li>
                    <li>die Bezahlung der vereinbarten Vergütung zu den vereinbarten Terminen.</li>
                  </ul>
                  <p>(2) Kommt der Kunde seinen Mitwirkungspflichten nicht nach, ist der Anbieter zur Erbringung der vereinbarten Leistungen insoweit nicht verpflichtet. Versäumte Termine können nicht nachgeholt werden und gelten als erbracht, soweit der Anbieter die Leistung zum vereinbarten Zeitpunkt erbringungsbereit vorgehalten hat.</p>
                  <p>(3) Die Zugangsdaten zur Community, zu digitalen Kursen und sonstigen geschützten Bereichen sind persönlich und dürfen nicht an Dritte weitergegeben werden. Ein Verstoß gegen diese Pflicht berechtigt den Anbieter zur sofortigen Sperrung des Zugangs und zur außerordentlichen Kündigung.</p>
                </div>
              </section>

              {/* § 9 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 9 Community-Regeln und Verhaltenspflichten</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Die private Community der KI-Schule ist ein Ort des gegenseitigen Austauschs und des respektvollen Miteinanders. Jeder Teilnehmer verpflichtet sich, in der Community:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>andere Mitglieder respektvoll zu behandeln und keine diskriminierenden, beleidigenden oder rechtswidrigen Inhalte zu posten,</li>
                    <li>keine fremden Inhalte (Bilder, Videos, Texte) ohne ausreichende Rechte zu teilen,</li>
                    <li>keine Werbung für fremde Produkte oder Dienstleistungen zu machen,</li>
                    <li>vertrauliche Informationen anderer Mitglieder oder des Anbieters nicht nach außen zu tragen,</li>
                    <li>keine Inhalte der Community (einschließlich Aufzeichnungen, Templates, geteilter Dokumente) außerhalb der Community zu verbreiten oder zu veröffentlichen.</li>
                  </ul>
                  <p>(2) Der Anbieter behält sich vor, bei Verstößen gegen diese Regeln Beiträge zu entfernen, Verwarnungen auszusprechen oder Mitglieder aus der Community auszuschließen. Bei schweren oder wiederholten Verstößen ist der Anbieter zur außerordentlichen Kündigung des Vertrags gemäß § 6 berechtigt.</p>
                </div>
              </section>

              {/* § 10 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 10 Nutzungsrechte an Inhalten</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Sämtliche vom Anbieter im Rahmen der Leistungserbringung zur Verfügung gestellten Inhalte — einschließlich Kurse, Videos, Aufzeichnungen, Masterclasses, Templates, Blueprints, Folien, Präsentationen, Arbeitsunterlagen und sonstige Materialien — sind urheberrechtlich geschützt. Sämtliche Rechte verbleiben beim Anbieter bzw. den jeweiligen Rechteinhabern.</p>
                  <p>(2) Der Kunde erhält mit Abschluss des Vertrags ein einfaches, nicht übertragbares und nicht unterlizenzierbares Nutzungsrecht an den bereitgestellten Inhalten, ausschließlich zu eigenen, nicht-kommerziellen oder unternehmensinternen Zwecken. Eine darüber hinausgehende Nutzung bedarf der ausdrücklichen schriftlichen Zustimmung des Anbieters.</p>
                  <p>(3) Dem Kunden ist insbesondere untersagt:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>die Inhalte ganz oder in Teilen zu vervielfältigen und Dritten zugänglich zu machen (z. B. durch Hochladen auf andere Plattformen, Teilen in Gruppen, Weiterverkauf),</li>
                    <li>die Inhalte öffentlich wiederzugeben oder öffentlich zugänglich zu machen,</li>
                    <li>Aufzeichnungen von Live-Calls, Coaching-Sessions oder Community-Events ohne ausdrückliche Zustimmung anzufertigen oder zu verbreiten,</li>
                    <li>Marken, Logos, Urheber- oder Schutzrechtshinweise zu entfernen oder zu verändern.</li>
                  </ul>
                  <p>(4) Verstöße gegen diese Nutzungsrechte berechtigen den Anbieter zur sofortigen Sperrung des Zugangs, zur außerordentlichen Kündigung und zur Geltendmachung von Schadensersatzansprüchen.</p>
                  <p>(5) Templates und Blueprints, die ausdrücklich als "zur freien Verwendung" gekennzeichnet sind, dürfen vom Kunden auch im Rahmen eigener kommerzieller Projekte eingesetzt werden, jedoch nicht als eigenständige Produkte verkauft oder öffentlich weiterverbreitet werden.</p>
                </div>
              </section>

              {/* § 11 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 11 Gewährleistung</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Der Anbieter erbringt seine Leistungen mit der Sorgfalt eines ordentlichen Kaufmanns nach dem anerkannten Stand der Technik und Methodik. Ein bestimmter wirtschaftlicher Erfolg wird ausdrücklich nicht geschuldet.</p>
                  <p>(2) Es gelten die gesetzlichen Gewährleistungsrechte. Gegenüber Verbrauchern gelten die zwingenden gesetzlichen Regelungen des jeweils anwendbaren nationalen Verbraucherrechts.</p>
                  <p>(3) Gegenüber Unternehmern beträgt die Gewährleistungsfrist zwölf Monate ab Leistungserbringung, soweit gesetzlich zulässig.</p>
                  <p>(4) Der Kunde ist verpflichtet, dem Anbieter Mängel unverzüglich nach ihrer Entdeckung anzuzeigen und dem Anbieter Gelegenheit zur Nacherfüllung innerhalb angemessener Frist zu geben.</p>
                </div>
              </section>

              {/* § 12 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 12 Haftung</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung des Anbieters, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen, sowie für sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung des Anbieters, seiner gesetzlichen Vertreter oder Erfüllungsgehilfen beruhen.</p>
                  <p>(2) Der Anbieter haftet ferner für die leicht fahrlässige Verletzung wesentlicher Vertragspflichten (sogenannte Kardinalpflichten). Wesentliche Vertragspflichten sind solche, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung der Kunde regelmäßig vertrauen darf. In diesen Fällen ist die Haftung auf den bei Vertragsschluss vorhersehbaren, vertragstypischen Schaden begrenzt.</p>
                  <p>(3) Eine weitergehende Haftung des Anbieters besteht nicht. Insbesondere haftet der Anbieter nicht für entgangenen Gewinn, ausgebliebene Geschäftserfolge, mittelbare Schäden oder Folgeschäden.</p>
                  <p>(4) Die vorstehenden Haftungsbeschränkungen gelten nicht, soweit der Anbieter einen Mangel arglistig verschwiegen oder eine Garantie für die Beschaffenheit der Leistung übernommen hat. Die Haftung nach zwingenden gesetzlichen Vorschriften (insbesondere Produkthaftungsgesetz) bleibt unberührt.</p>
                  <p>(5) Der Anbieter gibt keine Garantie für bestimmte geschäftliche Ergebnisse, Umsätze, Kundenzahlen oder Erfolge des Kunden. Die im Rahmen des Coachings und der Kurse vermittelten Inhalte stellen Empfehlungen und Erfahrungswerte dar. Die tatsächliche wirtschaftliche Umsetzung und der Geschäftserfolg des Kunden hängen von zahlreichen Faktoren ab, die außerhalb des Einflussbereichs des Anbieters liegen.</p>
                  <p>(6) Für den Ausfall von Online-Diensten, Plattformen oder technischen Infrastrukturen Dritter (z. B. Videokonferenz-Anbieter, Community-Plattform, Zahlungsdienstleister) haftet der Anbieter nicht, es sei denn, der Ausfall ist vom Anbieter zu vertreten.</p>
                </div>
              </section>

              {/* § 13 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 13 Datenschutz</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Der Anbieter verarbeitet personenbezogene Daten des Kunden ausschließlich im Rahmen der geltenden datenschutzrechtlichen Bestimmungen, insbesondere der Datenschutz-Grundverordnung (DSGVO) und des ungarischen Datenschutzrechts.</p>
                  <p>(2) Ausführliche Informationen zu Art, Umfang, Zweck und Rechtsgrundlage der Datenverarbeitung sowie zu den Rechten des Kunden als betroffene Person finden sich in der Datenschutzerklärung des Anbieters, abrufbar unter:</p>
                  <p><strong className="text-foreground"><Link to="/datenschutz" className="text-primary hover:underline">ki-hochschule.de/datenschutz</Link></strong></p>
                  <p>(3) Die Datenschutzerklärung ist integraler Bestandteil dieser AGB.</p>
                </div>
              </section>

              {/* § 14 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 14 Vertraulichkeit</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Beide Vertragsparteien verpflichten sich, alle im Rahmen der Vertragsdurchführung erlangten vertraulichen Informationen der jeweils anderen Partei geheim zu halten und nur für die Zwecke dieses Vertrags zu verwenden.</p>
                  <p>(2) Vertraulich sind insbesondere:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>geschäftliche Strategien, Pläne und Zahlen,</li>
                    <li>Kundenlisten und Geschäftsgeheimnisse,</li>
                    <li>technische Informationen, Prozesse und Methoden,</li>
                    <li>Inhalte der Community und der Coaching-Sessions anderer Teilnehmer.</li>
                  </ul>
                  <p>(3) Die Vertraulichkeitsverpflichtung besteht auch nach Beendigung des Vertrags fort, solange und soweit die Informationen nicht öffentlich bekannt oder der anderen Partei rechtmäßig ohne Verschwiegenheitsverpflichtung bekannt geworden sind.</p>
                </div>
              </section>

              {/* § 15 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 15 Änderungen der AGB</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Der Anbieter behält sich das Recht vor, diese AGB mit Wirkung für die Zukunft zu ändern, soweit dies aus rechtlichen, regulatorischen oder technischen Gründen erforderlich wird oder soweit die Änderungen für den Kunden zumutbar sind und kein wesentliches Ungleichgewicht zwischen den Vertragspartnern schaffen.</p>
                  <p>(2) Änderungen werden dem Kunden mindestens sechs Wochen vor ihrem geplanten Inkrafttreten in Textform (E-Mail genügt) mitgeteilt. Widerspricht der Kunde den Änderungen nicht innerhalb von sechs Wochen nach Zugang der Mitteilung in Textform, gelten die Änderungen als genehmigt. Auf diese Folge wird der Kunde in der Änderungsmitteilung gesondert hingewiesen.</p>
                  <p>(3) Widerspricht der Kunde den Änderungen fristgerecht, ist der Anbieter berechtigt, den Vertrag zum Zeitpunkt des geplanten Inkrafttretens der Änderungen außerordentlich zu kündigen.</p>
                </div>
              </section>

              {/* § 16 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 16 Rechtswahl und Gerichtsstand</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Für sämtliche Verträge zwischen dem Anbieter und dem Kunden sowie für die aus ihnen resultierenden Ansprüche gilt ausschließlich <strong className="text-foreground">ungarisches Recht</strong> unter Ausschluss des UN-Kaufrechts (CISG).</p>
                  <p>(2) Handelt es sich bei dem Kunden um einen Verbraucher mit gewöhnlichem Aufenthalt innerhalb der Europäischen Union, bleibt der durch zwingende Vorschriften des Rechts des Staates gewährte Schutz, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, unberührt (Art. 6 Abs. 2 Rom-I-Verordnung). Insoweit ist die Rechtswahl zugunsten ungarischen Rechts insoweit eingeschränkt, als zwingendes Verbraucherschutzrecht des Heimatstaates des Verbrauchers günstiger ist.</p>
                  <p>(3) Ausschließlicher Gerichtsstand für alle Streitigkeiten aus und im Zusammenhang mit dem Vertragsverhältnis ist der Sitz des Anbieters in Budapest, Ungarn, sofern der Kunde Unternehmer, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
                  <p>(4) Für Verbraucher gelten die gesetzlichen Gerichtsstände.</p>
                  <p>(5) <strong className="text-foreground">Online-Streitbeilegung:</strong> Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS-Plattform) bereit, die Sie unter <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a> finden. Der Anbieter ist nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
                </div>
              </section>

              {/* § 17 */}
              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">§ 17 Schlussbestimmungen</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p>(1) Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder werden, berührt dies die Wirksamkeit der übrigen Bestimmungen nicht. An die Stelle der unwirksamen Bestimmung tritt eine Regelung, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung in rechtlich zulässiger Weise am nächsten kommt. Entsprechendes gilt für den Fall einer Regelungslücke.</p>
                  <p>(2) Änderungen und Ergänzungen des Vertrags bedürfen der Textform. Dies gilt auch für die Aufhebung dieser Textformklausel.</p>
                  <p>(3) Der Anbieter ist berechtigt, zur Erbringung seiner Leistungen qualifizierte Unterauftragnehmer und Erfüllungsgehilfen einzusetzen.</p>
                  <p>(4) Eine Übertragung der Rechte und Pflichten aus diesem Vertrag durch den Kunden auf Dritte bedarf der vorherigen schriftlichen Zustimmung des Anbieters.</p>
                </div>
              </section>

              {/* Footer */}
              <section className="pt-6 border-t border-foreground/10">
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p className="font-semibold text-foreground">Spalevic Consulting Kft.</p>
                  <p>1147 Budapest, Locsei ut 9/A, Ungarn</p>
                  <p>Handelsregisternummer: 01-09-446084</p>
                  <p>Steuernummer: 32852954-2-42</p>
                  <p>USt-IdNr.: HU32852954</p>
                  <p>info@aleksa.ai · ki-hochschule.de</p>
                  <p className="italic mt-4">Stand: 11. April 2026</p>
                </div>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AGB;
