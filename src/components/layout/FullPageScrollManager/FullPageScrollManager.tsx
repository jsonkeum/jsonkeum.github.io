import React, { useCallback, useEffect, useState, useRef } from "react";
import styles from './FullPageScrollManager.module.css';
import PageDots from "../PageDots/PageDots";
import Socials from "../Socials/Socials";

type Props = {
	children?: React.ReactNode[]
};

type ScrollDirection = 'down' | 'up'

const FullPageScrollManager: React.FC<Props> = ({ children }) => {
	const [currentPage, setCurrentPage] = useState(0);
	const currentPageRef = useRef(currentPage);
	const pageHeight = useRef<number>(0);
	const totalPages = useRef<number>(Array.isArray(children) ? children.length : 1);
	const isAnimating = useRef<boolean>(false);
	const handlingWheelEvent = useRef<boolean>(false);

	const onWheelHandler = async (event: WheelEvent) => {
		if (handlingWheelEvent.current) return;
		if (Math.abs(event.deltaY) < 50) return;
		handlingWheelEvent.current = true;
		const direction: ScrollDirection = event.deltaY > 0 ? 'down' : 'up';
		if (
			(direction == 'up' && currentPageRef.current == 0) || 
			(direction == 'down' && currentPageRef.current >= totalPages.current - 1)
		) {
			handlingWheelEvent.current = false;
			return;
		}
		const newPage = direction == 'up' ? currentPageRef.current - 1 : currentPageRef.current + 1;
		currentPageRef.current = newPage;
		setCurrentPage(newPage);
		await animate(newPage);
		handlingWheelEvent.current = false;
	}

	const onDragHandler = () => {
		console.log('dragging')
	}

	const containerResizeHandler = () => {
		pageHeight.current = document.getElementById('scrollManager')?.getBoundingClientRect().height || 0;
		animate(currentPageRef.current);
	}

	const animate = useCallback((page: number) => {
		return new Promise<void>(resolve => {
			isAnimating.current = true;
			document.getElementById('scrollManager')?.style.setProperty('transform', `translate3d(0px, ${pageHeight.current * page * -1}px, 0px)`);
			setTimeout(() => {
				isAnimating.current = false;
				resolve()
			}, 1000);
		})
	}, []);

	useEffect(() => {
		pageHeight.current = document.getElementById('scrollManager')?.getBoundingClientRect().height || 0;
		const elem = document.getElementById('scrollManager');
		if (elem) {
			window.addEventListener('resize', containerResizeHandler)
			elem.addEventListener('wheel', onWheelHandler);
			elem.addEventListener('mousedown', onDragHandler);
			elem.addEventListener('mouseup', onDragHandler);
		}
		() => {
			if (elem) {
				window.removeEventListener('resize', containerResizeHandler)
				elem.removeEventListener('wheel', onWheelHandler);
				elem.removeEventListener('mousedown', onDragHandler);
				elem.addEventListener('mouseup', onDragHandler);
			}
		}
		//eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onPageChange = useCallback((page: number) => {
		setCurrentPage(page);
		currentPageRef.current = page;
		animate(page);
	}, [animate])

	return (
		<>
			<div id='scrollManager' className={styles.fullPageManager}>
				{children}
			</div>
			{currentPage < totalPages.current - 1 && <Socials />}
			<PageDots currentPage={currentPage} totalPages={totalPages.current} onPageChange={onPageChange} />
		</>
	)
}

export default FullPageScrollManager;