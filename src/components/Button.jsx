/* eslint-disable react/prop-types */
function Button({ type = 'submit', className = '', processing, children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-white bg-primaryGreen hover:bg-primaryOrange transition-all duration-300 rounded-md shadow-lg font-bold px-4 py-2 ${
        processing && 'opacity-75'} ${disabled ? 'cursor-not-allowed' : ''} ${className}`}
      disabled={disabled} // Disable the button if disabled prop is true
    >
      {children}
    </button>
  );
}

export default Button;
