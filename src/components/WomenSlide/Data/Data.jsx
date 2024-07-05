import img1 from "./../../../assets/women-01.jpg";
import img2 from "./../../../assets/women-02.jpg";
import img3 from "./../../../assets/women-03.jpg";
import img4 from "./../../../assets/instagram-01.jpg";
import img5 from "./../../../assets/instagram-05.jpg";
import img6 from "./../../../assets/instagram-03.jpg";
import { FaStar, FaRegStar } from "react-icons/fa6";

const CardData = [
  {
    id: 1,
    img: img1,
    title: "New Green Jacket",
    price: "$75.00",
    stars: Array(4)
      .fill(<FaStar />)
      .concat(Array(1).fill(<FaRegStar />)),
  },
  {
    id: 2,
    img: img2,
    title: "Classic Dress",
    price: "$45.00",
    stars: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
  {
    id: 3,
    img: img3,
    title: "Spring Collection",
    price: "$130.00",
    stars: Array(5).fill(<FaStar />),
  },
  {
    id: 4,
    img: img4,
    title: "Red Clothes",
    price: "$75.00",
    stars: Array(1)
      .fill(<FaStar />)
      .concat(Array(4).fill(<FaRegStar />)),
  },
  {
    id: 5,
    img: img5,
    title: "Pink Cloak",
    price: "$150.00",
    stars: Array(4)
      .fill(<FaStar />)
      .concat(Array(1).fill(<FaRegStar />)),
  },
  {
    id: 6,
    img: img6,
    title: "Spring Fit",
    price: "$130.00",
    stars: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
];

export default CardData;
