/* eslint-disable */
export default {
  displayName: 'terkplumber-ui-styles',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html', 'css'],
  coverageDirectory: '../../coverage/libs/terkplumber-ui-styles',
};
