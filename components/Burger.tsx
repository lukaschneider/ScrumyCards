import styled from "styled-components";

import { spacingS } from "./Layouts";

const Line = styled.div`
  position: relative;
  width: 30px;
  height: 3px;
  border-radius: 1.5px;
  background-color: ${({ theme }) => theme.controll};
  transition: all 100ms ease-in-out;
`;

const TopLine = styled(Line)`
  width: 30px;
  top: ${({ open }: Burger) => (open ? "1.5px" : "-5px")};
  transform: ${({ open }: Burger) =>
    open ? "rotate(-45deg)" : "rotate(0deg)"};
`;

const BottomLine = styled(Line)`
  width: ${({ open }: Burger) => (open ? "30px" : "23px")};
  top: ${({ open }: Burger) => (open ? "-1.5px" : "5px")};
  transform: ${({ open }: Burger) => (open ? "rotate(45deg)" : "rotate(0deg)")};
`;

const BurgerHost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: ${spacingS}px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

interface Burger {
  className?: string;
  open?: boolean;
}

export default ({ className, open }: Burger) => {
  return (
    <BurgerHost className={className}>
      <TopLine open={open} />
      <BottomLine open={open} />
    </BurgerHost>
  );
};
