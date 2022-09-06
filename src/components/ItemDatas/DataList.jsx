import React from 'react'
import './DataList.css'
import { Link } from "react-router-dom";
import Text from "../../components/Text/Text";



const NewItem = (props) => {
    const { newDatas } = props;

    return (
        <div className="item-wrapper">

            {newDatas.map((newData) => {
                return (
                    <div className="items">
                        <Link to={newData.path} className="item">
                            <img className={newData.className} src={newData.img} />
                            <br />
                            <Text content={newData.brand} fontSize="10pt" fontWeight="700" color="#000"/>
                            <br />
                            <Text content={newData.title} fontSize="11pt" color="#000" />
                            <br />
                            <Text content={newData.price} fontSize="10pt" color="#dddddd"/>
                        </Link>
                    </div>
                )
            })}


        </div>


    )
}

export default NewItem