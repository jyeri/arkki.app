
import { SponsorImages } from '../../assets/index';
import { motion, useScroll } from "framer-motion";
import './Footer.style.scss';

export const Footer = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div className='footer__container'
            initial={{ opacity: 1 }}
            style={{ opacity: scrollYProgress }}
            >
            <div>
                <div className='footer__container-sponsors'>
                    {SponsorImages.map(({url, alt}) => (
                        <img key={alt} src={url} alt={alt} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}