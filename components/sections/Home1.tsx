
import Link from "next/link"

export default function Home1() {
	return (
		<>

			<section className="section-hero-1 position-relative pt-200 pb-120 overflow-hidden">
				<div className="container position-relative z-3">
					<div className="row">
				<div className="col-lg-6 col-md-12">
  <span className="text-dark">👋 Hi there, I'm Moiz</span>
  <h1 className="ds-2 mb-3">
    Building Scalable <span className="text-primary-1">Web & Mobile Solutions</span>
  </h1>
  <p className="text-300 mb-6">
    I’m a Full Stack Developer with hands-on experience in JavaScript, MERN stack, Angular, and React Native. I help startups and businesses transform ideas into fast, user-friendly, and scalable digital products.
  </p>
  <Link href="/assets/resume.pdf" className="btn btn-gradient me-2" target="_blank">
    Download CV
    <i className="ri-download-line ms-2" />
  </Link>
  <Link href="/#contact" className="btn btn-outline-secondary d-inline-flex align-items-center">
    <span>Hire me</span>
    <i className="ri-arrow-right-line ms-2" />
  </Link>

  <p className="text-400 mt-6 mb-3">Delivering impact with modern tech stacks:</p>
  <ul className="text-300 mb-5 ps-3">
    <li>⚙️ Full-stack development using MERN, Angular & Node.js</li>
    <li>📱 Mobile app development with React Native</li>
    <li>🚀 Performance-first, scalable architecture design</li>
    <li>🔒 Focused on clean code, reusability, and security</li>
    <li>🤝 Agile collaboration in fast-paced startup environments</li>
  </ul>

  <div className="d-flex gap-3">
    <div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
      <img src="/assets/imgs/skills/skills-1/react.png" alt="brand" />
    </div>
    <div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
      <img src="/assets/imgs/skills/skills-1/express.png" alt="brand" />
    </div>
    <div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
      <img src="/assets/imgs/skills/skills-1/angular.jpg" alt="brand" />
    </div>
    <div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
      <img src="/assets/imgs/skills/skills-1/ts.png" alt="brand" />
    </div>
    <div className="brand-logo icon-xl icon-shape rounded-3 bg-900">
      <img src="/assets/imgs/skills/skills-1/aws.png" alt="brand" />
    </div>
    <div className="brand-logo icon-xl icon-shape rounded-3 bg-900 d-none d-md-flex">
      <img src="/assets/imgs/skills/skills-1/pg.png" alt="brand" />
    </div>
  </div>
</div>

					</div>
				</div>
				<div className="shape-1 position-absolute bottom-0 start-50 z-1 ms-10 d-none d-md-block">
					<img className="position-relative z-1 filter-gray" src="/assets/imgs/hero/hero-1/man.png" alt="man" />
					<div className="position-absolute top-50 start-0 translate-middle z-0 mt-8 ms-10 ps-8">
						<img className="ribbonRotate" src="/assets/imgs/hero/hero-1/decorate.png" alt="" />
					</div>
				</div>
				<div className="position-absolute top-0 start-0 w-100 h-100 filter-invert" data-background="assets/imgs/hero/hero-1/background.png" />
			</section>

		</>
	)
}
