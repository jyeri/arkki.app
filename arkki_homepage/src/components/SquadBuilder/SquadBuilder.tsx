import { DragDropContext, DropResult } from '@hello-pangea/dnd';
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
        updatePlayerPosition,
        selectedOption,
        isDropdownOpen,
        isSubstitutesOpen,
        isReservesOpen,
        substitutesFilter,
        reservesFilter,
        isSubstitutesFilterDropdownOpen,
        isReservesFilterDropdownOpen,
        toggleDropdown,
        handleOptionClick,
        toggleSubstitutesFilterDropdown,
        toggleReservesFilterDropdown,
        handleSubstitutesFilterOptionClick,
        handleReservesFilterOptionClick,
        setIsSubstitutesOpen,
        setIsReservesOpen
    } = useSquadBuilder();

    const onDragEnd = (result: DropResult) => {
        const { source, destination } = result;

        if (!destination) {
            return;
        }

        const [sourceDroppableId, sourceIndex] = source.droppableId.split('-');
        const [destinationDroppableId, destinationIndex] = destination.droppableId.split('-');

        updatePlayerPosition(parseInt(sourceIndex), parseInt(destinationIndex), sourceDroppableId, destinationDroppableId);
    };

    return (
        <div className="SBContainer">
            <div className="SBContainer__dropdown">
                <button className="SBContainer__dropdown-button" onClick={toggleDropdown}>
                    {selectedOption}
                </button>
                {isDropdownOpen && (
                    <ul className="SBContainer__dropdown-menu">
                        <li className="SBContainer__dropdown-item" onClick={() => handleOptionClick('4-4-2')}>
                            4-4-2
                        </li>
                        <li className="SBContainer__dropdown-item" onClick={() => handleOptionClick('4-3-3')}>
                            4-3-3
                        </li>
                        <li className="SBContainer__dropdown-item" onClick={() => handleOptionClick('3-5-2')}>
                            3-5-2
                        </li>
                    </ul>
                )}
            </div>
            <div className="SBContainer__pitch">
                <DragDropContext onDragEnd={onDragEnd}>
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
                    <div className={`SBContainer__substitutes ${isSubstitutesOpen ? 'open' : ''}`}>
                        <div className="SBContainer__filter-dropdown">
                            <button className="SBContainer__filter-dropdown-button" onClick={toggleSubstitutesFilterDropdown}>
                                {substitutesFilter}
                            </button>
                            {isSubstitutesFilterDropdownOpen && (
                                <ul className="SBContainer__filter-dropdown-menu">
                                    <li className="SBContainer__filter-dropdown-item" onClick={() => handleSubstitutesFilterOptionClick('all')}>
                                        Show All
                                    </li>
                                    <li className="SBContainer__filter-dropdown-item" onClick={() => handleSubstitutesFilterOptionClick('attack')}>
                                        Attackers
                                    </li>
                                    <li className="SBContainer__filter-dropdown-item" onClick={() => handleSubstitutesFilterOptionClick('mid')}>
                                        Midfielders
                                    </li>
                                    <li className="SBContainer__filter-dropdown-item" onClick={() => handleSubstitutesFilterOptionClick('def')}>
                                        Defenders
                                    </li>
                                    <li className="SBContainer__filter-dropdown-item" onClick={() => handleSubstitutesFilterOptionClick('GK')}>
                                        Goalkeepers
                                    </li>
                                </ul>
                            )}
                        </div>
                        <Substitutes substitutes={filteredSubstitutes} />
                    </div>
                    <div className={`SBContainer__reserves ${isReservesOpen ? 'open' : ''}`}>
                        <div className="SBContainer__filter-dropdown">
                            <button className="SBContainer__filter-dropdown-button" onClick={toggleReservesFilterDropdown}>
                                {reservesFilter}
                            </button>
                            {isReservesFilterDropdownOpen && (
                                <ul className="SBContainer__filter-dropdown-menu">
                                    <li className="SBContainer__filter-dropdown-item" onClick={() => handleReservesFilterOptionClick('all')}>
                                        Show All
                                    </li>
                                    <li className="SBContainer__filter-dropdown-item" onClick={() => handleReservesFilterOptionClick('attack')}>
                                        Attackers
                                    </li>
                                    <li className="SBContainer__filter-dropdown-item" onClick={() => handleReservesFilterOptionClick('mid')}>
                                        Midfielders
                                    </li>
                                    <li className="SBContainer__filter-dropdown-item" onClick={() => handleReservesFilterOptionClick('def')}>
                                        Defenders
                                    </li>
                                    <li className="SBContainer__filter-dropdown-item" onClick={() => handleReservesFilterOptionClick('GK')}>
                                        Goalkeepers
                                    </li>
                                </ul>
                            )}
                        </div>
                        <Reserves reserves={filteredReserves} />
                    </div>
                </DragDropContext>
            </div>
            <button className="SBContainer__toggle-button left" onClick={() => setIsSubstitutesOpen(!isSubstitutesOpen)}>
                {isSubstitutesOpen ? 'CLOSE' : 'SUBS'}
            </button>
            <button className="SBContainer__toggle-button right" onClick={() => setIsReservesOpen(!isReservesOpen)}>
                {isReservesOpen ? 'CLOSE' : 'RESERVE'}
            </button>
        </div>
    );
};