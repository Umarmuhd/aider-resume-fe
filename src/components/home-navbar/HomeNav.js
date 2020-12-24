import React from "react";
import { Link } from "react-router-dom";
import { StyledNav } from "../../styles/StyledNav";

function HomeNav() {
  return (
    <StyledNav>
      <div class="flex items-center justify-between mb-4 md:mb-0">
        <h1>
          <Link class="nav-brand" to="/">
            aider
          </Link>
        </h1>

        <button class="hamburger">
          <i class="fa fa-2x fa-bars"></i>
        </button>
      </div>

      <nav>
        <ul className="nav-items">
          <li className="nav-item">
            <Link class="nav-link" to="/">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/">
              Templates
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/">
              Samples
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link" to="/">
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link class="nav-link register" to="/">
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </StyledNav>
  );
}

export default HomeNav;
