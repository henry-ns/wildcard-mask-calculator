import styled, { css } from 'styled-components';
import Colors from '../../styles/colors';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	background-color: ${Colors.primaryDarkColor};
	color: ${Colors.secundaryTextColor};

	width: 100%;
	height: 100%;
`;

const Box = styled.div`
	display: grid;
	grid-template-columns: 1fr 3em 1fr;
`;

const Header = styled.header`
	background-color: ${Colors.header};
	position: absolute;
	width: 100vw;

	h1 {
		margin: auto;
		padding-top: 0.8em;
		padding-bottom: 0.8em;

		font-size: 1.8em;
		text-align: center;
	}
`;

const Text = styled.label`
	vertical-align: bottom;
	font-size: 1.5em;

	${({ size }) =>
		size &&
		css`
			font-size: ${size};
		`}
`;

export { Container, Box, Header, Text };
