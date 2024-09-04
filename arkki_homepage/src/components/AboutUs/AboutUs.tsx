import { ImageGallery } from './ImageGallery';
import { MissionParagraph } from './MissionParagarph';
import { TeamImages } from '../../assets/index';
import { AboutImages } from '../../assets/index';
import './AboutUs.style.scss';

export const AboutUs = () => {
    return (
        <div className='about__container'>
            <ImageGallery images={TeamImages}/>
            <MissionParagraph images={AboutImages}/>
        </div>
    )
}