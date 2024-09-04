
import { SponsorImages } from '../../assets/index';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import './Footer.style.scss';

export const Footer = () => {
    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        console.log(latest);
    });


    return (
        <motion.div className='footer__container'
            initial={{ opacity: 1 }}
            style={{ opacity: scrollYProgress }}
            >
            <div>
                <div className='footer__container-sponsors'>
                    {SponsorImages.map(({url, alt}) => (
                        <img src={url} alt={alt} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}