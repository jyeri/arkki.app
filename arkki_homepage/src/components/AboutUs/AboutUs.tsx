import { ImageGallery } from './ImageGallery';
import MissionParagraph from './MissionParagraph';
import JoinParagraph from './JoinParagraph';
import { TeamImages } from '../../assets/index';
import './AboutUs.style.scss';

export const AboutUs = () => {
    return (
        <div className='about__container'>
            <ImageGallery images={TeamImages}/>
        </div>
    )
}