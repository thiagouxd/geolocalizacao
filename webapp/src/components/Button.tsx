import styled from "styled-components";

const Button = (props: any) => {
  const { children, onClick, type } = props;
  return (
    <CustomButton type={type} onClick={onClick}>{children}</CustomButton>
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
  box-shadow: 0 0 0 0 rgba(0,0,0,0.2);
  transition: .4s box-shadow ease-in-out;
  &:hover,&:focus {
    background-color: var(--color-neutral-700);
    box-shadow: 0 0 0 4px rgba(0,0,0,0.2);
  }
  &:active {
    transform: translate(0, -1px);
  }
`

export default Button