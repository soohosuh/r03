import { useRef, useState } from "react";
import { postProduct } from "../api/ProductAPI";

const initstate = {
    pname : 'Ice Coffee',
    pdesc: 'Coffee...',
    price: 4000
}

const ProductInput = () => {


    const fileRef = useRef();
    const [product , setProduct] = useState({...initstate})

    const handleChange = (e) => {

        product[e.target.name] = e.target.value
        setProduct({...product});

    }
    
    const handleClickSave = (e) => {

        // console.log(board)
        const formData = new FormData();
        formData.append("pname" , product.pname)
        formData.append("pdesc" , product.pdesc)
        formData.append("price" , product.price)

        console.log(fileRef.current)

        const arr = fileRef.current.files
        for(let file of arr){
            formData.append("files", file)
        }

        postProduct(formData)
        
    }

    const handleclickClear = (e) => {

        fileRef.current.value = '';
        // setProduct({...initstate});

    }
    
    return (
        <div>
            <h1>input</h1>
            <div>
                <input type="text" name="pname" value={product.pname} onChange={handleChange}></input>
            </div>
            <div>
                <input type="text" name="pdesc" value={product.pdesc} onChange={handleChange}></input>
            </div>
            <div>
                <input type="number" name="price" value={product.price} onChange={handleChange}></input>
            </div>
            <div>
                <input type="file" ref={fileRef} multiple name="images" onChange={handleChange}></input>
            </div>



            <div>
                <button onClick={handleClickSave}>SAVE</button>
                <button onClick={handleclickClear}>Clearfiles</button>
            </div>
            
        </div>
    );
}
 
export default ProductInput;