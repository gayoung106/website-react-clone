import React from 'react'
import Text from '../Text/Text'

const Title = (props) => {
    const { content } = props;

  return (
    <>
    <div className="title" style={{textAlign:"center", paddingTop:"50px"}}>
        <Text content={content} fontSize="40px" fontWeight="500"/>
    </div>

    </>
  )
}

export default Title