import React from 'react'

function Button({children , type="button" , bgColor="   " , textcolor="" , borderRradius = "rounded-md" , className=""  , ...props}) {
  return (
    <button className={` ${bgColor} ${textcolor} ${borderRradius} ${className} `} {...props}>
        {children}
    </button>    
)
}

// forward refrence ek imp topic h and isme apan child ka ref parent component se khi aur de skte h

export default Button;