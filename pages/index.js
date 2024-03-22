import dynamic from "next/dynamic";
import Link from "next/link";
import ContactForm from "../src/components/ContactForm";
import TestimonialSlider from "../src/components/TestimonialSlider";
import Layout from "../src/layout/Layout";
import { useSelector } from "react-redux";

const ProjectIsotop = dynamic(() => import("../src/components/ProjectIsotop"), {
  ssr: false,
});
const Index = () => {
  const usrData = useSelector((state) => state.value);

  return (
    <Layout>
      <section className="section section-started">
        <div className="container">
          {/* Hero Started */}
          <div className="hero-started">
            <div
              className="slide"
            >
              <img src={usrData.user?.about.avatar.url} alt="" />
              <span className="circle circle-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="749px"
                  height="375px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#ff8059"
                    d="M749.000,0.000 C749.000,206.786 581.459,374.514 374.608,374.514 C167.758,374.514 -0.000,206.786 -0.000,0.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#3aafc9"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="416px"
                  height="209px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#b9d1e4"
                    d="M-0.000,209.000 C-0.000,94.252 93.051,0.745 207.835,0.745 C322.619,0.745 416.000,94.252 416.000,209.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="121px"
                  height="241px"
                >
                  <path
                    fillRule="evenodd"
                    fill="#676cdb"
                    d="M0.000,0.000 C66.624,0.000 120.402,54.096 120.402,120.733 C120.402,187.371 66.624,241.000 0.000,241.000 "
                  />
                </svg>
              </span>
              <span className="circle circle-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="232px"
                  height="117px"
                >
                  <path
                    fillRule="evenodd"
                    fill="rgb(255, 208, 65)"
                    d="M232.000,0.000 C232.000,64.151 180.376,116.580 116.238,116.580 C52.100,116.580 0.000,64.151 0.000,0.000 "
                  />
                </svg>
              </span>
            </div>
            <div className="content">
              <div className="titles">
                <div
                  className="subtitle"
                >
                  {usrData.user?.about.title}
                </div>
                <h2
                  className="title"
                >
                  {usrData.user?.about.name}
                </h2>
              </div>
              <div
                className="description"
              >
                <p>
                  {usrData.user?.about.subTitle}
                </p>
                <div className="social-links">
                  {
                    usrData.user?.social_handles?.map((social, index) => (
                      <a key={index} target="_blank" rel="noreferrer" href={social.url}>
                        <img aria-hidden="true" src={social.image.url} width={25} />
                      </a>
                    ))
                  }
                </div>
              </div>
            </div>
            <div className="info-list">
              <ul>
                <li>
                  Born in <strong>{usrData.user?.about.address}</strong>
                </li>
                <li>
                  Experience <strong>{usrData.user?.about.exp_year} Years</strong>
                </li>
                <li>
                  Date of Birth <strong>{usrData.user?.about.dob}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-1"
        id="about-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              About Me
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-right">
              {/* Section numbers */}
              <div className="numbers-items">
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-check-circle" />
                  </div>
                  <div className="num">{usrData.user?.projects.length}</div>
                  <div className="title">
                    Completed <br />
                    Project
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-smile-beam" />
                  </div>
                  <div className="num">{usrData.user?.clients?.length}</div>
                  <div className="title">
                    Happy <br />
                    Clients
                  </div>
                </div>
                <div
                  className="numbers-item"
                >
                  <div className="icon">
                    <i aria-hidden="true" className="far fa-gem" />
                  </div>
                  <div className="num">{usrData.user?.awards?.length}</div>
                  <div className="title">
                    Awards <br />
                    Won
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Section Profile */}
              <div className="profile-box">
                <div
                  className="text"
                >
                  <p>
                    {usrData.user?.about.description}
                  </p>
                  <a
                    href="#contact-section"
                    className="btn"
                  >
                    <span>Contact Me</span>
                  </a>
                  <div
                    className="signature"
                  >
                    <img src={usrData.user?.about.signature} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-parallax section-parallax-2"
        id="resume-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Resume
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  {usrData.user?.about.description}
                </p>
              </div>
              {/* Skills */}
              <div className="skills-items">
                <div
                  className="p-title"
                >
                  SKILLS
                </div>
                {
                  usrData.user?.skills?.map((skill, index) => (
                    <div key={index}
                      className="skills-item"
                    >
                      <div key={index} className="name">{skill.name}</div>
                      <div className={`dots dots-${(skill.percentage % 10 >= 5) ? Math.ceil(skill.percentage / 10) * 10 : Math.floor(skill.percentage / 10) * 10}`}>
                        <div className="dots-row">
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                          <div className="dot" />
                        </div>
                      </div>
                      <div className="value">
                        <span className="num">{skill.percentage}%</span>
                      </div>
                    </div>
                  ))
                }
              </div>
              {/* Services */}
              <div
                className="p-title"
              >
                SERVICES
              </div>
              <div className="services-items">
                {
                  usrData.user?.services?.map((service, index) => (
                    <div key={index} className="services-col">
                      <div
                        className="services-item"
                      >
                        <div className="icon">
                          <img src={service.image.url} alt="icon" />
                        </div>
                        <div className="title">{service.name}</div>
                        <div className="text">
                          <p>
                            {service.desc}
                          </p>
                        </div>
                        <a href="#contact-section" className="lnk">
                          order now
                        </a>
                      </div>
                    </div>
                  ))
                }
              </div>
              {/* History */}
              <div className="history-left">
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    EDUCATION
                  </div>
                  {
                    usrData.user?.timeline?.map((tline, index) => (
                      tline.forEducation ?
                        <div key={index}
                          className="history-item"
                        >
                          <div className="date">{new Date(tline.startDate).getFullYear()} - {new Date(tline.endDate).getFullYear()}</div>
                          <div className="name">{tline.company_name}</div>
                          <div className="subname">{tline.jobTitle}</div>
                          <div className="text">
                            <p>
                              {tline.summary}
                            </p>
                          </div>
                        </div>
                        : <></>
                    ))
                  }
                </div>
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    AWARDS
                  </div>
                  {
                    usrData.user?.awards?.map((award, index) => (
                      <div key={index}
                        className="history-item"
                      >
                        <div className="date">{new Date(award.startDate).getFullYear()} - {new Date(award.endDate).getFullYear()}</div>
                        <div className="name">{award.title}</div>
                        <div className="text">
                          <p>
                            {award.description}
                          </p>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="history-right">
                <div className="history-items">
                  <div
                    className="p-title"
                  >
                    EXPERIENCE
                  </div>
                  {
                    usrData.user?.timeline?.map((tline, index) => (
                      !tline.forEducation ?
                        <div key={index}
                          className="history-item"
                        >
                          <div className="date">{new Date(tline.startDate).getFullYear()} - {new Date(tline.endDate).getFullYear()}</div>
                          <div className="name">{tline.company_name}</div>
                          <div className="subname">{tline.jobTitle}</div>
                          <div className="text">
                            <p>
                              {tline.summary}
                            </p>
                          </div>
                        </div> : <></>
                    ))
                  }
                </div>
              </div>
              <div className="clear" />
              {/* Button CV */}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://bslthemes.site/ober/wp-content/uploads/2021/12/Jacky-Smith-Resume.pdf"
                className="btn"
              >
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="section section-bg section-parallax section-parallax-5"
        id="works-section"
      >
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Projects
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  A Collection of my favorites project I’ve designed recently.
                  Feeling great while sharing here.
                </p>
              </div>
            </div>
          </div>
          {/* Works */}
          <ProjectIsotop />
        </div>
      </section>
      <section className="section" id="pricing-section">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              Pricing Plans
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Are you interested to work with me ? Here are my price list
                  for design related work. Lets talk about project !
                </p>
              </div>
            </div>
          </div>
          {/* Pricing */}
          <div className="pricing-items row">
            {
              usrData.user?.pricing?.map((price, index) => (
                <div key={index} className="pricing-col col-xs-12 col-sm-6 col-md-6 col-lg-4">
                  <div
                    className="pricing-item"
                  >
                    <div className="title">{price.title}</div>
                    <div className="subtitle">{price.subtitle}</div>
                    <div className="price">${price.price}</div>
                    <div className="text">
                      <ul>
                        {
                          price.services.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))
                        }
                      </ul>
                    </div>
                    <a href="#contact-section" className="btn">
                      <span>Hire Me</span>
                    </a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="section no-padding-top section-parallax section-parallax-4">
        <div className="container">
          {/* Testimonials */}
          <TestimonialSlider />
        </div>
      </section>
      <section className="section section-bg" id="blog-section">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Blog
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Suspendisse potenti. Sed egestas eros eu libero posuere
                  ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Blog */}
        <div className="blog-items">
          {
            usrData.user?.blogs?.map((blog, index) => (
              <div key={index} className="archive-item">
                <div className="image">
                  <Link href="/blog-single">
                    <a>
                      <img
                        src={blog.image.url}
                        alt={blog.title}
                      />
                    </a>
                  </Link>
                </div>
                <div className="desc">
                  <div
                    className="category"
                  >
                    {blog.category}
                    <br />
                    <span>{new Date(blog.createdAt).toDateString()}</span>
                  </div>
                  <h3
                    className="title"
                  >
                    <Link href="/blog-single">
                      <a>{blog.title}</a>
                    </Link>
                  </h3>
                  <div
                    className="text"
                  >
                    <p>
                      {blog.description}
                    </p>
                    <div className="readmore">
                      <Link href="/blog-single">
                        <a className="lnk">Read more</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="blog-more-link">
          <Link href="/blog">
            <a
              className="btn"
            >
              <span>View Blog</span>
            </a>
          </Link>
        </div>
      </section>
      <section className="section section-parallax section-parallax-5">
        <div className="container">
          {/* Section Heading */}
          <div className="m-titles">
            <h2
              className="m-title"
            >
              My Clients
            </h2>
          </div>
          <div className="row row-custom">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3"></div>
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 vertical-line">
              {/* Description */}
              <div
                className="text"
              >
                <p>
                  Suspendisse potenti. Sed egestas eros eu libero posuere
                  ultrices. Nullam ut aliquet felis, sit amet imperdiet felis.
                </p>
              </div>
            </div>
          </div>
          <div className="row clients-items">
            {
              usrData.user?.clients?.map((client, index) => (
                <div key={index} className="col-xs-12 col-sm-12 col-md-3 col-lg-3 align-center">
                  <div className="clients-item">
                    <img src={client.image.url} alt="" />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <ContactForm />
    </Layout>
  );
};
export default Index;
