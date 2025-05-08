import React from "react";
import { ChevronRight } from "lucide-react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BreadCrumb = ({ items }) => {
  return (
    <nav className="bg-gray-100/10 backdrop-blur-sm px-6 py-3 text-sm font-medium rounded-lg">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index !== 0 && (
              <ChevronRight className="w-4 h-4 mx-2 text-white drop-shadow-md" />
            )}
            {index !== items.length - 1 ? (
              <Link
                to={item.href}
                className="hover:underline text-white drop-shadow-md"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-green-300 drop-shadow-md">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

BreadCrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
    })
  ).isRequired,
};

export default BreadCrumb;
