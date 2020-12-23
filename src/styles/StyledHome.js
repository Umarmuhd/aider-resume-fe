import tw, { styled } from "twin.macro";

export const StyledHome = styled.main`
  & {
    padding: 0 8.47% 0 8.47%;
    margin-top: 300px;
    color: #595959;
  }
`;

export const StyledHeroSection = styled.section`
  ${tw`flex justify-between`}
  & {
    div.hero-content {
      ${tw``}
      & {
        width: 45%;
      }
    }

    h1.hero-heading {
      ${tw`mb-4 font-semibold`}
      & {
        font-size: 35px;
        line-height: 47px;
        margin-top: 54px;
      }
    }

    p.hero-text {
      ${tw`mb-6 font-normal`}
      & {
        font-size: 20px;
        line-height: 27px;
        color: #595959;
      }
    }

    button.get-started-btn {
      ${tw`text-white font-semibold border-0`}
      & {
        font-size: 20px;
        line-height: 24px;
        padding: 29px 87px;
        background: #3278e2;
        background: #3278e2;
        border-radius: 8px;
      }
    }

    div.hero-img-container {
      ${tw``}
      & {
        background: #558fe7;
        border-radius: 12px 12px 0px 0px;
        height: 556.5px;
        position: relative;
        // width: 38%;
      }
    }

    div.hero-img-container .hero-img {
      & {
        height: 700px;
        position: relative;
        bottom: 145px;
        width: 100%;
      }
    }

    div.hero-img-container .testimonial-card {
      ${tw``}
      & {
        background: #393939;
        padding: 24px 15px;
        width: 290px;
        color: #ffffff;
        border-radius: 8px;
      }
    }

    div.hero-img-container .testimonial-1 {
      ${tw``}
      & {
        position: absolute;
        top: 220px;
        left: -138px;
      }
    }

    div.hero-img-container .testimonial-2 {
      ${tw``}
      & {
        position: absolute;
        top: 142.5px;
        right: -112.83px;
      }
    }

    div.hero-img-container .testimonial-3 {
      ${tw``}
      & {
        position: absolute;
        top: 410.5px;
        right: -97.83px;
      }
    }

    div.hero-img-container .testimonial-card .photo-n-info {
      ${tw`flex mb-2`}
    }

    div.hero-img-container .testimonial-card .photo-n-info .testimonial-pic {
      ${tw`flex items-center mr-2`}
    }

    div.hero-img-container .testimonial-card .photo-n-info p.testimonial-name {
      ${tw`mb-2 font-semibold`}
      & {
        font-size: 12px;
        line-height: 15px;
      }
    }

    div.hero-img-container .testimonial-card .photo-n-info p.testimonial-role {
      ${tw`font-normal`}
      & {
        font-size: 10px;
        line-height: 12px;
      }
    }

    div.hero-img-container .testimonial-card p.testimoial-text {
      ${tw`font-semibold mb-2`}
      & {
        font-family: Montserrat;
        font-size: 10px;
        line-height: 15px;
      }
    }

    div.hero-img-container .testimonial-card .testimonial-rating img {
      ${tw`mr-2`}
    }
  }
`;

export const StyledPraiseSection = styled.section`
  ${tw`text-center`}
  & {
    margin-top: 138px;

    h2.section-title {
      ${tw`text-center mx-auto font-semibold mb-2`}
      & {
        width: 36.79%;
        font-size: 30px;
        line-height: 40px;
      }
    }

    p.praise-text {
      ${tw`text-center mx-auto font-normal mb-8`}
      & {
        width: 45%;
        font-size: 16px;
        line-height: 23px;
      }
    }

    button.build-resume {
      ${tw`text-center mx-auto text-white border-0 font-semibold mb-12`}
      & {
        background: #3278e2;
        border-radius: 8px;
        font-size: 16px;
        line-height: 20px;
        padding: 26.5px 60.5px;
      }
    }

    div.companies-list .top-list {
      ${tw`flex justify-between`}
      & {
        margin-bottom: 80px;
      }
    }

    div.companies-list .bottom-list {
      ${tw`flex justify-between mx-auto`}
      & {
        width: 80%;
      }
    }
  }
`;

export const StyledFeaturesSection = styled.section`
  ${tw`flex justify-between`}
  & {
    margin-top: 120px;

    div.features-img-container {
      ${tw`font-semibold mb-2`}
      & {
        position: relative;
        box-shadow: 0px 16px 24px rgba(85, 143, 231, 0.2),
          0px 2px 6px rgba(85, 143, 231, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04);
        border-radius: 12px;
      }
    }

    div.features-img-container .big-img {
      ${tw``}
      & {
        position: relative;
      }
    }

    div.features-img-container .big-img img.big-mark {
      ${tw``}
      & {
        position: absolute;
        top: -30px;
        right: -27px;
      }
    }

    div.features-img-container .small-img {
      ${tw``}
      & {
        position: relative;
        max-width: fit-content;
      }
    }

    div.features-img-container .small-img-1 {
      ${tw``}
      & {
        position: absolute;
        max-width: fit-content;
        top: 170px;
        right: -55px;
        background: #fafafa;
        box-shadow: 0px 16px 24px rgba(196, 196, 196, 0.2),
          0px 2px 6px rgba(196, 196, 196, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04);
        border-radius: 12px;
      }
    }

    div.features-img-container .small-img-2 {
      ${tw``}
      & {
        position: absolute;
        max-width: fit-content;
        top: 348px;
        left: -98px;
        background: #fafafa;
        box-shadow: 0px 16px 24px rgba(196, 196, 196, 0.2),
          0px 2px 6px rgba(196, 196, 196, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04);
        border-radius: 12px;
      }
    }

    div.features-img-container .small-img img.small-mark {
      ${tw``}
      & {
        position: absolute;
        top: -20px;
        right: -17px;
      }
    }

    div.features-content {
      ${tw``}
      & {
        width: 50%;
      }
    }

    h2.section-title {
      ${tw`text-left font-semibold mb-2`}
      & {
        font-size: 30px;
        line-height: 40px;
      }
    }

    p {
      ${tw`text-left font-normal mb-0`}
      & {
        font-size: 16px;
        line-height: 23px;
      }
    }

    div.features-content ul {
      ${tw`mt-8`}
    }

    div.features-content ul li {
      ${tw`flex justify-between`}
      & {
        margin-bottom: 40px;
      }
    }

    div.features-content ul li .feature-info h3 {
      ${tw`mb-2 font-semibold`}
      & {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
`;

export const StyledHowSection = styled.section`
  ${tw`text-center`}
  & {
    margin-top: 120px;

    h2.section-title {
      ${tw`font-semibold mb-2 text-center`}
      & {
        font-size: 30px;
        font-weight: 600;
        line-height: 37px;
      }
    }

    p {
      ${tw`text-center font-normal mb-0`}
      & {
        font-size: 16px;
        line-height: 23px;
      }
    }

    div.how-it-works-container {
      ${tw`flex justify-between mt-12`}
      & {
      }
    }

    div.how-it-works-container .how-item {
      ${tw``}
      & {
        width: 32%;
        padding: 82px 66px;
        background: #fafafa;
        border-radius: 12px;
      }
    }

    div.how-it-works-container .how-item h3 {
      ${tw`mb-2 font-semibold`}
      & {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }
`;

export const StyledBenefitsSection = styled.section`
  ${tw`flex justify-between`}
  & {
    margin-top: 180px;

    div.benefits-images-container {
      ${tw``}
      & {
        position: relative;
      }
    }

    div.benefits-images-container img.resume-ben {
      ${tw``}
      & {
        background: #cccccc;
        box-shadow: 0px 16px 24px rgba(204, 204, 204, 0.2),
          0px 2px 6px rgba(204, 204, 204, 0.12), 0px 0px 1px rgba(0, 0, 0, 0.04);
        border-radius: 12px;
        transform: rotate(-4deg);
        width: 457px;
        height: 653.71px;
      }
    }

    div.benefits-images-container img.msword-img {
      ${tw``}
      & {
        position: absolute;
        top: -14px;
        left: -42px;
      }
    }

    div.benefits-images-container img.pdf-img1 {
      ${tw``}
      & {
        position: absolute;
        top: -80px;
        right: 165px;
      }
    }

    div.benefits-images-container img.doc-img1 {
      ${tw``}
      & {
        position: absolute;
        top: 260px;
        left: -65px;
      }
    }

    div.benefits-images-container img.pdf-img2 {
      ${tw``}
      & {
        position: absolute;
        bottom: 80px;
        right: -75px;
      }
    }

    div.benefits-images-container img.doc-img2 {
      ${tw``}
      & {
        position: absolute;
        left: -95px;
        bottom: -75px;
      }
    }

    div.benefits-content {
      ${tw``}
      & {
        width: 50%;
      }
    }

    h2.section-title {
      ${tw`text-left font-semibold mb-2`}
      & {
        font-size: 30px;
        line-height: 40px;
      }
    }

    p {
      ${tw`text-left font-normal mb-12`}
      & {
        font-size: 16px;
        line-height: 23px;
      }
    }

    button.build-resume {
      ${tw`text-center mx-auto text-white border-0 font-semibold mb-12`}
      & {
        background: #3278e2;
        border-radius: 8px;
        font-size: 16px;
        line-height: 20px;
        padding: 26.5px 60.5px;
      }
    }
  }
`;
