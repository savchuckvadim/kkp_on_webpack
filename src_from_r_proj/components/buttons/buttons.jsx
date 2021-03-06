
import  "./buttons.css"
import Button from '@material-ui/core/Button';
import React from 'react';



const ComplectButtons = (props) => {

    let buttons = []; 
    props.allComplects.forEach((complect, index) => {
        buttons.push(<Button key={`btn-${index}`} style={props.style[index]} onClick={() => { return props.createComplect(complect, index, props.ods, props.currentOd, props.currentTheme) }} className={`${complect.className}`} number={index} type="button" >{complect.name} <div className="ellipseWrapper"><img className="ellipse" src={props.ellipse[index]} alt=""></img></div> </Button>)
    })
    // props.buttons.forEach(button => {
       
    //     buttons.push(<Button key={`btn-${button.index}`} style={button.style} onClick={() => { return button.createComplect(button.obj, button.index, button.ods, button.currentOd, button.currentTheme) }} className={button.className} number={button.index} type="button" >{button.name} <div className="ellipseWrapper"><img className="ellipse" src={button.ellipse} alt=""></img></div> </Button>)
    // })
    return (
        buttons
    )
}

export default ComplectButtons