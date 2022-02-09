import React from 'react';


function ItemsTable(props){
    return (
                <tr>
                   <td>{props.id}</td>
                    <td>{props.brand.name}</td>
                    <td>{props.model}</td>
                    <td>{props.stock}</td>
                    <td>{props.price}</td>
                    {/* <td>{props.product_categories_id.name}</td> */}
                </tr>
            )
    }
    
        

export default ItemsTable;