'use client'
import Link from "next/link"
import CountUp from 'react-countup'
export default function Skills1() {
	return (
		<>

			<section className="section-skills-1 position-relative section-padding bg-900">
				<div className="container">
					<div className="row">
						<div className="text-center mb-7">
							<h3 className="ds-3 mt-3 mb-3 text-primary-1">My Skills</h3>
							<span className="fs-5 fw-medium text-200">
								I thrive on turning complex problems into simple, beautiful
								<br className="d-md-block d-none" />
								solutions that enhance user satisfaction.
							</span>
						</div>
						<div className="d-flex flex-wrap flex-lg-nowrap justify-content-center gap-3 mb-7 px-6">
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/react.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={98} />%</h3>
									<p className="text-400 fw-medium text-uppercase">React</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5 w-90 h-90">
									<img src="/assets/imgs/skills/skills-1/express.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={82} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Express</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/angular.jpg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={76} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Angular</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/ts.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={58} />%</h3>
									<p className="text-400 fw-medium text-uppercase">TypeScript </p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/dotnet.jpg" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={60} />%</h3>
									<p className="text-400 fw-medium text-uppercase">Dot Net</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/aws.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={72} />%</h3>
									<p className="text-400 fw-medium text-uppercase">AWS</p>
								</div>
							</div>
							<div className="skills">
								<div className="skills-icon mb-5">
									<img src="/assets/imgs/skills/skills-1/pg.png" alt="" />
								</div>
								<div className="skills-ratio text-center">
									<h3 className="count fw-semibold my-0"><CountUp className="odometer fw-semibold" enableScrollSpy={true} end={93} />%</h3>
									<p className="text-400 fw-medium text-uppercase">PostGre SQL</p>
								</div>
							</div>
						</div>
						<div className="text-center">
							<p className="fs-5 text-200 mb-0">In addition, I have some programming knowledge such as: </p>
							<div className="d-flex justify-content-center gap-1">
								<Link href="/#" className="fs-5 fw-bold">HTML,</Link>
								<Link href="/#" className="fs-5 fw-bold">CSS,</Link>
								<Link href="/#" className="fs-5 fw-bold">Javascript,</Link>
								<Link href="/#" className="fs-5 fw-bold">Bootstrap,</Link>
								<Link href="/#" className="fs-5 fw-bold">TailwindCSS</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

		</>
	)
}
