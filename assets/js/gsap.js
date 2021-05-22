gsap.timeline().to(".left-loading", { delay: 1.5, x: '-100%' });
gsap.timeline().to(".right-loading", { delay: 1.5, x: '100%' });
gsap.timeline().to(".loader", { duration: 0.5, delay: 1, opacity: 0  });
setTimeout(function(){
	gsap.timeline()
	.from("#logo", { duration: 1, delay: 1, opacity: 0, y: -20 })
	.to("#logo", {duration: 1, opacity: 1, });
	gsap.timeline()
	.from(".jb-text", { duration: 1, delay: 1,  opacity: 0, y: 50 })
	.to(".jb-text", {duration: 1, opacity: 1, });
	gsap.timeline()
	.from(".jb-image", { duration: 1, delay: 1, opacity: 0, x: 50 })
	.to(".jb-image", {duration: 1, opacity: 1, });
	
	const navLink = Array.from(document.getElementsByClassName('nav-item'));
	let duration =1
	navLink.forEach((n) => {
		gsap.timeline()
		.from(n, { duration: duration += 0.2, delay: 1, opacity: 0, y: -50 })
		.to(n, {duration: 1, opacity: 1, });
})
	
}, 1500)

