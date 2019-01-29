import React, { Component } from 'react'
//import ReactDOM             from "react-dom"
import { Btn }              from "./Btn"
import { StickerList }      from "./StickerList"

export class Board extends Component {
    state = {
        stickers:[{
            id:"aza",
            msg:"test",
            text:"test",
            editing: false
        },{
            id:"zdf",
            msg:"test2",
            text:"test2",
            editing: false
        },{
            id:"dhk",
            msg:"test3",
            text:"test3",
            editing: false
        },{
            id:"fdk",
            msg:"test4",
            text:"test4",
            editing: false
        }],
    }

    render() {
        return (<div id="Board">
        <Btn addSticker={this.addSticker} msg={"test"}/>
        <StickerList stickers={this.state.stickers} editSticker={this.editSticker} removeSticker={this.removeSticker} saveStickerText={this.saveStickerText}/>
        </div>)
    }

    addSticker= ()=>{
        const {genId} = this
        let oldStickers = this.state.stickers
        let newSticker = {id:genId(),msg:"Ecrire ici",text:"Ecrire ici"}
        let newStickers = oldStickers.concat(newSticker)
        this.setState({stickers:newStickers})
    }

    genId = () => {
        return new Date().getTime()
    }

    removeSticker = (id) => {
        let oldStickers = this.state.stickers
        let newStickers = oldStickers.filter(function (sticker) {
            return sticker.id !== id
        })
        this.setState({stickers:newStickers})
    }
    editSticker = (id) => {
        let oldStickers = this.state.stickers
        let newStickers = oldStickers.map((el) => {
            el.id === id ? el.editing = !el.editing : console.log()
            return el
        })
        this.setState({stickers:newStickers})
    }
    saveStickerText = (id,value) => {
        let oldStickers = this.state.stickers
        let newStickers = oldStickers.map((el) => {
            el.id === id ? el.text = value : console.log()
            return el
        })
        this.setState({stickers:newStickers})
    }
}
