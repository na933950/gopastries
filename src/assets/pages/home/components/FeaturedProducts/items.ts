import {
  horizontalMacaronStack,
  horizontalMacaronTree,
  horizontalMatchaStack,
} from "../../../../images/horizontal";
import {
  verticalMacaron,
  verticalMacaronTree,
  verticalMatchaStack,
} from "../../../../images/vertical";

const items = [
  {
    imgWide: horizontalMacaronStack,
    imgTall: verticalMacaron,
    category: "macaron",
    title: "Classic Macarons",
    children:"My classic macarons have a light and airy texture, and the satisfying crispy shell that makes macarons such a unique item! With high customizability of flavor and color, they're my best seller!",
    price: "$36/dozen",
    formerPrice: "$42/dozen"
  },
  {
    imgWide: horizontalMacaronTree,
    imgTall: verticalMacaronTree,
    category: "macaron",
    title: "Macaron Tree",
    children: "My macaron tree is a festive spinoff of the classic macaron if you would like to order in bulk. It is an excellent display of delectability and is perfect for the holiday time of year or for parties!",
    price: "Prices vary",
    formerPrice: ""
  },
  {
    imgWide: horizontalMatchaStack,
    imgTall: verticalMatchaStack,
    category: "cookie",
    title: "Matcha Cookies",
    children: "My matcha cookies are perfectly crispy and crumbly with a sweet and salty matcha flavor worked into the cookie. They will melt in your mouth and are sprinkled with sugar crystals to convey their elegant taste.",
    price: "$30/dozen",
    formerPrice: "$36/dozen"
  }
];

export default items;
