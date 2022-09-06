import React from 'react';
import Text from "../Text/Text";
import Link from 'react-router-dom'

const datas = [
    {
        id: 1,
        content: "자켓",
        to: "/home"
    },
    {
        id: 2,
        content: "자켓",
        to: "/outer"
    },
    {
        id: 3,
        content: "자켓",
        to: "/man"
    }
]

const DropDown = () => {
    return (
        <>
            <ul className="drop-menu">
                <Text content="Outer" fontSize="10pt"/>
            {datas.map((data) => {
                return (
                    <Link to={data.to} key={data.id}>
                        <li><Text content={data.content} fontSize="8pt"/></li>
                    </Link>
                     )
                    })
                }
            </ul>

        </>
    )
}

export default DropDown;