import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90vw;
  margin: 2em;
  height: auto;
  flex-direction: row;
`;

export const SkillsContainer = styled.div``;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4em;
  height: 12em;
  width: 10em;
  color: #b127e8;
  border: 1px solid #b127e8;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 10px #b127e8;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

export const ImageHolder = styled.div`
  justify-content: center;
  font-size: 3.25em;
  color: #f2f2f2;
`;

export const TitleContainer = styled.div`
  font-family: "Montserrat";
  font-weight: 400;
  font-size: 1.1em;
  color: #b127e8;
  margin: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
`;
