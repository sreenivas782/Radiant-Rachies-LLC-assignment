import React from "react";
import "./App.css";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

const BanerPage = () => {
  return (
    <div className="Baner-box">
      <h1>Best Website builders in the US</h1>
      <ul className="Baner-ul">
        <li>Last Updated - February 22, 2020</li>
        <li>Advertising Disclosure</li>
        <li>
          <lable>Top Relevant</lable>
          <select></select>
        </li>
      </ul>
      <div className="Baner2-sec">
        <ul>
          <li>Tools</li>
          <li>AWS Builder</li>
          <li>Start Build</li>
          <li>Build Supplies</li>
          <li>Tooling</li>
          <li>BlueHosting</li>
        </ul>
      </div>
      <div className="Baner3-sec">
        <ul>
          <li>Home</li>
          <li>{">Hosting for all"}</li>
          <li>{">Hosting"}</li>
          <li>{">Hosting6"}</li>
          <li>{">Hosting5"}</li>
        </ul>
      </div>
      <div className="Banerc1">
        <h3 className="btn">1</h3>
        <div className="Banerc1-img">
          <img src="img1.png" />
        </div>

        <div className="Banerc1-c">
          <strong>WixPro 72-Inch Responsive Website Builder-</strong>
          <span>
            WixPro 72-Inch Responsive Website Builder- Comprehensive Digital
            Platform Creation Tool, Streamlined Design Interface for
            Professional Websites and Online Stores (Black/Blue)
          </span>
          <br />
          <br />

          <strong>Main highlights</strong>
          <p>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <lable>Show more</lable>
          <select></select>
        </div>
        <div className="Banerc1-d">
          <h2>9.8</h2>
          <p>Exceptional</p>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <span>
            <StarIcon />
            <StarIcon />
          </span>
          <button>View</button>
        </div>
      </div>

      <div className="Banerc1">
        <h3 className="btn">2</h3>
        <div className="Banerc1-img">
          <img src="img1.png" />
        </div>

        <div className="Banerc1-c">
          <strong>SiteCraft 68-Inch Ultimate Web Design Studio-</strong>
          <span>
            Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for
            Dynamic Websites and E-commerce Platforms (Green/White)
          </span>
          <br />
          <br />

          <strong>Main highlights</strong>
          <p>
            [What You Get]: Gain access to the SiteCraft design studio,
            featuring a robust selection of design elements, SEO optimization
            tools, and e- commerce integrations.
          </p>
          <lable>Show more</lable>
          <select></select>
        </div>
        <div className="Banerc1-d">
          <h2>9.5</h2>
          <p>Excellent</p>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <span>
            <StarIcon />
            < StarHalfIcon/>
          </span>
          <button>View</button>
        </div>
      </div>
      <div className="Banerc1">
        <h3 className="btn">3</h3>
        <div className="Banerc1-img">
          <img src="img1.png" />
        </div>

        <div className="Banerc1-c">
          <strong>WixPro 72-Inch Responsive Website Builder-</strong>
          <span>
            WixPro 72-Inch Responsive Website Builder- Comprehensive Digital
            Platform Creation Tool, Streamlined Design Interface for
            Professional Websites and Online Stores (Black/Blue)
          </span>
          <br />
          <br />

          <strong>Main highlights</strong>
          <p>
            [What You Get]: Receive the WixPro website builder suite, access to
            premium design templates, an extensive library of widgets and apps,
            and detailed step-by-step guides.
          </p>
          <lable>Show more</lable>
          <select></select>
        </div>
        <div className="Banerc1-d">
          <h2>9.3</h2>
          <p>Exceptional</p>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <span>
            <StarIcon />
            <StarIcon />
          </span>
          <button>View</button>
        </div>
      </div>
      <div className="Banerc1">
        <h3 className="btn">4</h3>
        <div className="Banerc1-img">
          <img src="img1.png" />
        </div>

        <div className="Banerc1-c">
          <strong>CDK Resposive Builder:</strong>
          <span>
            An extensive library of widgets and apps, and detailed step-by-step
            guides
          </span>
          <br />
          <br />

          <strong>Main highlights</strong>
          <p className="pink">
            9.9 building responsive <br /> <br />
            8.9 Cool
            <br /> <br />
            8.9 Docs
            </p>
          <p>
            <br />
            <h4>Why we love it</h4>
            <input type="checkbox" />
            Documentation
            <br />
            <input type="checkbox" />
            Easy Use
            <br />
            <input type="checkbox" />
            Out of box
            <br />
          </p>
          <lable>Show more</lable>
          <select></select>
        </div>
        <div className="Banerc4-d">
          <h2>9.1</h2>
          <p>VeryGood</p>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <span>
            <StarIcon />
            <StarOutlineIcon />
          </span>
          <button>View</button>
        </div>
      </div>
      <h1>Related deals you might like for</h1>

      <div className="Baneroff-box">
        <div className="Baneroff-1">
          <img src="img1.png" />
          <ul>
            <li>20% off</li>
            <li>Limited time</li>
          </ul>
          <strong>Webbuilder 1</strong>
          <p>Computer Modern clasic with wix support</p>
          <p>
            <span
              style={{ fontSize: "1.2em", fontWeight: "bold", color: "black" }}
            >
              $39.96
            </span>
            <span
              style={{
                fontSize: "0.8em",
                textDecoration: "line-through",
                color: "gray",
              }}
            >
              $49.96
            </span>

            <span style={{ fontSize: "0.8em", color: "green" }}>(20% Off)</span>
            <br />
          </p>
          <button>View</button>
        </div>

        <div className="Baneroff-1">
          <img src="img1.png" />
          <ul>
            <li>20% off</li>
            <li>Limited time</li>
          </ul>
          <strong>Webbuilder 1</strong>
          <p>Computer Modern clasic with wix support</p>
          <p>
            <span
              style={{ fontSize: "1.2em", fontWeight: "bold", color: "black" }}
            >
              $39.96
            </span>
            <span
              style={{
                fontSize: "0.8em",
                textDecoration: "line-through",
                color: "gray",
              }}
            >
              $49.96
            </span>

            <span style={{ fontSize: "0.8em", color: "green" }}>(20% Off)</span>
            <br />
          </p>
          <button>View</button>
        </div>

        <div className="Baneroff-1">
          <img src="img1.png" />
          <ul>
            <li>20% off</li>
            <li>Limited time</li>
          </ul>
          <strong>Webbuilder 1</strong>
          <p>Computer Modern clasic with wix support</p>
          <p>
            <span
              style={{ fontSize: "1.2em", fontWeight: "bold", color: "black" }}
            >
              $39.96
            </span>
            <span
              style={{
                fontSize: "0.8em",
                textDecoration: "line-through",
                color: "gray",
              }}
            >
              $49.96
            </span>

            <span style={{ fontSize: "0.8em", color: "green" }}>(20% Off)</span>
            <br />
          </p>
          <button>View</button>
        </div>
      </div>

      <div className="Baner-signup">
        <h2>
          Sign up and get exclusive <br />
          special deals
        </h2>
        <p>
          <input type="text" />
          <lable>Sign Up</lable>
        </p>
      </div>
      <div className="About-box">
        <div className="About-1">
          <strong>CATOGERIES</strong>
          <ul>
            <li> Web Builder</li><br/>
            <li> Hosting</li><br/>
            <li>Data Cente</li><br/>
            <li>Robotic-Automation</li><br/>
          </ul>
        </div>

        <div className="About-2">
          <strong>CONTACT</strong>
          <ul>
            <li> Contact</li><br/>
            <li> Privacy Policy</li><br/>
            <li>Terms Of Service</li><br/>
            <li>Categories</li><br/>
            <li>About</li>
          </ul>
        </div>

        <div className="About-3">
          <lable>United States</lable>
          <select>United States</select>
        </div>
      </div>
    </div>
  );
};

export default BanerPage;
