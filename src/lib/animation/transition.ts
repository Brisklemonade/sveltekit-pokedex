export declare type EasingFunction = (t: number) => number;
export interface TransitionConfig {
	delay?: number;
	duration?: number;
	easing?: EasingFunction;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}

export interface TypewriterParams {
	speed?: number;
}
/**
 * Anitmation that makes text appear to be typed out.
 * @param {HTMLElement} node - The dom node to be affected.
 * @param {object} speed - The value that determines the speed of the animation.
 *
 * @example <div transition:typewriter>Will be typed out</div>
 */
export declare function typewriter(node: Element, { speed }?: TypewriterParams): TransitionConfig;
