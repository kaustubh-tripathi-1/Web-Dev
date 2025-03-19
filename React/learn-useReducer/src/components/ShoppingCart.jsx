import "./ShoppingCart.css";
import { useReducer } from "react";

function cartReducer(state, action) {
    switch (action.type) {
        case "addItem": {
            return {
                items: [
                    ...state.items,
                    {
                        id: crypto.randomUUID(),
                        name: action.payload.item.name,
                        quantity: state.count,
                    },
                ],
            };
        }
        case "deleteItem": {
            return {
                items: state.items.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        }
        case "incrementCount": {
            return {
                items: state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            count: item.quantity + 1,
                        };
                    }
                    return item;
                }),
            };
        }
        case "decrementCount": {
            return {
                items: state.items.map((item) => {
                    if (item.id === action.payload.id) {
                        return {
                            ...item,
                            count: item.quantity - 1,
                        };
                    }
                    return item;
                }),
            };
        }

        default:
            return state;
    }
}

const initialCart = {
    items: [],
};

export default function ShoppingCart() {
    const [state, dispatch] = useReducer(cartReducer, initialCart);

    return (
        <main className="cart-container">
            <h1>Shopping Cart</h1>
            <ul className="cart-list">
                {state.items.length > 0 ? (
                    state.items.map((item) => (
                        <li key={item.id} className="cart-item">
                            <span className="item-name">{item.name}</span>
                            <span className="item-price">
                                ${item.price.toFixed(2)}
                            </span>
                            <div className="quantity-controls">
                                <button onClick={() => onDecrement(item.id)}>
                                    -
                                </button>
                                <span className="quantity">
                                    {item.quantity}
                                </span>
                                <button onClick={() => onIncrement(item.id)}>
                                    +
                                </button>
                            </div>
                            <button
                                className="delete-btn"
                                onClick={() => onDelete(item.id)}
                            >
                                Remove
                            </button>
                        </li>
                    ))
                ) : (
                    <p className="empty-cart">Your cart is empty.</p>
                )}
            </ul>
            {state.items.length > 0 && (
                <div className="cart-footer">
                    <button className="clear-cart-btn" onClick={onClear}>
                        Clear Cart
                    </button>
                </div>
            )}
        </main>
    );
}
