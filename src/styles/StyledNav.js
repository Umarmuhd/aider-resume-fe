import tw, { styled } from "twin.macro"; // new

export const StyledNav = styled.header`
  ${tw`md:flex md:items-center md:justify-between py-8 pb-0 md:pb-4`}
  & {
    padding-left: 8.47%;
    padding-right: 8.47%;
    h1 {
      ${tw`leading-none text-2xl text-gray-900`}
      & {
      }
    }

    a.nav-brand {
      ${tw`no-underline font-semibold hover:text-black`}
      & {
        font-size: 22px;
        line-height: 27px;
        color: #3278e2;
      }
    }

    button.hamburger {
      ${tw`text-black hover:text-red-600 md:hidden`}
      & {
      }
    }

    nav ul.nav-items {
      ${tw`list-none p-0 md:flex md:items-center`}
      & {
      }
    }

    li.nav-item {
      ${tw`md:ml-12`}
      & {
      }
    }

    a.nav-link {
      ${tw`block no-underline py-2 md:border-none md:p-0 font-semibold`}
      & {
        font-size: 16px;
        line-height: 20px;
        color: #393939;
      }
      &:hover {
        color: #3278e2;
      }
    }

    a.nav-link.register {
      ${tw`block no-underline py-2 md:border-none md:p-0 text-white font-semibold`}
      & {
        font-size: 16px;
        line-height: 20px;
        background: #3278e2;
        border-radius: 8px;
        padding: 27px 70px;
      }
      &:hover {
        color: #3278e2;
        background: transparent;
        border: 1px solid #3278e2;
      }
    }
  }
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
