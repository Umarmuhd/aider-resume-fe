import React from "react";

import HomeNav from "../components/home-navbar/HomeNav";
import {
  StyledHome,
  StyledHeroSection,
  StyledPraiseSection,
  StyledFeaturesSection,
  StyledHowSection,
  StyledBenefitsSection,
} from "../styles/StyledHome";
import HeroImage from "../assets/hero-image.png";
import TestOne from "../assets/testone.png";
import TestTwo from "../assets/testtwo.png";
import TestThree from "../assets/testthree.png";
import RatingStar from "../assets/rating-star.png";
import Google from "../assets/Google.png";
import Amazon from "../assets/Amazon.png";
import Facebook from "../assets/Facebook.png";
import Netflix from "../assets/Netflix.png";
import MasterCard from "../assets/Mastercard.png";
import Whatsapp from "../assets/Whatsapp.png";
import Duet from "../assets/Duet.png";
import Walmart from "../assets/Walmart.png";
import Mckesson from "../assets/Mckesson.png";
import BigResume from "../assets/big-resume-img.png";
import BigMark from "../assets/big-mark.svg";
import SmallResume1 from "../assets/small-resume-1.png";
import SmallResume2 from "../assets/small-resume-2.png";
import SmallMark from "../assets/small-mark.svg";
import SimpleElegant from "../assets/simple-elegant.png";
import DragDrop from "../assets/drag-drop.png";
import SaveDownload from "../assets/save-download.png";
import Upload from "../assets/upload.png";
import Edit from "../assets/edit.png";
import Download from "../assets/download.png";
import ResumeBenefit from "../assets/benefit-resume.png";
import Doc from "../assets/doc.png";
import Doc2 from "../assets/doc2.png";
import Msword from "../assets/ms-word.png";
import Pdf from "../assets/pdf.png";
import Pdf2 from "../assets/pdf2.png";
import ResumeCarousel from "../components/resume-carousel/ResumeCarousel";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <HomeNav />
      <StyledHome>
        <StyledHeroSection id="hero" className="hero-container">
          <div className="hero-content">
            <h1 className="hero-heading">
              Stand out with a professional resume.
            </h1>
            <p className="hero-text">
              With Aider you get numerous templates that are professionally
              designed to suit your various needs and will make you stand out in
              your job search.
            </p>
            <button className="get-started-btn">Get started</button>
          </div>
          <div className="hero-img-container">
            <img src={HeroImage} alt="hero img w-100" className="hero-img" />
            <div className="testimonial-card testimonial-1">
              <div className="photo-n-info flex">
                <div className="testimonial-pic">
                  <img src={TestOne} alt="testimonial img" />
                </div>
                <div className="info-box">
                  <p className="testimonial-name">Israel Adavise</p>
                  <p className="testimonial-role">
                    Frontend Developer, Microsoft
                  </p>
                </div>
              </div>
              <p className="testimoial-text">
                Aider’s easy to use interface allowed me to create multiple
                resumes for different job applicartions, a 10/10 for me.
              </p>
              <div className="testimonial-rating">
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
              </div>
            </div>
            <div className="testimonial-card testimonial-2">
              <div className="photo-n-info flex">
                <div className="testimonial-pic">
                  <img src={TestTwo} alt="testimonial img" />
                </div>
                <div className="info-box">
                  <p className="testimonial-name">Motunrayo Illawole</p>
                  <p className="testimonial-role">Fullstack Developer, Unity</p>
                </div>
              </div>
              <p className="testimoial-text">
                Aider offers a pleasant feel to resumes that isnt really
                available elsewhere, its really refrehing and unique.
              </p>
              <div className="testimonial-rating">
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
              </div>
            </div>
            <div className="testimonial-card testimonial-3">
              <div className="photo-n-info flex">
                <div className="testimonial-pic">
                  <img src={TestThree} alt="testimonial img" />
                </div>
                <div className="info-box">
                  <p className="testimonial-name">Harith Pendragon</p>
                  <p className="testimonial-role">
                    Frontend Developer, Netflix
                  </p>
                </div>
              </div>
              <p className="testimoial-text">
                Aider helped me alot in my job search and made me stand out
                among all the applicants in my application to Netflix.
              </p>
              <div className="testimonial-rating">
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
                <img src={RatingStar} alt="rating star img" />
              </div>
            </div>
          </div>
        </StyledHeroSection>
        <StyledPraiseSection>
          <h2 className="section-title">
            Our users are getting hired by companies worldwide.
          </h2>
          <p className="praise-text">
            Building your resume with us will give it that professional look
            needed to land an amazing job in Fortune 500 companies.
          </p>
          <button className="build-resume">Build My Resume</button>
          <div className="companies-list">
            <div className="top-list">
              <img src={Google} alt="Google img" />
              <img src={Amazon} alt="Amazon img" />
              <img src={Facebook} alt="Facebook img" />
              <img src={Netflix} alt="Netflix img" />
              <img src={MasterCard} alt="Mastercard img" />
            </div>
            <div className="bottom-list">
              <img src={Whatsapp} alt="Whatsapp img" />
              <img src={Duet} alt="Duet img" />
              <img src={Walmart} alt="Walmart img" />
              <img src={Mckesson} alt="Mckesson img" />
            </div>
          </div>
        </StyledPraiseSection>
        <StyledFeaturesSection className="features-container">
          <div className="features-img-container">
            <div className="big-img">
              <img src={BigMark} alt="big mark" className="big-mark" />
              <img src={BigResume} alt="Resume" className="resume-img-big" />
            </div>
            <div className="small-img small-img-1">
              <img src={SmallMark} alt="small mark" className="small-mark" />
              <img src={SmallResume1} alt="Resume" className="resume-small" />
            </div>
            <div className="small-img small-img-2">
              <img src={SmallMark} alt="small mark" className="small-mark" />
              <img src={SmallResume2} alt="Resume" className="resume-small" />
            </div>
          </div>
          <div className="features-content">
            <h2 className="section-title">
              Asides being an amazing resume builder...
            </h2>
            <p className="section-desc">
              ...other features our users love about us include the following.
            </p>
            <ul>
              <li>
                <div className="feature-img">
                  <img src={SimpleElegant} alt="simple elegant img" />
                </div>
                <div className="feature-info">
                  <h3>Simple and Elegant</h3>
                  <p>
                    aider offers amazing minimalistic resume templates gotten
                    from the best designers who have a keen sense for
                    aesthetics.
                  </p>
                </div>
              </li>
              <li>
                <div className="feature-img">
                  <img src={DragDrop} alt="drag drop img" />
                </div>
                <div className="feature-info">
                  <h3>Drag and Drop</h3>
                  <p>
                    With aider you can easily drop contents from previously
                    created resumes, allowing seamless creation and reuse.
                  </p>
                </div>
              </li>
              <li>
                <div className="feature-img">
                  <img src={SaveDownload} alt="save download img" />
                </div>
                <div className="feature-info">
                  <h3>Save or Download</h3>
                  <p>
                    aider offers the option of saving and downloading your
                    created resumes. Save and continue editing later.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </StyledFeaturesSection>
        <StyledHowSection className="how-it-works">
          <h2 className="section-title">How it Works</h2>
          <p className="section-desc">
            Using aider resume builder is simple and very straightforward.
          </p>
          <div className="how-it-works-container">
            <div className="upload-box how-item">
              <img src={Upload} alt="upload img" />
              <h3 className="how-item-title">Upload</h3>
              <p className="how-item-desc">
                Upload or add your qualifications to your selected template.
              </p>
            </div>
            <div className="edit-box how-item">
              <img src={Edit} alt="edit img" />
              <h3 className="how-item-title">Edit</h3>
              <p className="how-item-desc">
                Select from themes of bulletpoints to match your skills.
              </p>
            </div>
            <div className="download-box how-item">
              <img src={Download} alt="download img" />
              <h3 className="how-item-title">Download</h3>
              <p className="how-item-desc">
                After applying your desired changes you can download your
                resume.
              </p>
            </div>
          </div>
        </StyledHowSection>
        <StyledBenefitsSection className="benefits-container">
          <div className="benefits-images-container">
            <img src={ResumeBenefit} alt="resume img" className="resume-ben" />
            <img src={Msword} alt="msword img" className="msword-img" />
            <img src={Pdf} alt="pdf img" className="pdf-img1" />
            <img src={Doc} alt="doc img" className="doc-img1" />
            <img src={Pdf2} alt="pdf img" className="pdf-img2" />
            <img src={Doc2} alt="doc img" className="doc-img2" />
          </div>
          <div className="benefits-content">
            <h2 className="section-title">
              Aider allows you to download in multiple formats
            </h2>
            <p>
              With aider you can download your resumes in different formats such
              as PDF, DOC, or Word formart.
            </p>
            <button className="build-resume">Build My Resume</button>
          </div>
        </StyledBenefitsSection>
      </StyledHome>
      {/* <Footer /> */}
    </>
  );
}

export default Home;
