import img01 from '../assets/images/995874347_121_pic_2-fotor-bg-remover-20241010112137.png';

export const sampleProducts = [
    {
        _id: "1",
        name: "Sample Product 1",
        images: [{ url: img01 }],
        numOfReviews: 10,
        price: 10000, // Updated price in PKR
        stock: 10,
        ratings: 4.5,
        description: "DESIGN INFO - 3.5mm male to 2.5mm male audio cable adapter with upgraded flexible, detachable boom mic. This product also enables rotary volume control and mute switch for ease of use.",
        seller: "Sample Seller"
    },
    {
        _id: "2",
        name: "Sample Product 2",
        images: [{ url: img01 }],
        numOfReviews: 8,
        price: 15000, // Updated price in PKR
        stock: 3,
        ratings: 4.0,
        description: "This is a high-quality audio product designed for optimal sound performance. It is compatible with a variety of devices, making it a versatile choice for audio enthusiasts.",
        seller: "Sample Seller"
    },
    // More products...
];
