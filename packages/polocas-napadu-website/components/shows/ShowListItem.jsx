import React from 'react';

import { Show } from '../proptypes';
import { EventLocation, EventStart } from '../events';

export const ShowListItem = ({ show }) => (
  <div>
    <a href="">{show.name}</a>
    <br />
    <EventStart
      allDay={show.allDay}
      start={show.start}
      end={show.end}
    />
    <br />
    {show.location && <EventLocation location={show.location} />}
  </div>
);

ShowListItem.propTypes = {
  show: Show.isRequired,
};
