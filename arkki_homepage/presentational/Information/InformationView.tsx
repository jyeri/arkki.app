import React from "react";
import { motion } from "framer-motion";
import "../../styles/Information.styles.scss";

type InformationViewProps = {
  images: { url: string; alt: string }[];
  MarttiRef: React.RefObject<HTMLDivElement>;
  JyriRef: React.RefObject<HTMLDivElement>;
  NikiRef: React.RefObject<HTMLDivElement>;
  RiksuRef: React.RefObject<HTMLDivElement>;
  ContactRef: React.RefObject<HTMLDivElement>;
};

export const InformationView: React.FunctionComponent<InformationViewProps> = ({
  images,
  MarttiRef,
  JyriRef,
  NikiRef,
  RiksuRef,
  ContactRef,
}) => (
  <section className="info" aria-label="Information page">
    {/* Martti */}
    <motion.div
      className="info__container"
      aria-labelledby="Martti"
      tabIndex={0}
      ref={MarttiRef}
      viewport={{ margin: "0px" }}
      initial={{ opacity: 0, width: "60%" }}
      whileInView={{ width: "75%", opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="info__name">MARtti</h2>
      <h3 className="info__title">Chairman, Coach</h3>
      <div className="info__content">
        <motion.div
          className="info__paragraph"
          viewport={{ margin: "-100px" }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <p>
            Martti Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit aut pariatur dolor at voluptas! Quo culpa, vitae officiis
            non enim pariatur beatae adipisci temporibus ipsam atque recusandae
            quos. Cumque, fuga.
          </p>
        </motion.div>
        <motion.div
          className="info__image"
          viewport={{ margin: "-100px" }}
          initial={{ opacity: 0, x: "0" }}
          whileInView={{ opacity: 0.75, x: "50vw", rotate: 10 }}
          transition={{ duration: 2 }}
          style={{ overflow: "hidden" }}
        >
          <img src={images[0].url} alt={images[0].alt} />
        </motion.div>
      </div>
    </motion.div>

    {/* Jyri */}
    <motion.div
      className="info__container"
      aria-labelledby="Jyri"
      tabIndex={0}
      ref={JyriRef}
      viewport={{ margin: "100px" }}
      initial={{ opacity: 0, width: "60%" }}
      whileInView={{ width: "80%", opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="info__name">jyRi</h2>
      <h3 className="info__title">Vice Chairman, Player</h3>
      <div className="info__content">
        <motion.div
          className="info__paragraph"
          viewport={{ margin: "-100px" }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <p>
            Jyri Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit aut pariatur dolor at voluptas! Quo culpa, vitae officiis
            non enim pariatur beatae adipisci temporibus ipsam atque recusandae
            quos. Cumque, fuga.
          </p>
        </motion.div>
        <motion.div
          className="info__image"
          viewport={{ margin: "-100px" }}
          initial={{ opacity: 0, x: "0%" }}
          whileInView={{ opacity: 0.75, x: "-50vw", rotate: 10 }}
          transition={{ duration: 2 }}
          style={{ overflow: "hidden" }}
        >
          <img src={images[1].url} alt={images[1].alt} />
        </motion.div>
      </div>
    </motion.div>

    {/* Niki */}
    <motion.div
      className="info__container"
      aria-labelledby="Niki"
      tabIndex={0}
      ref={NikiRef}
      viewport={{ margin: "100px" }}
      initial={{ opacity: 0 }}
      whileInView={{ width: "85%", opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="info__name">niki</h2>
      <h3 className="info__title">GM, Board member</h3>
      <div className="info__content">
        <motion.div
          className="info__paragraph"
          viewport={{ margin: "-100px" }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <p>
            Niki Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit aut pariatur dolor at voluptas! Quo culpa, vitae officiis
            non enim pariatur beatae adipisci temporibus ipsam atque recusandae
            quos. Cumque, fuga.
          </p>
        </motion.div>
        <motion.div
          className="info__image"
          viewport={{ margin: "-100px" }}
          initial={{ opacity: 0, x: "0" }}
          whileInView={{ opacity: 0.75, x: "42vw", rotate: 10 }}
          transition={{ duration: 2 }}
          style={{ overflow: "hidden" }}
        >
          <img src={images[2].url} alt={images[2].alt} />
        </motion.div>
      </div>
    </motion.div>

    {/* Riksu */}
    <motion.div
      className="info__container"
      aria-labelledby="Riksu"
      tabIndex={0}
      ref={RiksuRef}
      viewport={{ margin: "100px" }}
      initial={{ opacity: 0 }}
      whileInView={{ width: "90%", opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="info__name">RiccARdo</h2>
      <h3 className="info__title">2nd Coach, Player, Board member</h3>
      <div className="info__content">
        <motion.div
          className="info__paragraph"
          viewport={{ margin: "-100px" }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <p>
            Riksu Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Suscipit aut pariatur dolor at voluptas! Quo culpa, vitae officiis
            non enim pariatur beatae adipisci temporibus ipsam atque recusandae
            quos. Cumque, fuga.
          </p>
        </motion.div>
        <motion.div
          className="info__image"
          viewport={{ margin: "-100px" }}
          initial={{ opacity: 0, x: "0" }}
          whileInView={{ opacity: 0.75, x: "-45vw", rotate: 10 }}
          transition={{ duration: 2 }}
          style={{ overflow: "hidden" }}
        >
          <img src={images[3].url} alt={images[3].alt} />
        </motion.div>
      </div>
    </motion.div>

    {/* Contact */}
    <motion.div
      className="info__container"
      aria-labelledby="Contact details"
      tabIndex={0}
      ref={ContactRef}
      viewport={{ margin: "100px" }}
      initial={{ opacity: 0 }}
      whileInView={{ width: "100%", opacity: 1, marginBottom: "100px" }}
      transition={{ duration: 2 }}
    >
      <h2 className="info__name">contAct detAils</h2>
      <div className="info__content">
        <motion.div
          className="info__paragraph"
          viewport={{ margin: "150px" }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <p className="info__instructions">
            If you have any questions or we piqued your interest, please shoot
            us an email!
          </p>
          <p>E-mail: arkkijalkapallo@gmail.com</p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);