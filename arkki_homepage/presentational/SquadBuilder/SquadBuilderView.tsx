import React from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import "../../styles/SquadBuilder.styles.scss";
import { Attack } from './Attack';
import { Mid } from './Mid';
import { Def } from './Def';
import { GK } from './GK';
import { Substitutes } from './Substitutes';
import { Reserves } from './Reserves';

interface SquadBuilderViewProps {
  attack: any[];
  mid: any[];
  def: any[];
  gk: any[];
  filteredSubstitutes: any[];
  filteredReserves: any[];
  selectedOption: string;
  isDropdownOpen: boolean;
  setIsDropdownOpen: (open: boolean) => void;
  onDragEnd: (result: any) => void;
  handleDropdownClick: (option: string) => void;
}

export const SquadBuilderView: React.FC<SquadBuilderViewProps> = ({
  attack,
  mid,
  def,
  gk,
  filteredSubstitutes,
  filteredReserves,
  selectedOption,
  isDropdownOpen,
  setIsDropdownOpen,
  onDragEnd,
  handleDropdownClick
}) => (
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