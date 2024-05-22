// styles.ts
import styled, { css } from "styled-components";

export const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f8f9fa;
  min-height: 100vh;
`;

export const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
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
  width: 100%;
  padding: 10px 20px;
  background-color: ${({ isTop, isEven }) =>
    isTop ? "#5073B8" : isEven ? "#f4f4f4" : "#ffffff"};
  color: ${({ isTop }) => (isTop ? "#ffffff" : "#000000")};
  font-weight: ${({ isTop }) => (isTop ? "bold" : "normal")};
  transition: transform 0.5s ease-in-out;
  transform: ${({ position, previousPosition }) =>
    `translateY(${(position - previousPosition) * 100}%)`};

  &:not(:last-child) {
    border-bottom: 1px solid #e0e0e0;
  }

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 15px;
  }

  div {
    flex-grow: 1;
  }

  .score {
    font-size: 1.2em;
  }
`;
