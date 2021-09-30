import styled from "styled-components";

type Props = {
  children: string,
};

const Title = ({ children }: Props) => (
  <FooterTitle>
    {children}
  </FooterTitle>
);

const FooterTitle = styled.h2`
  color: var(--color-neutral-100);
  font-size: 16px;
  font-weight: bold;
  line-height: 150%;
  text-transform: uppercase;
`

export default Title
