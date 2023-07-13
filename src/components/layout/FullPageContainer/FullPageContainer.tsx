import React from "react";
import styles from './FullPageContainer.module.css';

type Props = {
	children?: React.ReactNode
	style?: React.CSSProperties;
	background?: string;
};

const FullPageContainer: React.FC<Props> = ({ children, style = {}, background }) => {
	return <div className={styles.fullPageContainer} style={{
		backgroundImage: background ? `url(${background})` : '',
		...style,
	}}>
		{children}
	</div>
}

export default FullPageContainer;