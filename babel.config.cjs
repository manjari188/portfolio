module.exports = {
    presets: ['@babel/preset-env', "@babel/preset-react", "@babel/preset-typescript", {
        "modules": "commonjs"
    }],
    plugins: [
        "@babel/plugin-transform-modules-commonjs"
    ]
};

// module.exports = {
//     "presets": [
//     "@babel/preset-env",
//     "@babel/preset-react",
//     "@babel/preset-typescript",
//       {
//         "modules": "commonjs"
//       }
//   ],
//   "plugins": [
//     "@babel/plugin-transform-modules-commonjs"
//   ]}