import {
  horizontalMacaronStack,
  horizontalMacaronTree,
  horizontalMatchaStack,
  horizontalMacaronCake,
  horizontalChaiCookies,
  horizontalHazelnutCookies,
  horizontalCinnamonRolls,
  horizontalCupcakes,
  horizontalJarOfHearts,
  horizontalNumberCake,
  horizontalParkerHouseRolls,
  horizontalSugarCookies,
} from "../../images/horizontal";
import {
  verticalMacaron,
  verticalMacaronTree,
  verticalMatchaStack,
  verticalMacaronCake,
  verticalChaiCookies,
  verticalHazelnutCookies,
  verticalCinnamonRolls,
  verticalCupcakes,
  verticalJarOfHearts,
  verticalNumberCake,
  verticalParkerHouseRoll,
  verticalSugarCookies,
} from "../../images/vertical";

const IcMacaron = {
  imgWide: horizontalMacaronStack,
  imgTall: verticalMacaron,
  category: "macaron",
  title: "Classic Macarons",
  children:
    "My classic macarons have a light and airy texture, and the satisfying crispy shell that makes macarons such a unique item! With high customizability of flavor and color, they're my best seller!",
  price: "$36/dozen",
  formerPrice: "",
};
const IcMacaronTree = {
  imgWide: horizontalMacaronTree,
  imgTall: verticalMacaronTree,
  category: "macaron",
  title: "Macaron Tree",
  children:
    "My macaron tree is a festive spinoff of the classic macaron if you would like to order in bulk. It is an excellent display of delectability and is perfect for the holiday time of year or for parties!",
  price: "Prices vary",
  formerPrice: "",
};
const IcMatcha = {
  imgWide: horizontalMatchaStack,
  imgTall: verticalMatchaStack,
  category: "cookie",
  title: "Matcha Cookies",
  children:
    "My matcha cookies are perfectly crispy and crumbly with a sweet and salty matcha flavor worked into the cookie. They will melt in your mouth and are sprinkled with sugar crystals to convey their elegant taste.",
  price: "$36/dozen",
  formerPrice: "",
};
const IcMacaronCake = {
  imgWide: horizontalMacaronCake,
  imgTall: verticalMacaronCake,
  category: "macaron",
  title: "Macaron Cake",
  children:
    "A towering treat made with layers of fluffy macaron cookies and buttercream filling. It can be customized with different flavors and colors and is a perfect alternative to a normal cake if you want to spice things up and have a 'macaron to share.'",
  price: "$60",
  formerPrice: "",
};
const IcChai = {
  imgWide: horizontalChaiCookies,
  imgTall: verticalChaiCookies,
  category: "cookie",
  title: "Chai Cookies",
  children:
    "Perfectly spiced cookie with flavors of ginger, cinnamon, cardamom, nutmeg, and cloves. They are awesome during the holiday time. Call me to discuss Vegan options please.",
  price: "$36/dozen",
  formerPrice: "",
};
const IcHazelnut = {
  imgWide: horizontalHazelnutCookies,
  imgTall: verticalHazelnutCookies,
  category: "cookie",
  title: "Hazelnut Cookies",
  children:
    "Buttery hazelnut shortbread dipped in semi-sweet chocolate, sprinkled with roasted hazelnut pieces. These are a favorite from the 'cookie' category and crumble perfectly in your mouth! I have been making this since 1999! Call me to discuss Vegan options please.",
  price: "$36/dozen",
  formerPrice: "",
};
const IcCupcake = {
  imgWide: horizontalCupcakes,
  imgTall: verticalCupcakes,
  category: "cupcake",
  title: "Cupcakes",
  children:
    "A sweet, single-serving cake topped with rich frosting. My cupcakes are customizable across many frosting flavors and themes (with a chocolate or vanilla base)! They're great for any time of year.",
  price: "$42/dozen"
};
const IcCinnamonRoll = {
  imgWide: horizontalCinnamonRolls,
  imgTall: verticalCinnamonRolls,
  category: "bread",
  title: "Cinnamon Rolls",
  children:
    "Pillowy soft single serve rolls topped with cinnamon, made with a tangzhong starter for maximum softness. They are absolutely delicious as a breakfast item or afternoon snack.",
  price: "$42/dozen",
}
const IcJarOfHearts = {
  imgWide: horizontalJarOfHearts,
  imgTall: verticalJarOfHearts,
  category: "cookie",
  title: "Jar of Hearts",
  children:
    "When one cookie isn't enough or you have someone special in mind, order the romantic spinoff of my normal sugar cookie-- the jar of hearts!",
  price: "$30"
};
const IcNumberCake = {
  imgWide: horizontalNumberCake,
  imgTall: verticalNumberCake,
  category: "macaron",
  title: "Macaron Number Cake",
  children:
    "If a round macaron cake isn't enough and you are looking for something a little bit more special, or just want to give it a bit more flare, try my beautifully decorated number macaron cake!",
  price: "$150"
};
const IcParkerHouseRoll = {
  imgWide: horizontalParkerHouseRolls,
  imgTall: verticalParkerHouseRoll,
  category: "bread",
  title: "Honey Butter Salted Parker House Rolls",
  children:
    "Soft, buttery rolls coated with a honey butter and lightly sprinkled with kosher salt. If you love my cinnamon rolls but would like a more savory delight, the Parker House Rolls are perfect for you! They are a great accompaniment for your holiday meal",
  price: "$36/dozen",
  formerPrice: ""
}
const IcSugarCookie = {
  imgWide: horizontalSugarCookies,
  imgTall: verticalSugarCookies,
  category: "cookie",
  title: "Sugar Cookie",
  children:
    "Thick and soft, buttery sugar cookies decorated with a generous layer of royal icing. I offer high customizability with sugar cookies including college logos, graduation, baby, bridal shower, and other themes. Let's discuss how to put your company's logo on a cookie!",
  price: "Prices Vary"
}

const allItems = [
  IcMacaron,
  IcSugarCookie,
  IcMacaronCake,
  IcMacaronTree,
  IcMatcha,
  IcChai,
  IcHazelnut,
  IcCinnamonRoll,
  IcCupcake,
  IcJarOfHearts,
  IcNumberCake,
  IcParkerHouseRoll
];

export {
  IcMacaron,
  IcMacaronTree,
  IcMatcha,
  IcMacaronCake,
  IcSugarCookie,
  IcChai,
  IcHazelnut,
  IcCinnamonRoll,
  IcCupcake,
  IcJarOfHearts,
  IcNumberCake,
  IcParkerHouseRoll,
  allItems,
};
