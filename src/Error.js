import React from 'react'

export const Error=(props)=>{
        return (<div id={"Error"}>
            <div id={"Error__content"}>
                {props.errorList.map((el) => {
                     return <p>{el}</p>
                })}

            </div>
        </div>)
    }
