import styled from "styled-components";

type Props = {
  children: string,
  onClick: any
};

const Button = ({ children, onClick }: Props) => {
  return (
    <CustomButton type="button" onClick={onClick}>{children}</CustomButton>
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
  font-family: var(--font-family-default);
  font-style: normal;
  font-weight: var(--font-weight-semibold);
  font-size: 16px;
  height: 48px;
  cursor: pointer;
`

export default Button