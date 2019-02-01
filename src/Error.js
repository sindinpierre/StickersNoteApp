import React from 'react'

export const Error=(props)=>{
        return (!(props.errorList.length) ? "":
            <div id={"Error"}>
            <div id={"Error__content"}>
                {props.errorList.map((el) => {
                    return <p>{el}</p>
                })}

            </div>
        </div>)
    }
