import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import { brandFilter } from '../features/ProductSliceReducer'

const ProductPage = () => {
    let products = useSelector((state) => state.products.products)
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    let dispatch = useDispatch()

    return (

        <div>ProductPage
            <div className='flex '>
                <div className="px-6 mb-4">
                    <select
                        value={brand}
                        onChange={(e) => {
                            setBrand(e.target.value)
                            dispatch(brandFilter(brand))
                        }}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">All Brands</option>
                        <option value="Zudio">Zudio</option>
                        <option value="Zara">Zara</option>
                        <option value="Louis Vuitton">Louis Vuitton</option>
                    </select>
                </div>
                <div className="px-6 mb-4">
                    <select
                        value={category}
                        onChange={(e) => setBrand(e.target.value)}
                        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        <option value="">All Category</option>
                        <option value="Mens">Mens</option>
                        <option value="Womens">Womnes</option>
                        <option value="Kids">Kids</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}

export default ProductPage