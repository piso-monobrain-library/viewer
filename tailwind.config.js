// tailwind.config.js
module.exports = {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	darkMode: ['class'],
	theme: {
		extend: {
			colors: {
				// 라이트 모드 색상
				light: {
					background: '#e0f2e9', // 라이트 배경색 (연한 초록)
					text: '#1b5e20', // 라이트 텍스트 색상 (어두운 초록)
					primary: '#388e3c', // 라이트 프라이머리 색상 (초록)
					secondary: '#a5d6a7', // 라이트 세컨더리 색상 (연한 초록)
				},
				// 다크 모드 색상
				dark: {
					background: '#0d3b0d', // 다크 배경색 (더 어두운 초록)
					text: '#f1fff8', // 다크 텍스트 색상 (흰색 계열에 초록이 묻은 느낌)
					primary: '#4caf50', // 다크 프라이머리 색상 (초록)
					secondary: '#81c784', // 다크 세컨더리 색상 (연한 초록)
				},
			},
			fontFamily: {
				jua: ['"Gowun Dodum"', 'serif'],
			},
		},
	},
	plugins: [],
};
