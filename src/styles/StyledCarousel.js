import tw, { styled } from "twin.macro";

export const StyledResumeCarousel = styled.div`
  ${tw`relative shadow-2xl bg-white`}
  & {
    div.carousel-inner {
      ${tw`relative overflow-hidden w-full`}
      & {
      }
    }
    .carousel-open:checked + .carousel-item {
      ${tw``}
      & {
        position: static;
        opacity: 100;
      }
    }

    .carousel-item {
      ${tw`absolute opacity-0`}
      & {
        -webkit-transition: opacity 0.6s ease-out;
        transition: opacity 0.6s ease-out;
      }
    }

    .carousel-item div {
      ${tw`block h-full w-full bg-indigo-500 text-white text-5xl text-center`}
      & {
      }
    }

    #carousel-1:checked ~ .control-1,
    #carousel-2:checked ~ .control-2,
    #carousel-3:checked ~ .control-3 {
      ${tw``}
      & {
        display: block;
      }
    }

    .carousel-indicators {
      ${tw``}
      & {
        list-style: none;
        margin: 0;
        padding: 0;
        position: absolute;
        bottom: 2%;
        left: 0;
        right: 0;
        text-align: center;
        z-index: 10;
      }
    }

    #carousel-1:checked
      ~ .control-1
      ~ .carousel-indicators
      li:nth-child(1)
      .carousel-bullet,
    #carousel-2:checked
      ~ .control-2
      ~ .carousel-indicators
      li:nth-child(2)
      .carousel-bullet,
    #carousel-3:checked
      ~ .control-3
      ~ .carousel-indicators
      li:nth-child(3)
      .carousel-bullet {
      ${tw``}
      & {
        color: #2b6cb0;
      }
    }
  }
`;
