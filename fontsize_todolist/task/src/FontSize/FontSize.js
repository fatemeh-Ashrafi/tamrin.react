import React, { useState } from 'react'

function FontSize() {

    const [fontSize,setFontSize] = useState(12)


  return (
    <div>
        <button onClick={()=> setFontSize(fontSize + 2)}> + increase fontsize </button>
        <button onClick={()=> setFontSize(fontSize - 2)}> - desrease fontsize </button>
        <p style={{fontSize : `${fontSize}px`}}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum esse reprehenderit temporibus, doloremque possimus qui assumenda asperiores quis dolore quos dolorem, iusto iure ex explicabo voluptatum illum adipisci aliquam modi!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia laborum corporis a iste fuga accusamus pariatur recusandae quod modi illum, error veniam eaque, consequatur natus nisi? Consequuntur, voluptates ratione! Culpa.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, dolorem! Nesciunt, laborum sequi corrupti nihil beatae atque possimus excepturi ullam voluptate. Id quisquam adipisci quaerat voluptate similique culpa numquam ratione.
    </p>
      
    </div>
  )
}

export default FontSize
