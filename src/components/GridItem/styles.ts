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
`;

type IconProps = {
  opacity?: number;
};
export const Icon = styled.img<IconProps>`
  width: 40px;
  height: 40px;
  user-select: none;
  opacity: ${(props) => props.opacity ?? 1};
`;
