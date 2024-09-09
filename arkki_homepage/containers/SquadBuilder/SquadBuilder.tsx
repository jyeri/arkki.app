import React from 'react';
import { useSquadBuilder } from './useSquadBuilder';
import { SquadBuilderView } from '../../presentational/SquadBuilder/SquadBuilderView';

export const SquadBuilder: React.FC = () => {
  const {
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
  } = useSquadBuilder();

  return (
    <SquadBuilderView
      attack={attack}
      mid={mid}
      def={def}
      gk={gk}
      filteredSubstitutes={filteredSubstitutes}
      filteredReserves={filteredReserves}
      selectedOption={selectedOption}
      isDropdownOpen={isDropdownOpen}
      setIsDropdownOpen={setIsDropdownOpen}
      onDragEnd={onDragEnd}
      handleDropdownClick={handleDropdownClick}
    />
  );
};