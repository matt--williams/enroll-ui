module.exports = {
  name: 'broker-staff-models',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/broker-staff/models',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
