import { Event } from "components/Event/Event";
import { List } from "./PageBoard.style";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosMan } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";

export const PageBoard = ({events})=>{
    return <List>

        {events.map((event)=>{
            return <Event
                start={event.time.start}
                type={event.type}
                location={event.name}
                speaker={event.speaker}
                end={event.time.end}
                name={event.name}
                place = {IoLocationSharp}
                man = {IoIosMan}
                calendar = {FaCalendarAlt}
                clock = {FaClock}
                
            />
         })}
        
    </List>
}