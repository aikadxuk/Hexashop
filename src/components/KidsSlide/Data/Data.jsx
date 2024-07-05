import img1 from "./../../../assets/kid-01.jpg";
import img2 from "./../../../assets/kid-02.jpg";
import img3 from "./../../../assets/kid-03.jpg";
import img4 from "./../../../assets/kid-01.jpg";
import img5 from "./../../../assets/kid-02.jpg";
import img6 from "./../../../assets/kid-03.jpg";
import { FaStar, FaRegStar } from "react-icons/fa6";

const CardData = [
  {
    id: 1,
    img: img1,
    title: "School Collection",
    price: "$80.00",
    stars: Array(4)
      .fill(<FaStar />)
      .concat(Array(1).fill(<FaRegStar />)),
  },
  {
    id: 2,
    img: img2,
    title: "Summer Cap",
    price: "$12.00",
    stars: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
  {
    id: 3,
    img: img3,
    title: "Classic Kid",
    price: "$30.00",
    stars: Array(5).fill(<FaStar />),
  },
  {
    id: 4,
    img: img4,
    title: "School Collection",
    price: "$70.00",
    stars: Array(1)
      .fill(<FaStar />)
      .concat(Array(4).fill(<FaRegStar />)),
  },
  {
    id: 5,
    img: img5,
    title: "Summer Cap",
    price: "$250.00",
    stars: Array(4)
      .fill(<FaStar />)
      .concat(Array(1).fill(<FaRegStar />)),
  },
  {
    id: 6,
    img: img6,
    title: "Classic Kid",
    price: "$160.00",
    stars: Array(3)
      .fill(<FaStar />)
      .concat(Array(2).fill(<FaRegStar />)),
  },
];

export default CardData;
