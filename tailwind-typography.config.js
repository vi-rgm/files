/**
 * Tailwind Typography can only be configured via JavaScript, using a legacy
 * configuration file like this one.
 */

/**
 * Tailwind Typography’s default styles are opinionated, and
 * you may need to override them if you have mockups to
 * replicate. You can view the default modifiers here:
 *
 * https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
 */
/**
 * The default configuration is used for the `prose` class.
 * It is also used for the `prose-sm`, `prose-lg`, and
 * `prose-xl` classes, which are used to set the font size
 * of the text.
 */
/**
 * By default, _tw uses Tailwind Typography’s Neutral gray
 * scale. If you are adapting an existing design and you need
 * to set specific colors throughout, you can do so here. In
 * your `./theme/functions.php file, you will need to replace
 * `-neutral` with `-custom-class`.
 */

// Copied from Tailwind Typography.
const hexToRgb = (hex) => {
	if (typeof hex !== 'string' || hex.length === 0) {
		return hex;
	}

	hex = hex.replace('#', '');
	hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex;
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);
	return `${r} ${g} ${b}`;
};

module.exports = {
	theme: {
		extend: {
			typography: (theme) => ({
				// Default configuration for the `prose` class.
				DEFAULT: {
					css: [
						{
							maxWidth: 'none',
							h2: {
								fontSize: theme('fontSize.xl')[0],
								marginTop: theme('spacing.10'),
								marginBottom: theme('spacing.3'),
							},
							p: {
								fontSize: theme('fontSize.base')[0],
								marginTop: theme('spacing.0'),
								marginBottom: theme('spacing.4'),
							},
							a: {
								color: theme('colors.primary'),
								textDecoration: 'none',
								fontStyle: 'italic',
								transitionProperty: 'color',
								transitionDuration: '150ms',
								'&:hover': {
									color: theme('colors.primary-dark'),
								},
							},
							figure: {
								marginTop: theme('spacing.6'),
								marginBottom: theme('spacing.10'),
							},
							figcaption: {
								fontSize: theme('fontSize.xs')[0],
								color: theme('colors.text-two'),
								fontStyle: 'italic',
								marginTop: theme('spacing.2'),
								textAlign: 'left',
							},
							ul: {
								li: {
									'&::marker': {
										color: theme('colors.text-two'),
									},
								},
							},
						},
					],
				},

				dark: {
					css: {
						'--tw-prose-body': theme('colors.text-two-dark'),
						'--tw-prose-headings': theme('colors.text-one-dark'),
						figcaption: {
							color: theme('colors.text-two-dark'),
						},
						p: {
							color: theme('colors.text-two-dark'),
						},
						a: {
							color: theme('colors.primary-dark'),
							'&:hover': {
								color: theme('colors.primary'),
							},
						},
						h2: {
							color: theme('colors.text-one-dark'),
						},
						ul: {
							li: {
								'&::marker': {
									color: theme('colors.text-two-dark'),
								},
							},
						},
					},
				},

				'custom-style-tc': {
					css: {
						'--tw-prose-body': theme('colors.text-two'),
						'--tw-prose-headings': theme('colors.text-one'),
						'--tw-prose-lead': theme('colors.text-two'),
						'--tw-prose-links': theme('colors.primary'),
						'--tw-prose-bold': theme('colors.text-one'),
						'--tw-prose-counters': theme('colors.primary'),
						'--tw-prose-bullets': theme('colors.text-one'),
						'--tw-prose-hr': theme('colors.foreground'),
						'--tw-prose-quotes': theme('colors.foreground'),
						'--tw-prose-quote-borders': theme('colors.primary'),
						'--tw-prose-captions': theme('colors.foreground'),
						'--tw-prose-kbd': theme('colors.foreground'),
						'--tw-prose-kbd-shadows': hexToRgb(
							theme('colors.foreground')
						),
						'--tw-prose-code': theme('colors.foreground'),
						'--tw-prose-pre-code': theme('colors.background'),
						'--tw-prose-pre-bg': theme('colors.foreground'),
						'--tw-prose-th-borders': theme('colors.foreground'),
						'--tw-prose-td-borders': theme('colors.foreground'),
						'--tw-prose-invert-body': theme('colors.text-two-dark'),
						'--tw-prose-invert-headings': theme(
							'colors.text-one-dark'
						),
						'--tw-prose-invert-lead': theme('colors.text-two-dark'),
						'--tw-prose-invert-links': theme('colors.primary-dark'),
						'--tw-prose-invert-bold': theme('colors.text-one-dark'),
						'--tw-prose-invert-counters': theme(
							'colors.primary-dark'
						),
						'--tw-prose-invert-bullets': theme(
							'colors.text-one-dark'
						),
						'--tw-prose-invert-hr': theme('colors.background'),
						'--tw-prose-invert-quotes': theme('colors.background'),
						'--tw-prose-invert-quote-borders':
							theme('colors.primary'),
						'--tw-prose-invert-captions':
							theme('colors.background'),
						'--tw-prose-invert-kbd': theme('colors.background'),
						'--tw-prose-invert-kbd-shadows': hexToRgb(
							theme('colors.background')
						),
						'--tw-prose-invert-code': theme('colors.foreground'),
						'--tw-prose-invert-pre-code':
							theme('colors.background'),
						'--tw-prose-invert-pre-bg': theme('colors.foreground'),
						'--tw-prose-invert-th-borders':
							theme('colors.background'),
						'--tw-prose-invert-td-borders':
							theme('colors.background'),
					},
				},
			}),
		},
	},
};
