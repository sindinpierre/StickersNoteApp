import React           from "react"
import { FaTrash }     from "react-icons/fa"
import { FaPencilAlt } from "react-icons/fa"
import { FaSave }      from "react-icons/fa"

export const Sticker = (props) => {
    return <div id={"Sticker"}>
        {props.editing ? <form>
            <textarea className={"p"} id={"textarea"} value={props.value} cols="14" rows="3"
                onChange={(e) => props.saveStickerText(props.id, e.target.value)}>

            </textarea>
        </form> : <p className={"p"}>
            {props.value}
        </p>}
  <div className={"buttons"}>
      {!props.editing ?

          <button id="edit" onClick={() => props.editSticker(props.id)}>
              <FaPencilAlt />
          </button> :

          <button id="save" onClick={() => props.editSticker(props.id)}>
              <FaSave />
          </button>}

      <button id="remove" onClick={() => props.removeSticker(props.id)}>
          <FaTrash />
      </button>
  </div>
    </div>
}
