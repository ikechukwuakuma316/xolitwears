import styled from "styled-components";

// export const CardContainer = styled.div`
//   border: 1px solid #eee;
//   box-shadow: 0 2px 2px #ccc;
//   height: auto;
//   width: 210px;
//   top: 10px;
//   padding: 10px;
//   margin-left: 150px;
//   border-radius: 2px;
// `;

// export const CardImage = styled.img`
//   width: 100%;
//   height: 170px;
// `;

// export const CardDescription = styled.div`
//   h3 {
//     font-size: 10px;
//   }
//   p {
//     font-size: 12px;
//     color: #778899;
//   }
// `;

const Card = {
  Container: styled.div`
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    height: auto;
    width: 100%;
    top: 10px;
    padding: 10px;
    border-radius: 2px;
  `,
  Image: styled.img`
    width: 100%;
    height: 170px;
  `,
  Description: styled.div`
    h3 {
      font-size: 10px;
    }
    p {
      font-size: 12px;
      color: #778899;
    }
  `,
};

export default Card;
