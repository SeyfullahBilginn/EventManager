import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data"
import Layout from '../components/layout/layout'

export default function HomePage(params) {
    const featuredEvents = getFeaturedEvents();

    return (
        <div>
            <EventList items={featuredEvents} />
        </div>
    )
}