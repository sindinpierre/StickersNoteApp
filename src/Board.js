import React, { Component } from 'react'
//import ReactDOM             from "react-dom"
import { Btn }              from "./Btn"
import { StickerList }      from "./StickerList"
import {Error}              from "./Error"
import {myEvent}            from "./App"

const axios = require('axios')

export class Board extends Component{
    state = {
        stickers: [],
        loaded :false
    }
    render() {
        return (<div id="Board">
        <Btn addSticker={this.addSticker} msg={"test"}/>
            <StickerList stickers={this.state.stickers} editSticker={this.editSticker} removeSticker={this.removeSticker} saveStickerText={this.saveStickerText}/>
        </div>)
    }
    componentDidMount() {
        this.getStickers()
        this.setState({loaded:true})
    }

    getStickers = ()=>{
        const instance = axios.create({
            baseURL:"https://sticker-note-app.firebaseio.com/stickers.json"
        })


        instance.get().then((res) => {
            if(res.data){
                let data = Object.keys(res.data)
                 .map((el) => {
                     return {id: el, ...res.data[el],editing:false}
                 })
                this.setState({stickers:data})
            }
            else{
                this.setState({stickers: []})
            }

        },(err) => {
            myEvent.emit('error',err)
        })
    }

    addSticker= ()=>{
        const instance = axios.create({
            baseURL: "https://sticker-note-app.firebaseio.com/"
        })

        const data = {text: 'Ecrire ici '}
        instance.post('/stickers.json', data)
                .then((res) => {  this.getStickers() },(err) => {
                    myEvent.emit('error',err)
                })
    }

    genId = () => {
        return new Date().getTime()
    }

    removeSticker = (id) => {
        const instance2 = axios.create({
            baseURL: `https://sticker-note-app.firebaseio.com/stickers/${id}.json`
        })
        instance2.delete('/')
                 .then(() => {
                     this.getStickers()
                 },(err) => {
                     myEvent.emit('error',err)
                 })
    }
    editSticker = (id) => {
        let oldStickers = this.state.stickers
        let newStickers = oldStickers.map((el) => {
            if(el.id === id) {
                if (el.editing)
                {
                    axios.put(`https://sticker-note-app.firebaseio.com/stickers/${id}.json`,{text: el.text})
                }
                el.editing = !el.editing
            }
            return el
        })
        return this.setState(newStickers)

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
