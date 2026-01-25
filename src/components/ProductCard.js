export function ProductCard() {
    const product = {
        imageSrc: "images/iphone.png",
        title: "iphone 15 pro",
        specifications: ["A17 pro chip with 6 core-GPU", "3x or 5x Telephoto camera", "upto 29 hours video playback"],
        price: "999",

    }

    return (
        <article style={{border:"1px solid white", borderRadius: "8px", padding:"16px", textAlign: "center"}}>
            <h2>{product.title}</h2>
            <img src={product.imageSrc}
                alt={product.title}
                width="128px"
                height="128px"
            />
            <p>Specifications</p>
            <ul style={{listStyle:"none", padding:0}}>
                <li>{product.specifications[0]}</li>
                <li>{product.specifications[1]}</li>
                <li>{product.specifications[2]}</li>
            </ul>
            <button>Buy (From ${product.price})</button>
        </article>
    )
}