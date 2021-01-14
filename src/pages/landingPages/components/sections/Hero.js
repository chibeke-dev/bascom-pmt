import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import heroImg from "./../../assets/images/features-split-image-01.png";
import { Link } from "react-router-dom";

const propTypes = {
	...SectionProps.types,
};

const defaultProps = {
	...SectionProps.defaults,
};

const Hero = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
}) => {
	// const [videoModalActive, setVideomodalactive] = useState(false);

	// const openModal = (e) => {
	// 	e.preventDefault();
	// 	setVideomodalactive(true);
	// };

	// const closeModal = (e) => {
	// 	e.preventDefault();
	// 	setVideomodalactive(false);
	// };

	const outerClasses = classNames(
		"hero section center-content",
		topOuterDivider && "has-top-divider",
		bottomOuterDivider && "has-bottom-divider",
		hasBgColor && "has-bg-color",
		invertColor && "invert-color",
		className
	);

	const innerClasses = classNames(
		"hero-inner section-inner",
		topDivider && "has-top-divider",
		bottomDivider && "has-bottom-divider"
	);

	return (
		<section {...props} className={outerClasses}>
			<div className="container-sm">
				<div className={innerClasses}>
					<div className="hero-content">
						<h1
							className="mt-0 mb-16 reveal-from-bottom"
							data-reveal-delay="200"
						>
							Proper Execution From Start To Finish
							{/* <span className="text-color-primary">startups</span> */}
						</h1>
						<div className="container-xs">
							<p
								className="m-0 mb-32  reveal-from-bottom"
								data-reveal-delay="400"
							>
								some random text
							</p>
							<div className="reveal-from-bottom" data-reveal-delay="600">
								<ButtonGroup>
									<Button color="primary" className="noHover" wideMobile>
										<Link
											className="text-white hover:text-white hover:no-underline no-underline"
											to="/sign-up"
										>
											Sign Up for Free
										</Link>
									</Button>
									<Button color="dark" className="noHover" wideMobile>
										<Link
											className="text-white hover:no-underline hover:text-white"
											to="/login"
										>
											Login
										</Link>
									</Button>
								</ButtonGroup>
							</div>
						</div>
					</div>
					<div
						className="hero-figure reveal-from-bottom illustration-element-01"
						data-reveal-value="20px"
						data-reveal-delay="800"
					>
						<Image
							className="has-shadow"
							src={heroImg}
							alt="Hero"
							width={896}
							height={400}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
