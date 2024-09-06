import { Information } from './Information';
import { BoardImages } from '../../assets/index';
import './Information.style.scss';

export const Info = () => {
    return (
        <div className='information__container'>
            <Information images={BoardImages}/>
        </div>
    )
}