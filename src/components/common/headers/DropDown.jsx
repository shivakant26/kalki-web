import { Link } from "react-router-dom";
const DropDown = ({ items, handleMenuClick }) => {
  return (
    <div className="drop-down">
      <ul>
        {items?.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.slug} onClick={handleMenuClick}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DropDown;
