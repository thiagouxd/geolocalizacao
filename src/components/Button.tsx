import styled from "styled-components";

type Props = {
  children: string,
};

const Button = ({ children }: Props) => {
  return (
    <CustomButton>{children}</CustomButton>
  )
}

const CustomButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 24px;
  background: var(--color-primary);
  border-radius: 50px;
  margin: 16px 0px;
  color: var(--color-neutral-100);
  border: 0;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  height: 48px;
`

export default Button