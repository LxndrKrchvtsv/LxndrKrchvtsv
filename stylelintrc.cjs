module.exports = {
    extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
    rules: {
        'at-rule-no-unknown': [
            true,
            {
                ignoreAtRules: ['mixin', 'define-mixin', 'use', 'for'],
            },
        ],
        'custom-property-empty-line-before': null,
        'selector-class-pattern': null,
        'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'local'] }],
        'alpha-value-notation': 'number',
        'color-function-notation': 'legacy',
        'declaration-empty-line-before': null,
        'order/order': [
            [
                'custom-properties',
                {
                    type: 'at-rule',
                    name: 'mixin',
                },
                'declarations',
                'at-rules',
                'rules',
            ],
        ],
        'no-descending-specificity': null,
        'function-no-unknown': [
            true,
            { ignoreFunctions: ['$'] },
        ]
    },
}
