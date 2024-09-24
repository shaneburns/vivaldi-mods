function insertAnimationBlock(){
	let tabbar = document.querySelector('#main > div.inner > div.tabbar-wrapper > div.tabbar-wrapper');
	let animation_block = document.querySelector('#animation-block');
	if(tabbar && !animation_block){
		let background = document.createElement('div');
		background.id = 'animation-block';
		let max = 100;
		let class_options = ['star','line'];

		for(let i = 0; i < max; i++){
			let block = document.createElement('div');
			block.classList.add(class_options[Math.random() > 0.5 ? 0 : 1]);
			background.appendChild(block);
		}

		tabbar.appendChild(background);
	}else if(!animation_block){
		setTimeout(insertAnimationBlock, 200);
	}
}

document.addEventListener('DOMContentLoaded', insertAnimationBlock);