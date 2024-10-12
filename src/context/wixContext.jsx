import { createContext, useContext, useState, useEffect } from "react";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import Cookies from "js-cookie";
import { useAlert } from "react-alert";

// Create context
const WixContext = createContext();

// Create client
const myWixClient = createClient({
    modules: { products, currentCart, collections },
    auth: OAuthStrategy({ clientId: import.meta.env.VITE_WIX_CLIENT_ID }),
    tokens: JSON.parse(Cookies.get("session") || '{"accessToken": {}, "refreshToken": {}}'),
});

const WixProvider = ({ children }) => {
    const [productList, setProductList] = useState([]);
    const [categories, setCategories] = useState([])
    const [cart, setCart] = useState({});
    const [categoryProducts, setCategoryProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({}); 
    const alert = useAlert();

    async function fetchProducts() {
        try {
            const productList = await myWixClient.products.queryProducts().find();
            setProductList(productList.items);
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    }

    async function fetchCart() {
        try {
            const currentCart = await myWixClient.currentCart.getCurrentCart();
            setCart(currentCart);
        } catch (error) {
            console.error("Error fetching cart: ", error);
        }
    }

    const fetchCategoryProducts = async (categoryId, setProductsCallback) => {
        let res;
        if (categoryId) {
            res = await myWixClient?.products.queryProducts()
                .eq("collectionIds", categoryId).find();
        } else {
            console.log('fetching categoryId');
        }
        setProductsCallback(res?.items || []);
    };

    useEffect(() => {
        const fetchProducts = async () => {
            const cats = await myWixClient.collections.queryCollections().find();
            setCategories(cats?.items)
        };

        fetchProducts();
    }, []);

    async function addToCart(product, quantity) {
        const options = product.productOptions.reduce(
            (selected, option) => ({
                ...selected,
                [option.name]: option.choices[0].description,
            }),
            {},
        );
        const { cart } = await myWixClient.currentCart.addToCurrentCart({
            lineItems: [
                {
                    catalogReference: {
                        appId: import.meta.env.VITE_WIX_APP_ID,
                        catalogItemId: product._id,
                        options: { options },
                    },
                    quantity: quantity,
                },
            ],
        });
        setCart(cart);
        alert.success("Item Added Into the Cart");
    }

    const updateCurrentCartLineItemQuantity = async (lineItems) => {
        try {
            const response = await myWixClient.currentCart.updateCurrentCartLineItemQuantity(lineItems);
            setCart(response.cart);
        } catch (error) {
            console.error("Error updating cart item quantity:", error);
        }
    };

    const updateCartItemQuantity = async (updateData) => {
        setIsLoading(true);
        try {
            const updatedItems = cart.lineItems.map(item =>
                item._id === updateData[0] ? { ...item, quantity: updateData[1] } : item
            );
            await updateCurrentCartLineItemQuantity(updatedItems);
            alert.success("Quantity updated!");
        } catch (error) {
            console.error("Error updating cart item quantity:", error);
        } finally {
            setIsLoading(false);
        }
    };

    async function removeCartItem(itemId) {
        try {
            setIsLoading(true);
            const response = await myWixClient.currentCart.removeLineItemsFromCurrentCart([itemId]);
            setCart(response.cart);
            setIsLoading(false);
            alert.success("Item removed from the cart");
        } catch (error) {
            console.error("Error removing cart item: ", error);
            setIsLoading(false);
            alert.error("Failed to remove item from the cart");
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <WixContext.Provider value={{
            productList, cart, isLoading, myWixClient, fetchCategoryProducts, categoryProducts,
            addToCart, updateCartItemQuantity, removeCartItem, formData, setFormData , categories
        }}>
            {children}
        </WixContext.Provider>
    );
};

// Custom hook to use the WixContext
const useWixContext = () => useContext(WixContext);

export { WixProvider, useWixContext };
