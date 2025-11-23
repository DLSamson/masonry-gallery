import {observer} from "mobx-react-lite";
import Item from "../../interfaces/Item.ts";
import PonyInfoCard from "./InfoCard/PonyInfoCard.tsx";
import {isAnimeItem, isPonyItem} from "../../utils/typeGuards.ts";

interface RenderInfoCardProps {
    item: Item<unknown>
}

const RenderInfoCard = observer((props: RenderInfoCardProps) => {
    if (isPonyItem(props.item) && props.item.data) {
        return <PonyInfoCard info={props.item.data}/>
    }

    if (isAnimeItem(props.item) && props.item.data) {
        return null; // Since not Implemented
    }

    return null;
});

export default RenderInfoCard;