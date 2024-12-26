import {useCartStore} from "store/store"

export default function Header() {
  const {cart, clearCart} = useCartStore();

  return <>
    <header className="bg-pink-600 p-4 flex justify-between items-center">
      <div>Cart: {cart.length} 개</div>
      <button onClick={clearCart}>Clear Cart</button>
    </header>
  </>;
}
