import React, { useLayoutEffect, useRef } from 'react';
import Styles from './About.module.css';
import meWithFather from '../../assets/images/me_and_father.jpeg';
import meNow from '../../assets/images/me_now.jpg';
import { gsapContextAbout } from '../../utils/helpers';

const About = () => {
	const aboutRef = useRef(null);

	useLayoutEffect(() => {
		const context = gsapContextAbout(aboutRef);

		return () => context.revert();
	}, []);

	return (
		<section ref={aboutRef} className={Styles.about__wrapper}>
			<div className={Styles.background}></div>

			<div className={Styles.content__wrapper}>
				<h1 className={Styles.header}>Here's couple of words about me:</h1>

				<article className={Styles.article}>
					<figure className={Styles.pictures}>
						<figcaption>
							On this photo with my <strong>Father</strong> (blessed memory) I am six
							y.o.
						</figcaption>
						<img src={meWithFather} alt='I and my Father' />
					</figure>
					<figure className={Styles.pictures}>
						<figcaption>Of course, I've grown a bit older now,</figcaption>
						<img src={meNow} alt='Me now' />
						<figcaption>and I look something like this</figcaption>
					</figure>
				</article>

				<article className={Styles.article}>
					<p className={Styles.paragraph}>
						Until the age of 7, I lived in the{' '}
						<strong>village of Ugut, this is a place in Western Siberia.</strong> Then,
						my family <strong>moved to Surgut,</strong> just 250 kilometers from the
						Ugut. I lived there until the age of 22, and then{' '}
						<strong>I relocated to Yekaterinburg.</strong>
					</p>

					<p className={Styles.paragraph}>
						<strong>Currently</strong>, I reside in <strong>Vilnius,</strong> Lithuania.
						It's a stopover on my path.
					</p>
				</article>

				<article className={Styles.article}>
					<p className={Styles.paragraph}>
						I began my journey into frontend development in 2016. I realized that
						creating websites is a realm where one can materialize their thoughts and
						ideas.{' '}
						<strong>
							Each website is a distinct universe, and you're the creator,
							transferring from the world of ideas to the material, digital world.
						</strong>
					</p>

					<p className={Styles.paragraph}>
						<strong>
							This is an opportunity for self-expression and defining one's
							personality through the visual aesthetics of the website and
							well-structured, comprehensible code.
						</strong>
					</p>

					<p className={Styles.paragraph}>
						In 2017, I stumbled upon a website of a freelancer, developed using{' '}
						<strong>React.</strong>&#32; That's when I understood that this is what I
						needed. However, my <strong>JavaScript</strong>&#32; skills were not strong
						then, and I needed to start from the basics. Slowly but surely, I acquired
						the skills, and now I masterfully wield the tools to bring my fantasies to
						life. The journey was challenging, but against the doubts of those around
						me, I succeeded and proved to myself that{' '}
						<strong>nothing is impossible.</strong> :)
					</p>
				</article>

				<article className={Styles.article}>
					<p className={Styles.paragraph}>
						<h2 className={Styles.goals}>What are my current goals?</h2>
						To complete my bachelor's degree, enroll in and complete a master's program,
						establish my own company/startup – anything that brings value to society and
						our planet (yes, I'm brainstorming ideas,&#32;
						<strong>
							if you have something, do reach out, I'd be thrilled to discuss!
						</strong>
						&#32;To immigrate to a country where I'd like to settle down and start a
						family. Previously, I was thinking that Canada is my country, but now I'm
						uncertain and searching for my place.
					</p>
				</article>

				<article className={Styles.article}>
					<p className={Styles.paragraph}>
						Now, <strong>I'm open to new opportunities</strong> both on a{' '}
						<strong>permanent full time basis and for freelancing.</strong> I'm looking
						forward to new connections and collaborations.
					</p>
					<p className={Styles.paragraph}>
						<strong>I wish to you goodness and prosperity!</strong>
					</p>
				</article>
			</div>
		</section>
	);
};

export default About;
