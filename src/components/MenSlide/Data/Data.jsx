import img1 from "./../../../assets/men-01.jpg";
import img2 from "./../../../assets/men-02.jpg";
import img3 from "./../../../assets/men-03.jpg";
import img4 from "./../../../assets/men-04.jpg";
import img5 from "./../../../assets/men-05.jpg";
import img6 from "./../../../assets/men-06.jpg";
import { FaStar, FaRegStar } from "react-icons/fa6";

const CardData = [
  {
    id: 1,
    img: img1,
    title: "Classic Spring",
    price: "$120.00",
    stars: Array(4)
      .fill(<FaStar />)
      .concat(Array(1).fill(<FaRegStar />)),
  },
  {
    id: 2,
    img: img2,
    title: "Air Force 1X",
    price: "$90.00",
    stars: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
  {
    id: 3,
    img: img3,
    title: "Love Nana '20",
    price: "$150.00",
    stars: Array(5).fill(<FaStar />),
  },
  {
    id: 4,
    img: img4,
    title: "Comfy Casuals",
    price: "$75.00",
    stars: Array(1)
      .fill(<FaStar />)
      .concat(Array(4).fill(<FaRegStar />)),
  },
  {
    id: 5,
    img: img5,
    title: "Fresh Fits",
    price: "$250.00",
    stars: Array(4)
      .fill(<FaStar />)
      .concat(Array(1).fill(<FaRegStar />)),
  },
  {
    id: 6,
    img: img6,
    title: "Street Vibes",
    price: "$350.00",
    stars: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
];

export default CardData;
