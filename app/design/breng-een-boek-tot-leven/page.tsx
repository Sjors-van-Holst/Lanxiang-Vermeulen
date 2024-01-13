import styles from "../page.module.scss";

import Button from "@/components/Button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectRow from "@/components/Project/Row";
import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

export const metadata = {
  title: "Lxframes - Breng een boek tot leven!",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#F1D9D8"
          title="Breng een boek tot leven!"
          content="Ik kreeg de kans om in opdracht van Mediacollege Amsterdam een eigen vertaling van een boek naar keuze uit te werken. Het hele project werd in slechts vier weken afgerond, van 15 mei tot 7 juni 2020."
          image={{
            src: "/images/design/breng-een-boek-tot-leven/header.png",
            alt: "Boek vertalen op je eigen manier",
            width: 5184,
            height: 3456,
          }}
        />

        <ProjectAssignment
          color="#FFF9F9"
          border="#F1D9D8"
          title="Een visuele vertaling"
          author="Mediacollege Amsterdam"
          content={
            <>
              Maak een <b>herontwerp</b> voor een boek naar keuze. Maak een
              visuele
              <b>vertaling van het boek</b>. Zorg ervoor dat de bladzijdes nog
              te lezen zijn en het boek op locatie <b>tentoongesteld</b> kunnen
              worden.
            </>
          }
        />

        <ProjectRow
          subtitle="Conceptontwikkeling"
          title="Verzets-tonen"
          sizing="width"
          content={
            <>
              <p>
                Ik heb ervoor gekozen om het boek &quot;T&apos;hoge nest&quot;
                visueel uit te werken. Het boek gaat over het leven van Joden
                tijdens de Tweede Wereldoorlog. Het is een heftig boek, maar er
                komt ook veel moed en liefde naar voren.
              </p>

              <p>
                <b>Mijn concept</b>
                In het boek stuurt Eberhard, de partner van Lientje, een geheim
                bericht via muziekbladen. Ik vond dit heel krachtig. Daarom wil
                ik de muziekbladen verwerken in het boek en ze hangend
                presenteren aan prikkeldraad. Ik wil een ruimte creëren die
                klein, benauwd en oncomfortabel aanvoelt, maar tegelijkertijd
                kracht en saamhorigheid oproept door de muziek.
              </p>
            </>
          }
          image={{
            src: "/images/design/breng-een-boek-tot-leven/1.png",
            alt: "'T Hooge nest",
            width: 1125,
            height: 2000,
          }}
        />

        <ProjectGeneric
          color="#FFF9F9"
          border="#F1D9D8"
          title="De vertaling"
          content="Als je meer wilt weten over mijn denkproces, kan je via de knop hieronder meer informatie vinden over mijn bevindingen."
          divider={true}
          buttons={[
            <Button
              key="1"
              color="white"
              href="/Boekenproject_procces.pdf"
              title="Verzetstonen onderzoek"
            />,
          ]}
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/breng-een-boek-tot-leven/2.png",
              size: "one-one",
              width: 1348,
              height: 1800,
            },
          ]}
        />

        <ProjectGeneric
          color="#FFF9F9"
          border="#F1D9D8"
          title="Uitwerking"
          content={
            <>
              Ik ben ontzettend trots op het eindresultaat van dit project. Het
              is me gelukt om het gevoel van het boek goed over te brengen en
              daarom heb ik dit project kunnen afsluiten met een 10. Naast het
              plezier en de passie die ik had tijdens het maken ervan,
              <b>realiseerde ik me ook hoe waardevol vrijheid eigenlijk is.</b>
            </>
          }
          divider={true}
          images={[
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/breng-een-boek-tot-leven/3.png",
              size: "one-two",
              width: 3024,
              height: 4032,
            },
            {
              alt: "Conceptontwikkeling",
              src: "/images/design/breng-een-boek-tot-leven/4.png",
              size: "one-two",
              width: 1338,
              height: 1798,
            },
          ]}
        />

        <div className={styles.detail__socials}>
          <Socials />
        </div>
        <Footer />
      </main>
    </body>
  );
}