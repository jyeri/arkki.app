import React from "react";
import { motion } from "framer-motion";
import "../../styles/AboutUs.styles.scss";

type MissionParagraphViewProps = {
  images: { url: string; alt: string }[];
  joinRef: React.RefObject<HTMLDivElement>;
  missionRef: React.RefObject<HTMLDivElement>;
  journeyRef: React.RefObject<HTMLDivElement>;
};

export const MissionParagraphView: React.FunctionComponent<MissionParagraphViewProps> = ({ images, missionRef, joinRef, journeyRef }) => (

    <section className="AboutUs"
    aria-label="About Us"
    >
      <div className="about__mission-container"
      aria-labelledby="Our Mission"
      tabIndex={0}
      >
        <h2 className="about__mission-header">our Mission</h2>
        <div className="about__mission-content">
            <motion.div className="about__mission-paragraph"
              ref={missionRef}
              viewport={{ margin: "-100px" }}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 2 }}
            >
              <p>
                At Arkki, we are trying to provide and promote low threshold social activity for players of all ages and skill levels. We believe that everyone should have the opportunity to play football, regardless of their background or financial situation. We are committed to providing a safe and inclusive environment for all players, where they can grow their social network, physical & mental health and enjoy the game.
                It has been a long journey, but we are proud of what we have achieved so far. We are looking forward to the future and are excited to see what the next chapter will bring.
              </p>
            </motion.div>
            <motion.div className="about__mission-image"
                ref={missionRef}
                viewport={{ margin: "-100px" }}
                initial={{ opacity: 0.9, x: "50%" }}
                whileInView={{ opacity: 0.33, x:"-15vw", rotate: 10 }}
                transition={{ duration: 2 }}
                style={{ overflow: "hidden" }}
            >
                  <img src={images[0].url} alt={images[0].alt} />
            </motion.div>
        </div>
      </div>
        <div className="about__journey-container"
        aria-labelledby="Our Journey"
        tabIndex={0}
        >
            <h2 className="about__journey-header">our journey</h2>
            <div className="about__journey-content">
                <motion.div className="about__journey-image"
                    ref={journeyRef}
                    viewport={{ margin: "-120px" }}
                    initial={{ opacity: 0, x: "10%" }}
                    whileInView={{ opacity: 0.33, x:"90%", rotate: -5 }}
                    transition={{ duration: 2 }}
                    style={{ overflow: "hidden" }}
                >
                    <img src={images[1].url} alt={images[1].alt} />
                </motion.div>
                <motion.div className="about__journey-paragraph"
                  ref={journeyRef}
                  viewport={{ margin: "-100px" }}
                  initial={{ opacity: 0, x: 200 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p>
                      There has been two complete seasons of Arkki. Growth from 3 pretty lousy players with little to no social network in Helsinki, to 40 moderately active players.
                      We have been able to create easy going and inclusive enviroment for players to enjoy the game and bits and parts of their life in the field.
                      We also have succeeded in our newly found side goal, actually improving at the game, and we already managed to rise from 6th division to 5th division in the league. While it is not the achievement we were aiming for, it is a good start and indicator that things are going forward.
                  </p>
                </motion.div>
            </div>
        </div>
      <div className="about__join-container"
      aria-labelledby="Join Us"
      tabIndex={0}
      >
        <h2 className="about__join-header">join us</h2>
        <div className="about__join-content">
            <motion.div className="about__join-paragraph"
              ref={joinRef}
              viewport={{ margin: "-100px" }}
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <p>
                  We are always looking for new players to join our team. If you are interested in playing football in a friendly and inclusive environment, then Arkki is the place for you. We welcome players of all ages and skill levels, so don't be shy - come and join us today!
                  Shoot an email to: Arkkijalkapallo@gmail.com or head to information page for more details.
              </p>
            </motion.div>
            <motion.div className="about__join-image"
                ref={joinRef}
                viewport={{ margin: "-100px" }}
                initial={{ opacity: 0.9, x: "-35%" }}
                whileInView={{ opacity: 0.33, x:"-15vw", y: "-1vw", rotate: -10 }}
                transition={{ duration: 2 }}
                style={{ overflow: "hidden" }}
                >
                <img src={images[2].url} alt={images[2].alt} />
            </motion.div>
        </div>
      </div>
    </section>
);