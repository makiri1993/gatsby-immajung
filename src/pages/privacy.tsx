import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Global, css } from '@emotion/core'
import { Color, Space } from '../definitions'
import styled from '@emotion/styled'

const Logo = require('../images/slice1.svg')
export default class PrivavyPage extends Component {
  render() {
    return (
      <>
        <Helmet>
          <meta charSet='UTF-8' />
          <title>immajung - coming soon!</title>
        </Helmet>
        <Global
          styles={css`
            @font-face {
              font-family: 'Poppins';
              font-style: normal;
              font-weight: 400;
              src: url('../../public/static/Poppins/Poppins-Regular.ttf')
                format('truetype');
            }
            * {
              margin: 0;
              font-size: 3vh;
              width: 100%;
              font-family: 'Poppins', Fallback, sans-serif;
            }
            body {
              background-color: ${Color.background};
            }
          `}
        />
        <Container>
          <h3>Datenschutzerklärung</h3>
          <p>
            <br />
            Verantwortlich im Sinne der Datenschutzgesetzes:
            <br />
            immajung
            <br />
            Garmsstraße 20
            <br />
            Langenhagen
            <br />
            <br />
            Datenschutz:
            <br />
            Als Webseitenbetreiber nehmen wir den Schutz aller persönlichen
            Daten sehr ernst. Alle personenbezogenen Informationen werden
            vertraulich und gemäß den gesetzlichen Vorschriften behandelt, wie
            in dieser Datenschutzerklärung erläutert. Unserer Webseite kann
            selbstverständlich genutzt werden, ohne dass Sie persönliche Daten
            angeben. Wenn jedoch zu irgendeinem Zeitpunkt persönliche Daten wie
            z.B. Name, Adresse oder E-Mail abgefragt werden, wird dies auf
            freiwilliger Basis geschehen. Niemals werden von uns erhobene Daten
            ohne Ihre spezielle Genehmigung an Dritte weitergegeben.
            Datenübertragung im Internet, wie zum Beispiel über E-Mail, kann
            immer Sicherheitslücken aufweisen. Der komplette Schutz der Daten
            ist im Internet nicht möglich.
          </p>
          <p>
            Datenschutzerklärung Google Analytics
            <br />
            Unsere Website nutzt den Analysedienst Google Analytics, betrieben
            von Google Inc. 1600 Amphitheatre Parkway Mountain View, CA 94043,
            USA. Google Analytics nutzt “Cookies”, das sind kleine Textdateien,
            die in Ihrem Browser gespeichert werden und die es ermöglichen, die
            Nutzung unserer Website durch die Besucher zu analysieren. Von den
            Cookies werden Daten über Ihre Nutzung unserer Webseite gesammelt,
            die normalerweise an einen Google-Server in den USA übertragen und
            gespeichert werden. Wenn die IP-Anonymisierung auf unserer Webseite
            aktiviert wurde, wird Ihre IP-Adresse von Google innerhalb der
            Mitgliedstaaten der Europäischen Union oder in anderen
            Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum
            vorab gekürzt. In seltenen Ausnahmefällen kann die komplette
            IP-Adresse an einen Google Server in den USA übertragen werden, dann
            wird diese dort gekürzt. Google nutzt diese Daten in unserem
            Auftrag, um die Nutzung unserer Website auszuwerten, um Berichte
            über die Webseitenaktivitäten zu erstellen sowie um weitere
            Dienstleistungen anzubieten, die mit der Webseitennutzung und
            Internetnutzung zusammenhängen. Die von Google Analytics erfassten
            IP-Adressen werden nicht mit anderen Daten von Google korreliert.
            Die Speicherung von Cookies kann durch eine spezielle Einstellung in
            Ihrem Browser verweigert werden. In diesem Fall ist jedoch die
            Funktionalität unserer Webseite im vollen Umfang nicht
            gewährleistet. Zusätzlich steht ihnen ein Browser-Plugin zu
            Verfügung, mit dem Sie die Sammlung der auf Ihre Nutzung der Website
            bezogenen erzeugten Daten und IP-Adressen durch Google verhindern
            können. Mehr Informationen dazu finden Sie hier:
            http://tools.google.com/dlpage/gaoptout?hl=de Datenschutzerklärung
            Instagram Auf unseren Webseiten werden Funktionen von Instagram
            verwendet, angeboten von Instagram Inc., 1601 Willow Road, Menlo
            Park, CA 94025, USA. Inhalte unserer Seiten können mit Ihrem
            Instagram-Profil verknüpft werden, sofern Sie zeitgleich in Ihrem
            Instagram-Account eingeloggt sind. Durch Klick auf den
            Instagram-Button können diese verlinkt werden. Instagram kann dabei
            die Nutzung unserer Seiten durch Sie registrieren. Als
            Webseitenbetreiber haben wir keine Informationen darüber, welche
            Daten übermittel werden und wie diese genutzt werden. Mehr
            Informationen dazu finden Sie hier:
            http://instagram.com/about/legal/privacy/
            <br />
            Auskunft, Löschung, Sperrung Zu jedem Zeitpunkt können Sie sich über
            die personenbezogenen Daten, deren Herkunft und Empfänger und den
            Nutzen der Datenverarbeitung informieren und unentgeltlich eine
            Korrektur, Sperrung oder Löschung dieser Daten verlangen. Bitte
            nutzen Sie dafür die im Impressum angegebenen Kontaktwege. Für
            weitere Fragen zum Thema stehen wir Ihnen ebenfalls jederzeit zur
            Verfügung. Server-Log-Files
            <br />
            <br />
            Der Seiten-Provider erhebt und speichert automatisch Daten in
            Server-Log Files, die von Ihrem Browser an uns übermittelt werden.
            Diese Daten enthalten:
            <br />
            <br />
            – Browsertyp/ Browserversion
            <br />
            <br />
            – Betriebssystem des Rechners
            <br />
            <br />
            – Referrer URL
            <br />
            <br />
            – Hostname des zugreifenden Rechners
            <br />
            <br />
            – Uhrzeit der Serveranfrage
            <br />
            <br />
            Diese Daten sind nicht personenbezogen. Es erfolgt keine
            Zusammenführung dieser Daten mit anderen Datenquellen. Wenn uns
            konkrete Anhaltspunkte für eine rechtswidrige Nutzung bekannt werden
            behalten wir uns das Recht vor, diese Daten nachträglich zu
            überprüfen. Cookies. Viele Internetseiten verwenden Cookies. Cookies
            sind unschädlich für Ihren Rechner und virenfrei. Sie dienen dazu,
            Internet-Angebote für die Besucher einer Webseite freundlicher,
            effektiver und sicherer zu machen. Cookies sind kleine Textdateien,
            die auf Ihrem Computer abgelegt werden und die Ihr Browser
            verwendet. Wir verwenden in der Regel so genannte „Session-Cookies“.
            Diese werden nach Verlassen unserer Seite automatisch gelöscht.
            Andere Cookies bleiben auf Ihrem Computer gespeichert, bis Sie diese
            löschen. Diese Cookies helfen dabei, Ihren Rechner beim nächsten
            Besuch wiederzuerkennen. Über die Browsereinstellungen können sie
            festlegen, dass Sie über neue Cookies informiert werden und Cookies
            jeweils annehmen müssen. Ebenso können Sie die Annahme von Cookies
            für bestimmte Fälle oder generell ausschließen oder das automatische
            Löschen der Cookies beim Schließen des Browser aktivieren. Werden
            Cookies desaktiviert, kann die Funktionalität unserer Website
            eingeschränkt sein. Kontaktformular Kontaktdaten, die uns über unser
            Kontaktformular erreichen, werden inklusive des Inhalts der Anfrage
            für Bearbeitungszwecke und für mögliche Anschlussfragen gespeichert.
            Diese Daten werden ohne Ihre spezifische Zustimmung nicht
            weitergegeben. Werbe-Mails Widerspruch Wir untersagen hiermit
            ausdrücklich der Nutzung der im Impressum veröffentlichten
            Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
            Werbung und Informationsmaterialien. Im Falle der unverlangten
            Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, halten
            sich die Betreiber der Webseitenrechtliche Schritte vor. Änderung
            der Datenschutzbestimmungen Unsere Datenschutzerklärung können in
            unregelmäßigen Abständen angepasst werden, damit sie den aktuellen
            rechtlichen Anforderungen entsprechen oder um Änderungen unserer
            Dienstleistungen umzusetzen, z. B. bei der Einfügung neuer Angebote.
            Für Ihren nächsten Besuch gilt dann automatisch die neue
            Datenschutzerklärung. Kontakt zum Datenschutzmitarbeiter
            <br />
            <br />
            Für Fragen zum Datenschutz schicken Sie uns bitte eine Nachricht an
            dennis.piotrowski@web.de mit dem Betreff „Datenschutz“
            <br />
            <br />
            <br />
            <br />
          </p>
          <h2>Responsible within the meaning of the Data Protection Act:</h2>
          <br />

          <p>
            <br />
            immajung
            <br />
            Garmsstraße 20
            <br />
            Langenhagen
            <br />
            <br />
            Data protection:
            <br />
            As a website operator, we take the protection of all personal data
            very seriously. All personal information will be treated
            confidentially and in accordance with the statutory provisions, as
            explained in this privacy policy. Our website can, of course, be
            used without you having to provide any personal data. However, if at
            any time personal data such as name, address or e-mail are
            requested, this will be done on a voluntary basis. Data collected by
            us will never be passed on to third parties without your special
            permission. Data transmission on the Internet, for example via
            e-mail, can always be subject to security gaps. Complete data
            protection is not possible on the Internet.
          </p>
          <br />
          <br />
          <p>
            <br />
            <br />
            If you have any questions regarding data protection, please send a
            message to dennis.piotrowski@web.de with the subject "Data
            protection".
          </p>
        </Container>
      </>
    )
  }
}

const Container = styled.div`
  margin: 0 auto;
  margin-top: 10vh;
  width: 65vw;
  display: block;
`
