import React from 'react';
import ProductCard from './productCard';
import useCart from './useCart';

const ProductList = ({ items, title, isPainterList = false }) => {
    const { addToCart } = useCart();

    return (
        <div className="product-section">
            {title && (
                <h2 className="section-title" style={{
                    fontSize: '2.5rem',
                    color: '#FF0000',
                    textAlign: 'center',
                    margin: '40px 0',
                    fontWeight: 'bold'
                }}>
                    {title}
                </h2>
            )}
            <div
                className="product-list"
                style={{
                    
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px',
                    padding: '20px',
                    backgroundColor: '#f5f5f5',
                    maxWidth: '100%',
                    margin: '0 auto',
                }}
            >
                {items.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                        isPainter={isPainterList}
                        onAddToCart={() => addToCart(item)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;



