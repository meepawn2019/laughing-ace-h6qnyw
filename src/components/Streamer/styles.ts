import styled, { keyframes } from "styled-components";

export const MovingAnimations = (position: number, previousPosition: number) => keyframes`
  0% {
    transform: translateY(${(previousPosition - position) * 60}px);
  }

  100% {
    transform: translateY(0);
  }
`;

export const StreamerContainer = styled.div<{
  position: number;
  previousPosition: number;
  isTop: boolean;
  isEven: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  width: 100%;
  height: 60px;
  background-color: ${({ isTop, isEven }) =>
    isTop ? "#5073B8" : isEven ? "#f4f4f4" : "#ffffff"};
  color: ${({ isTop }) => (isTop ? "#ffffff" : "#000000")};
  font-weight: ${({ isTop }) => (isTop ? "bold" : "normal")};
  animation: ${props => MovingAnimations(props.position, props.previousPosition)};
  animation-duration: 1s;

  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }

  .score {
    font-size: 1.2em;
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;