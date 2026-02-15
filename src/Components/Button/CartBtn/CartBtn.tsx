import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const CartBtn = () => {
  return (
    <Link href="/cart">
      <ShoppingCart size={25} className="cursor-pointer" />
    </Link>
  );
};

export default CartBtn;
