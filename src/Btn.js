import React from 'react'
export const Btn = (props) => {
    return(
        <div>
            <input id={"add"} onClick={() => {
                props.addSticker()
            }} type="submit" value="ajouter Sticker"/>
        </div>
    )

}
