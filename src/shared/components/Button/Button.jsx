import React from 'react'

export const Button = ({name, classname, type = 'button', handleClick}) => {
    const btnClassName = 'pl-5 pr-5 m-2 btn ' + classname;
    return (
        <>
        <input type={type} value = {name} className = {btnClassName} onClick = {handleClick} />
        </>
    )

}