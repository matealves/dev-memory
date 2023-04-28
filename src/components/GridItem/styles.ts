import styled from "styled-components";

type ContainerProps = {
  showBackground: boolean;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) =>
    props.showBackground ? "#1770ff" : "#e2e3e3"};
  height: 100%;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (max-width: 750px) {
    width: 6rem;
    height: 6rem;
  }
`;

type IconProps = {
  opacity?: number;
};
export const Icon = styled.img<IconProps>`
  width: 2.5rem;
  height: 2.5rem;
  user-select: none;
  opacity: ${(props) => props.opacity ?? 1};
`;
