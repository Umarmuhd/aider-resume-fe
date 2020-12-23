import tw, { styled, theme } from "twin.macro"; // new

export const StyledButton = styled.button`
  ${tw`rounded border text-white font-semibold`};

  & {
    background: #3278e2;
    font-size: 20px;
    line-height: 24px;
    padding: 29px 87px;
  }

  // &:hover {
  //   font-size: 2rem;
  // }
`;

// or
// & {
//   background-color: yellow;
// }

// conditional styling
// import tw, { styled, theme, css } from 'twin.macro'; // modified

// export const StyledButton = styled.button(() => [
//     tw`py-3 px-8 uppercase rounded border border-primary hover:bg-primary duration-200`,

//     css`
//         & {
//             background-color: ${theme`colors.whiteAlt`};
//         }

//         &:hover {
//             font-size: 2rem;
//         }
//     `,
// ]);

// finally

// import tw, { styled, theme, css } from 'twin.macro';

// export const StyledButton = styled.button(({ isSecondary }) => [
//     // updated
//     tw`py-3 px-8 uppercase rounded border border-primary hover:bg-primary duration-200`,

//     css`
//         & {
//             background-color: ${theme`colors.whiteAlt`};
//         }

//         &:hover {
//             font-size: 2rem;
//         }
//     `,

//     isSecondary && tw`border-secondary hover:bg-secondary hover:text-white`, // new
// ]);
