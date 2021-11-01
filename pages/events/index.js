import { Fragment, useState } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";
import { getAllEvents, getFilteredEvents } from "../../dummy-data"
import { useRouter } from "next/router";
export default function AllEventsPage(props) {

    const router = useRouter()
    const events = getAllEvents();
    
    function findEventsHandler(year, month) {
        // console.log(year + " : " + month)
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }

    return (
        <Fragment>
            <EventsSearch onSearch={findEventsHandler} />
            <EventList items={events} />
        </Fragment>
    )
}