import React from 'react';
import Link from '../../atomicComponents/Link/Link';
import { CONTACT_DATA } from '../../../utils/constants';
import Styles from './Music.module.css';

const [name, link] = CONTACT_DATA[CONTACT_DATA.length - 1];

const MusicContent = () => {
	return (
		<div className={Styles.music__content}>
			<article className={Styles.article}>
				<p className={Styles.paragraph}>
					Late evenings in the second half of July, as well as August and September of
					<strong> 2013</strong>, when I returned from late-night walks, listening to a
					variety of electronic music in my headphones: dubstep, jazz and dub mixes,
					Avicii, and so on. This period, this music, the subdued urban lighting with its
					orange hue against a clear night sky, or a sky shrouded in thick clouds
					occasionally with a gentle drizzle - it all created a special atmosphere in my
					mind, giving rise to vivid imagery of me behind the DJ deck in front of an
					ecstatic crowd, sharing my inner, powerful life energy with them and receiving
					an equally powerful surge of energy in return.
					<strong>
						In my mind, I could hear something I had never heard anywhere else - and it
						turned out to be my own sounds, my musical ideas!
					</strong>
				</p>
				<p className={Styles.paragraph}>
					In those days, I realized that simply listening to music was no longer enough
					for me. <strong>I wanted to create it myself.</strong>I wanted not only to
					create but also to perform in front of an audience, blending different tracks
					and producing something unique and individual as{' '}
					<strong>a result of creative expression, an act of art</strong>.
				</p>
				<p className={Styles.paragraph}>
					<strong>
						That's when a new dream was born in me - to become an electronic music
						composer and a DJ!
					</strong>
				</p>
				<p className={Styles.paragraph}>
					<strong>It's been 10 years already</strong>, but unfortunately, I don't have
					much to show for it yet. It's only now, after all this time, that I'm coming to
					the realization that there will never be
					<strong>"the right time"</strong>. If you want to develop in this field, you
					have to do it now, not wait for the perfect moment.
					<strong>
						Don't live with the syndrome of postponed life; instead, start realizing
						your dreams now.
					</strong>
				</p>
			</article>

			<Link link={link} name={`check my ${name}`} />
		</div>
	);
};

export default MusicContent;
