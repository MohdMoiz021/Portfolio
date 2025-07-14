
import Link from "next/link"

export default function Service1() {
	return (
		<>

			<section className="section-service-1 pt-120 pb-120">
	<div className="container">
  <div className="row align-items-end">
    <div className="col-lg-7 me-auto">
      <h3 className="ds-3 mt-3 mb-3 text-primary-1">What do I offer?</h3>
      <span className="fs-5 fw-medium text-200">
        My journey started with a passion for solving real-world problems using code,
        <br />
        which led me to master full stack development, cloud tech, and intelligent systems.
      </span>
    </div>
    <div className="col-lg-auto">
      <Link href="/#contact" className="btn btn-gradient mt-lg-0 mt-5 ms-lg-auto">
        Get a Quote
        <i className="ri-arrow-right-up-line" />
      </Link>
    </div>
  </div>

  <div className="row mt-6 justify-content-between">
    {/* 01. Full Stack Web Development */}
    <div className="col-12">
      <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-1.png">
        <div className="service-card-details d-lg-flex align-items-center">
          <h3 className="service-card-title w-lg-50 w-100 mb-0">
            <Link href="/work-single">
              <span className="service-number">01.</span>
              Full Stack Web Development
            </Link>
          </h3>
          <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
            <p className="service-card-text my-3">
              Building fast, scalable web apps using MERN stack, RESTful APIs, and modern frontend frameworks like React and Angular.
            </p>
            <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
              <i className="ri-arrow-right-up-line" />
            </div>
          </Link>
        </div>
      </div>
    </div>

    {/* 02. Mobile App Development */}
    <div className="col-12">
      <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-2.png">
        <div className="service-card-details d-lg-flex align-items-center">
          <h3 className="service-card-title w-lg-50 w-100 mb-0">
            <Link href="/work-single">
              <span className="service-number">02.</span>
              Mobile App Development
            </Link>
          </h3>
          <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
            <p className="service-card-text my-3">
              Developing cross-platform mobile applications using React Native for Android and iOS, with seamless performance.
            </p>
            <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
              <i className="ri-arrow-right-up-line" />
            </div>
          </Link>
        </div>
      </div>
    </div>

    {/* 03. Cloud Solutions */}
    <div className="col-12">
      <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3" data-fx={1} data-img="assets/imgs/services/services-1/img-3.png">
        <div className="service-card-details d-lg-flex align-items-center">
          <h3 className="service-card-title w-lg-50 w-100 mb-0">
            <Link href="/work-single">
              <span className="service-number">03.</span>
              Cloud Architecture & DevOps
            </Link>
          </h3>
          <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
            <p className="service-card-text my-3">
              Deploying applications on AWS, Azure, or Vercel with CI/CD pipelines, containerization, and scalable cloud infrastructure.
            </p>
            <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
              <i className="ri-arrow-right-up-line" />
            </div>
          </Link>
        </div>
      </div>
    </div>

    {/* 04. AI / ML Integration */}
    <div className="col-12">
      <div className="single-service-card-1 tg-img-reveal-item w-100 border-top border-900 p-3 border-bottom" data-fx={1} data-img="assets/imgs/services/services-1/img-4.png">
        <div className="service-card-details d-lg-flex align-items-center">
          <h3 className="service-card-title w-lg-50 w-100 mb-0">
            <Link href="/work-single">
              <span className="service-number">04.</span>
              AI & Machine Learning Integration
            </Link>
          </h3>
          <Link href="/#" className="d-md-flex d-block ps-lg-10 align-items-center justify-content-end w-100">
            <p className="service-card-text my-3">
              Integrating smart features like recommendation systems, chatbots, and automation using ML models and Python APIs.
            </p>
            <div className="service-card-icon icon-shape ms-auto icon-md rounded-circle border">
              <i className="ri-arrow-right-up-line" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

			</section>

		</>
	)
}
