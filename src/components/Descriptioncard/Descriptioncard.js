import React from 'react'

export default function Descriptioncard(props) {
    return (
        <div style={{fontFamily : 'Roboto, sans-serif',fontSize : ".85rem", fontWeight : "bolder",}}>
          {props.desc}  
        </div>
    )
}
