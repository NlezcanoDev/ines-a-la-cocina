export default function ObserverAnimation(
	domElement: string,
	classAnimation: string,
	mediaQuery: number,
	maxMediaQuery = 10000000,
) {
	console.log(domElement)
	const width = window.innerWidth
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (
					entry.isIntersecting &&
					width >= mediaQuery &&
					width < maxMediaQuery
				) {
					entry.target.classList.add(classAnimation)
					console.log('el:', domElement)
					observer.disconnect()
				}
			})
		},
		{
			threshold: 0.75, // El 100% del elemento debe ser visible
		},
	)

	document.querySelectorAll(domElement).forEach((el) => {
		observer.observe(el)
	})
}
