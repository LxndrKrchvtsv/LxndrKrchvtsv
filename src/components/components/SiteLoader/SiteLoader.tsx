import React, { useLayoutEffect, useRef, useState } from 'react';
import { TPageTransition } from '../../../utils/types';
import Styles from './SiteLoader.module.css';
import { gsap } from 'gsap';
import CustomEase from 'gsap/CustomEase';
import { FIRST_VISIT } from '../../../utils/constants';

const EASE_VALUE_LOADER = 'M0,0 C0.28,0.28 0.114,0.684 0.596,0.684 0.922,0.684 0.836,1 1,1';

const SiteLoader = ({ children }: TPageTransition) => {
	const [counter, setCounter] = useState({ value: 0 });

	const svgRef = useRef<HTMLDivElement>(null);
	const durationRef = useRef<number>(5);

	const updateCountLoaderValue = () => {
		let progress = Math.floor(counter.value);
		setCounter({ value: progress });
	};

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.registerPlugin(CustomEase);

			if (sessionStorage.getItem(FIRST_VISIT)) {
				durationRef.current = 1.5;
			}

			const highLowPreloaders = gsap.utils.toArray<HTMLElement>(
				`.${Styles.high__preloader}, .${Styles.low__preloader}`,
			);

			const loader = svgRef?.current?.querySelector<HTMLElement>(`.${Styles.loader}`);
			const loaderWrapper = svgRef?.current?.querySelector<HTMLElement>(
				`.${Styles.loader__wrapper}`,
			);

			const svgSelector = svgRef?.current?.querySelector(`#${Styles.logo}`);

			highLowPreloaders.forEach((element, index) => {
				if (index === 0) {
					gsap.to(element, {
						delay: 1,
						duration: 1.5,
						width: '100%',
						ease: 'none',
					});
				} else {
					gsap.to(element, {
						delay: 1,
						duration: 1.5,
						left: '0%',
						ease: 'none',
					});
				}
			});

			gsap.fromTo(
				counter,
				{
					value: counter.value,
				},
				{
					onUpdate: updateCountLoaderValue,
					delay: 3,
					value: 100,
					duration: durationRef.current,
					ease: CustomEase.create('custom', EASE_VALUE_LOADER),
				},
			);
			loader &&
				gsap.fromTo(
					loader,
					{
						width: `${counter.value}%`,
					},
					{
						width: '100%',
						delay: 3,
						duration: durationRef.current,
						ease: CustomEase.create('custom', EASE_VALUE_LOADER),
						onComplete() {
							svgSelector?.classList.add(
								`${Styles.letter__animation}`,
								`${Styles.run__fill}`,
							);

							setTimeout(() => {
								loaderWrapper &&
									gsap.to(loaderWrapper, {
										// yPercent: 110,
										delay: 5,
										duration: 1,
										autoAlpha: 0,
										ease: 'power2.out',
										display: 'none',
									});
							}, durationRef.current);
						},
					},
				);
		}, svgRef);

		return () => {
			ctx.revert();
		};
	}, []);

	return (
		<div ref={svgRef} className={Styles.wrapper}>
			{children}
			<div className={Styles.loader__wrapper}>
				<div className={Styles.high__preloader}></div>
				<div className={Styles.loader}>
					<svg
						id={Styles.logo}
						width='1124'
						height='194'
						viewBox='0 0 1124 194'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M1 190.44V3.56H6.0012V178.664H41.5097V190.44H1Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M84.2809 190.44L105.986 93.16L85.7813 3.56H91.3826L103.586 60.392C104.186 63.2933 105.019 67.1333 106.086 71.912C107.22 76.6907 108.187 80.7867 108.987 84.2C109.72 80.7867 110.621 76.6907 111.687 71.912C112.821 67.1333 113.721 63.2933 114.388 60.392L126.791 3.56H132.192L111.988 92.648L133.693 190.44H128.091L114.488 125.928C113.888 123.197 113.021 119.443 111.888 114.664C110.821 109.885 109.887 105.704 109.087 102.12C108.287 105.704 107.353 109.885 106.286 114.664C105.219 119.443 104.386 123.197 103.786 125.928L89.7822 190.44H84.2809Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M179.965 190.44V3.56H186.766L213.573 176.36C213.506 172.947 213.439 169.192 213.373 165.096C213.306 161 213.239 157.245 213.173 153.832C213.173 150.419 213.173 148.115 213.173 146.92V3.56H217.974V190.44H211.072L184.566 17.64C184.633 19.176 184.666 21.48 184.666 24.552C184.666 27.4533 184.666 30.8667 184.666 34.792C184.733 38.5467 184.766 42.6427 184.766 47.08V190.44H179.965Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M269.947 190.44V3.56H285.951C290.486 3.56 294.42 5.94933 297.754 10.728C301.155 15.336 303.789 21.9067 305.656 30.44C307.523 38.8027 308.457 48.616 308.457 59.88V134.12C308.457 145.384 307.523 155.283 305.656 163.816C303.789 172.179 301.155 178.749 297.754 183.528C294.42 188.136 290.486 190.44 285.951 190.44H269.947ZM274.949 178.664H285.951C291.219 178.664 295.453 174.653 298.654 166.632C301.855 158.44 303.455 147.603 303.455 134.12V59.88C303.455 46.568 301.822 35.816 298.554 27.624C295.353 19.432 291.152 15.336 285.951 15.336H274.949V178.664Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M359.93 190.44V3.56H380.435C384.769 3.56 388.503 5.69333 391.637 9.95999C394.772 14.056 397.172 20.0293 398.839 27.88C400.573 35.56 401.44 44.6907 401.44 55.272C401.44 68.7547 399.939 80.0187 396.939 89.064C394.005 98.1093 389.97 103.571 384.836 105.448L401.94 190.44H395.938L379.434 105.96H364.931V190.44H359.93ZM364.931 94.44H380.435C385.303 94.44 389.17 90.856 392.038 83.688C394.972 76.3493 396.439 66.7067 396.439 54.76C396.439 42.6427 394.972 33.0853 392.038 26.088C389.17 18.92 385.303 15.336 380.435 15.336H364.931V94.44Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M449.912 190.44V3.304H454.914V87.784H470.217L486.421 3.304H491.922L474.718 92.904L492.923 190.44H487.021L470.117 99.304H454.914V190.44H449.912Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M539.895 190.44V3.56H560.4C564.734 3.56 568.468 5.69333 571.602 9.95999C574.737 14.056 577.137 20.0293 578.804 27.88C580.538 35.56 581.405 44.6907 581.405 55.272C581.405 68.7547 579.904 80.0187 576.904 89.064C573.97 98.1093 569.935 103.571 564.801 105.448L581.905 190.44H575.903L559.4 105.96H544.896V190.44H539.895ZM544.896 94.44H560.4C565.268 94.44 569.135 90.856 572.003 83.688C574.937 76.3493 576.404 66.7067 576.404 54.76C576.404 42.6427 574.937 33.0853 572.003 26.088C569.135 18.92 565.268 15.336 560.4 15.336H544.896V94.44Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M649.482 193C645.414 193 641.88 190.867 638.88 186.6C635.879 182.333 633.545 176.36 631.878 168.68C630.211 161 629.377 152.04 629.377 141.8V52.2C629.377 41.7893 630.211 32.744 631.878 25.064C633.545 17.384 635.879 11.496 638.88 7.39999C641.88 3.13333 645.414 1 649.482 1C653.616 1 657.217 3.21866 660.285 7.65599C663.352 12.0933 665.719 18.3227 667.386 26.344C669.053 34.3653 669.887 43.8373 669.887 54.76H664.886C664.886 41.6187 663.485 31.2933 660.685 23.784C657.951 16.2747 654.217 12.52 649.482 12.52C644.814 12.52 641.113 16.104 638.379 23.272C635.712 30.2693 634.378 39.912 634.378 52.2V141.8C634.378 154.088 635.712 163.816 638.379 170.984C641.113 177.981 644.814 181.48 649.482 181.48C654.283 181.48 658.051 177.725 660.785 170.216C663.519 162.536 664.886 152.211 664.886 139.24H669.887C669.887 150.163 669.053 159.635 667.386 167.656C665.719 175.677 663.352 181.907 660.285 186.344C657.217 190.781 653.616 193 649.482 193Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M719.86 190.44V3.56H724.861V87.528H752.868V3.56H757.869V190.44H752.868V99.304H724.861V190.44H719.86Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M825.646 190.44L805.641 3.56H810.943L825.746 144.36C826.546 151.699 827.213 158.696 827.747 165.352C828.28 171.837 828.68 176.787 828.947 180.2C829.214 176.787 829.614 171.837 830.147 165.352C830.747 158.696 831.448 151.699 832.248 144.36L847.151 3.56H852.053L832.048 190.44H825.646Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M916.429 190.44V15.336H894.824V3.56H942.835V15.336H921.43V190.44H916.429Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M1009.31 193C1004.84 193 1000.94 190.952 997.609 186.856C994.342 182.76 991.808 176.957 990.007 169.448C988.207 161.939 987.307 153.149 987.307 143.08H992.308C992.308 154.685 993.842 163.987 996.909 170.984C1000.04 177.981 1004.18 181.48 1009.31 181.48C1014.31 181.48 1018.21 178.323 1021.01 172.008C1023.88 165.523 1025.32 156.563 1025.32 145.128C1025.32 135.229 1024.22 126.611 1022.02 119.272C1019.81 111.933 1016.81 106.813 1013.01 103.912L1004.61 97.512C999.81 93.7573 996.042 87.528 993.308 78.824C990.641 69.9493 989.307 59.4533 989.307 47.336C989.307 37.7787 990.108 29.5867 991.708 22.76C993.375 15.7627 995.709 10.3867 998.71 6.63199C1001.78 2.87733 1005.34 1 1009.41 1C1015.55 1 1020.38 5.43733 1023.92 14.312C1027.52 23.016 1029.32 34.9627 1029.32 50.152H1024.32C1024.32 38.7173 1022.95 29.5867 1020.21 22.76C1017.48 15.9333 1013.85 12.52 1009.31 12.52C1004.64 12.52 1000.98 15.5067 998.309 21.48C995.642 27.4533 994.308 35.7307 994.308 46.312C994.308 55.528 995.342 63.6347 997.409 70.632C999.476 77.4587 1002.28 82.3227 1005.81 85.224L1014.21 91.88C1019.15 95.8053 1023.05 102.461 1025.92 111.848C1028.85 121.235 1030.32 132.072 1030.32 144.36C1030.32 154.259 1029.45 162.877 1027.72 170.216C1026.05 177.384 1023.65 183.016 1020.51 187.112C1017.38 191.037 1013.65 193 1009.31 193Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
						<path
							d='M1095.59 190.44L1075.59 3.56H1080.89L1095.69 144.36C1096.49 151.699 1097.16 158.696 1097.69 165.352C1098.23 171.837 1098.63 176.787 1098.89 180.2C1099.16 176.787 1099.56 171.837 1100.09 165.352C1100.69 158.696 1101.4 151.699 1102.2 144.36L1117.1 3.56H1122L1102 190.44H1095.59Z'
							stroke='#EEEEEE'
							strokeWidth='1'
							mask='url(#path-1-outside-1_4_19)'
						/>
					</svg>
				</div>
				<div className={Styles.low__preloader}></div>
				<div className={Styles.counter}>{`${counter.value}%`}</div>
			</div>
		</div>
	);
};

export default SiteLoader;
