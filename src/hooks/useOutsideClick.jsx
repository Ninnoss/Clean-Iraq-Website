import { useEffect } from "react";

const useOutsideClick = (ref, handleClickOutside) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClickOutside();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ref, handleClickOutside]);
};

export default useOutsideClick;
