import styles from "../page.module.scss";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Socials from "@/components/Socials";

import ProjectHeader from "@/components/Project/Header";
import ProjectGeneric from "@/components/Project/Generic";
import ProjectAssignment from "@/components/Project/Assignment";

import imageHeader from "@/public/images/fotografie/feeling-the-brown-tones/header.jpg";
import imageFirst from "@/public/images/fotografie/feeling-the-brown-tones/1.jpg";
import imageSecond from "@/public/images/fotografie/feeling-the-brown-tones/2.jpg";
import imageThird from "@/public/images/fotografie/feeling-the-brown-tones/3.png";
import imageFourth from "@/public/images/fotografie/feeling-the-brown-tones/4.png";

export const metadata = {
  title: "Lxframes - Feeling the brown tones",
};

export default function Detail() {
  return (
    <body>
      <Header />

      <main>
        <ProjectHeader
          color="#9E6C47"
          image={imageHeader}
          title="Feeling the brown tones"
          prefix="The"
          suffix="serie"
          position="top"
        />

        <ProjectAssignment
          color="#FFF6E8"
          border="#9E6C47"
          title="Het team"
          content={
            <>
              <ul>
                <li>
                  <b>Art director/styling/fotograaf:</b> Lanxiang Vermeulen
                </li>
                <li>
                  <b>Assistent fotograaf:</b> Laura Admiraal
                </li>
                <li>
                  <b>Model:</b> Aimée Algra
                </li>
                <li>
                  <b>Make-up:</b> Marjolein
                </li>
              </ul>
            </>
          }
        />

        <ProjectGeneric
          color="#FFF6E8"
          border="#9E6C47"
          title="Publicatie Malvie magazine"
          content={
            <>
              Feeling the brown tones is een fotoserie waarin de bruine kleur de
              leidende rol speelt. De verschillende bruine tinten zijn overal te
              zien. Van de sproeten in haar gezicht tot de hele achtergrond.
            </>
          }
          divider={true}
          images={[
            {
              size: "one-one",
              image: imageFirst,
            },
            {
              size: "one-one",
              image: imageSecond,
            },
          ]}
        />

        <ProjectGeneric
          color="#FFF6E8"
          border="#9E6C47"
          title="Publicatie Fienfh Magazine"
          content={
            <>
              Red & Rosy is een fotoserie waarin natuur en mensen samenkomen.
              Het toont de mooie en elegante kant van een vrouwelijk model in
              haar meest passende kleuren. Terwijl op de achtergrond krachtige
              en ruwe rotsen te zien zijn. Deze combinatie maakt het plaatje
              compleet.
            </>
          }
          divider={true}
          images={[
            {
              size: "one-one",
              image: imageThird,
            },
            {
              size: "one-one",
              image: imageFourth,
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
