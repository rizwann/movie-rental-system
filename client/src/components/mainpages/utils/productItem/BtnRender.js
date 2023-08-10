import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'



function BtnRender({product, deleteProduct, isLogged}) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart


function toastMsg(){
         // history.push('/login');
         alert("Please login to continue buying")
 
    
}
    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link id="btn_delete" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Delete
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${product._id}`}>
                        Edit
                    </Link>
                </>
                : <>
                    {isLogged ? <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                        Rent
                    </Link>: <Link id="btn_buy" to="/login" onClick={()=>toastMsg()} >
                        Rent
                    </Link>}
                    <Link id="btn_view" to={`/detail/${product._id}`}>
                        View
                    </Link>
                </>
            }
                
        </div>
    )
}

export default BtnRender
