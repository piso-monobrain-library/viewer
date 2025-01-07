// tailwind.config.js
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				// 라이트 모드 색상
				light: {
					background: '#ffffff', // 라이트 배경색
					text: '#000000', // 라이트 텍스트 색상
				},
				// 다크 모드 색상
				dark: {
					background: '#1a202c', // 다크 배경색
					text: '#ffffff', // 다크 텍스트 색상
				},
			},
		},
	},
	plugins: [],
};
