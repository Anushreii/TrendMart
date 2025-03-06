import React from 'react';
import { RiDeleteBin3Line } from 'react-icons/ri';

function CartContent() {
    const cartProducts = [
        {
            productId: 1,
            name: "T-shirt",
            size: "M",
            color: "Red",
            quantity: 1,
            price: 15,
            Image: "https://picsum.photos/200?random=1",
        },
        {
            productId: 2,
            name: "Jeans",
            size: "L",
            color: "Blue",
            quantity: 1,
            price: 15,
            Image: "https://picsum.photos/200?random=2",
        }
    ];

    return (
        <div>
            {cartProducts.map((product, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b">
                    
                    {/* Left Section: Product Image & Details */}
                    <div className="flex items-start">
                        {/* Product Image */}
                        <img
                            src={product.Image}
                            alt={product.name}
                            className="w-20 h-20 object-cover mr-4 rounded"
                        />

                        {/* Product Info */}
                        <div className="flex flex-col">
                            <h3 className="font-semibold">{product.name}</h3>
                            <p className="text-sm text-gray-500">
                                Size: {product.size} | Color: {product.color}
                            </p>

                            {/* Quantity Controls */}
                            <div className="flex items-center mt-2">
                                <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
                                <span className="mx-4">{product.quantity}</span>
                                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Price & Delete Button */}
                    <div className="flex flex-col items-end">
                        {/* Product Price */}
                        <p className="text-lg font-semibold">$ {product.price.toLocaleString()}</p>

                        {/* Delete Button */}
                        <button className="mt-2">
                            <RiDeleteBin3Line className="h-6 w-6 text-red-600 hover:text-red-800" />
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default CartContent;
