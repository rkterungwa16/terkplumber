/* eslint-disable */
export default {
  displayName: 'frontend',
  preset: '../../jest.preset.js',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/apps/frontend',
  moduleNameMapper: {
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@components/(.*)': ['<rootDir>/components/$1'],
    '^@page-components/(.*)': ['<rootDir>/page-components/$1'],
    '^@routes/(.*)': ['<rootDir>/routes/$1'],
    '^@styles/(.*)': ['<rootDir>/styles/$1'],
  },
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/fileTransformer.js',
    '\\.[jt]sx?$': ['babel-jest', { presets: ['@nx/next/babel'] }],
  },
};
