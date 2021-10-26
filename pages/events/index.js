import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data"

export default function AllEventsPage(params) {

    const events = getAllEvents();

    return (
        <Fragment>
            <EventsSearch />
            <EventList items={events} />
        </Fragment>
    )
}