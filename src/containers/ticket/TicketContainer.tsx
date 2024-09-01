import React from 'react';
import EventsList from './EventsList';
import Filter from './Filter';
import Organizers from './Organizers';
import Slider from './Slider';

const TicketContainer: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 mb-8">
      <Slider />
      <Filter />
      <EventsList />
      <Organizers />
    </div>
  );
};

export default TicketContainer;
