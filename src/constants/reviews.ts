interface Review {
    name: string;
    rating: number; // Rating out of 5 stars
    comment: string;
}

const reviews: Review[] = [
    {
        name: "Adithya S",
        rating: 5,
        comment: "The chocolate cake was absolutely divine! The texture was perfect and it was not overly sweet. Highly recommend!",
    },
    {
        name: "Pableboo",
        rating: 4,
        comment: "I tried the red velvet cake and it was delicious. The cream cheese frosting was just right. Will definitely come back for more.",
    },
    {
        name: "Zidarth",
        rating: 5,
        comment: "The lemon drizzle cake was a burst of freshness. The balance of sweet and tangy was spot on. Best cake I've had in a while!",
    },
    {
        name: "Nandhini",
        rating: 3,
        comment: "The carrot cake was good, but a bit too dense for my liking. The flavors were nice though. Worth a try if you like dense cakes.",
    },
];

export default reviews;