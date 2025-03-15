import { Item } from "./Event,styled"
import { Span } from "./Event,styled"

export const Event = ({start, type, location, speaker, end, name, place:Place, man:Man, calendar:Calendar,  clock:Clock}) =>{

    const eventStart = new Date(start).toLocaleString();
    const eventEnd = new Date(end).toLocaleString();
    const endMs = Date.parse(end) - Date.parse(start);
    const endTime = endMs / 3600000;
    const hours = Math.floor(endTime);
    const minutes = Math.round((endTime - hours) * 60) ? Math.round((endTime - hours) * 60) : "00";
    console.log(hours, minutes);

    return <Item>
        <h2>{name}</h2>
        <p><Place/>{location}</p>
        <p><Man/>{speaker}</p>
        <p><Calendar/>{eventStart}</p>
        <p><Clock/>{hours}:{minutes}</p>
        <Span type={type}>{type}</Span>
    </Item>

}