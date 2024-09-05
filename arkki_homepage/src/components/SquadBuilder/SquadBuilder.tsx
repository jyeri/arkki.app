import { DragDropContext } from '@hello-pangea/dnd';
import { useSquadBuilder } from './useSquadBuilder';
import './SquadBuilder.style.scss';
import { Attack } from './Formation/Attack';
import { Mid } from './Formation/Mid';
import { Def } from './Formation/Def';
import { GK } from './Formation/GK';
import { Substitutes } from './Formation/Substitutes';
import { Reserves } from './Formation/Reserves';

export const SquadBuilder = () => {
    const {
        attack,
        mid,
        def,
        gk,
        filteredSubstitutes,
        filteredReserves,
        selectedOption,
        isSubstitutesOpen,
        isReservesOpen,
        isDropdownOpen,
        setIsDropdownOpen,
        onDragEnd,
        handleDropdownClick,
        setIsSubstitutesOpen,
        setIsReservesOpen
    } = useSquadBuilder();

    return (
        <div className="container">
            <div className="formation-drdwn">
                <button className="SBContainer__dropdown-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {selectedOption}
                </button>
                {isDropdownOpen && (
                    <ul className="SBContainer__dropdown-menu">
                        <li className="SBContainer__dropdown-item" onClick={() => handleDropdownClick('4-4-2')}>
                            4-4-2
                        </li>
                        <li className="SBContainer__dropdown-item" onClick={() => handleDropdownClick('4-3-3')}>
                            4-3-3
                        </li>
                        <li className="SBContainer__dropdown-item" onClick={() => handleDropdownClick('3-5-2')}>
                            3-5-2
                        </li>
                    </ul>
                )}
            </div>
            <div className="grid">
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="subs">
                        <Substitutes substitutes={filteredSubstitutes} />
                    </div>
                    <div className="starting">
                        <div className="SBContainer__pitch-attack">
                            <Attack attack={attack} />
                        </div>
                        <div className="SBContainer__pitch-mid">
                            <Mid mid={mid} />
                        </div>
                        <div className="SBContainer__pitch-def">
                            <Def def={def} />
                        </div>
                        <div className="SBContainer__pitch-gk">
                            <GK gk={gk} />
                        </div>
                    </div>
                    <div className="reserves">
                        <Reserves reserves={filteredReserves} />
                    </div>
                </DragDropContext>
            </div>
        </div>
    );
};