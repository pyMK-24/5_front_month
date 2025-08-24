import products from "../../db/products.json"

export const Product = ({ id, title, images }) => {
    const randomImages = images[Math.floor(Math.random() * images.length)]

    const clickImageInfo = () => {
        console.log(`${id} ${title}`)
    }

    return (
        <div className="block">
            <img src={randomImages} alt={title} id="img-random"/>
            <div className="block_inner">
                <h2>{title}</h2>
                <button id="btn" onClick={clickImageInfo}>Buy now</button>
            </div>
        </div>
    ) 
}

