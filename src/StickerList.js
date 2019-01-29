import React       from 'react'
import { Sticker } from "./Sticker"


export const StickerList = (props) => {
    const arr = props.stickers.map((el,i) => {

        return <Sticker id={el.id} key={i} msg={el.msg} value={el.text} editing={el.editing} removeSticker={props.removeSticker} editSticker={props.editSticker} saveStickerText={props.saveStickerText}/>
    })
    return(<div className={"sticker-list"}>
        {arr}
    </div> )
}
