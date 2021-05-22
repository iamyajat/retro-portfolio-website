const Button = ({ text, onClick, design }) => {
  return (
    <>
      <div onClick={onClick} className={design}>
        <h3>{text}</h3>
      </div>
    </>
  );
};

Button.defaultProps = {
  design: "btn",
};

export default Button;
