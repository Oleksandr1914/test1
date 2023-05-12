import { ButtonBox } from "./Button.styled";

const Button = ({ children, onClick }) => {
  return <ButtonBox onClick={onClick}>{children}</ButtonBox>;
};

export default Button;
