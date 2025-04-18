import React from 'react'

function Box({
  children,
  width = "",
  heading = "",
  classNameHeading = "",
  classNameSubHeading = "text-center text-sm mt-1",
  Subheading = "",
  classNameDiv = "",
  height = "",
  imageURL = "",
  classNameImage = "",
  ...props
}) {
  return (
    <div className={`${classNameDiv}`} {...props}>
      {imageURL && (
        <img 
          src={imageURL} 
          alt={heading || "box image"} 
          className={`${classNameImage} ${width} ${height}`}
        />
      )}
      {heading && <p className={`${classNameHeading}`}>{heading}</p>}
      {Subheading && <p className={`${classNameSubHeading}`}>{Subheading}</p>}
      {children}
    </div>
  )
}

export default Box;